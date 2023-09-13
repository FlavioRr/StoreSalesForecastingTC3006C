import React, { useState } from "react";
import Chart from "../components/Chart";
import Form from "../components/Form";

const ProjectInfo = () => {
  
  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="overflow-y-auto h-full w-1/3 p-6 rounded shadow-md bg-white">
        <Form />
      </div>
    <Chart/>
    </div>
  );
};

export default ProjectInfo;
