from flask import Flask, request, jsonify
import logging #Captures errors and important events for flask.
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
try:
    model = joblib.load('./templates/StoreSales.pkl')
except FileNotFoundError:
    logging.error("Model file 'linear_model.pkl' not found.")
    raise SystemExit(1)

def predict():
    try:
        input_data = request.json

        # Validate input data
        if not input_data:
            return jsonify({'error': 'No input data provided'}), 400

        # Perform input data validation here if needed

        input_features = preprocess_input_data(input_data)

        if input_features is None:
            return jsonify({'error': 'Invalid input data'}), 400

        prediction = model.predict(input_features)

        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        logging.exception("An error occurred during prediction.")
        return jsonify({'error': str(e)}), 500

def preprocess_input_data(input_data):
    try:
        # Define a list of keys expected in the input data
        expected_keys = [
            'date',
            'trend',
            'sin(1,freq=W-SUN)',
            'cos(1,freq=W-SUN)',
            'sin(2,freq=W-SUN)',
            'cos(2,freq=W-SUN)',
            'sin(3,freq=W-SUN)',
            'cos(3,freq=W-SUN)',
            'Average_oil',
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
            'type_Transfer'
        ]

        # Ensure all expected keys are present in the input data
        if not all(key in input_data for key in expected_keys):
            return None  # Return None for invalid input data

        # Convert input data into a NumPy array matching the model's input shape
        input_features = np.array([
            input_data['date'],
            input_data['trend'],
            input_data['sin(1,freq=W-SUN)'],
            input_data['cos(1,freq=W-SUN)'],
            input_data['sin(2,freq=W-SUN)'],
            input_data['cos(2,freq=W-SUN)'],
            input_data['sin(3,freq=W-SUN)'],
            input_data['cos(3,freq=W-SUN)'],
            input_data['Average_oil'],
            input_data['week_day'],
            input_data['dayofweek_1'],
            input_data['dayofweek_2'],
            input_data['dayofweek_3'],
            input_data['dayofweek_4'],
            input_data['dayofweek_5'],
            input_data['dayofweek_6'],
            input_data['type_Additional'],
            input_data['type_Bridge'],
            input_data['type_Event'],
            input_data['type_Holiday'],
            input_data['type_Transfer']
        ]).reshape(1, -1)  # Reshape to match the model's input shape

        return input_features

    except Exception as e:
        logging.error(f"Error in preprocess_input_data: {str(e)}")
        return None

if __name__ == '__main__':
    app.run(debug=True)