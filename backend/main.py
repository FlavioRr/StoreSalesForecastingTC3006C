from flask import Flask, request, jsonify
import logging  # Captures errors and important events for flask.
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
try:
    model = joblib.load('./templates/StoreSales.pkl')
except FileNotFoundError:
    logging.error("Model file 'StoreSales.pkl' not found.")
    raise SystemExit(1)


@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()

        # Validate input data
        if not input_data:
            return jsonify({'error': 'No input data provided'}), 400

        input_features = preprocess_input_data(input_data)

        if input_features is None:
            return jsonify({'error': 'Invalid input data'}), 400

        prediction = model.predict(input_features)
        
        # Convert the NumPy array to a Python list
        prediction_list = prediction.tolist()

        return jsonify({'prediction': prediction_list})
    except Exception as e:
        logging.exception("An error occurred during prediction.")
        return jsonify({'error': str(e)}), 500


def preprocess_input_data(input_data):
    try:
        numeric_feature_keys = [
            'trend',
            'sin(1,freq=W-SUN)',
            'cos(1,freq=W-SUN)',
            'sin(2,freq=W-SUN)',
            'cos(2,freq=W-SUN)',
            'sin(3,freq=W-SUN)',
            'cos(3,freq=W-SUN)',
            'Average_oil',
        ]

        categorical_feature_keys = [
            'week_day',
            'dayofweek_1',
            'dayofweek_2',
            'dayofweek_3',
            'dayofweek_4',
            'dayofweek_5',
            'dayofweek_6',
            'type_Additional',
            'type_Bridge',
            'type_Event',
            'type_Holiday',
            'type_Transfer',
            'type_Work Day',
        ]

        # Validate input data keys
        if not all(key in input_data for key in numeric_feature_keys):
            return None

        # Extract and preprocess numeric features
        numeric_features = [input_data[key] for key in numeric_feature_keys]

        # Extract and preprocess categorical features
        categorical_features = [input_data[key] for key in categorical_feature_keys]

        # Convert categorical features to one-hot encoded format
        categorical_encoded = np.array(categorical_features)

        # Combine numeric and one-hot encoded categorical features
        input_features = np.concatenate((numeric_features, categorical_encoded), axis=None)

        # Reshape to a 2D array
        input_features = input_features.reshape(1, -1)

        return input_features

    except Exception as e:
        logging.error(f"Error in preprocess_input_data: {str(e)}")
        return None


if __name__ == '__main__':
    app.run(debug=True)
