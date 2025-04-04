import React from "react";
import ImageUpload from "./components/ImageUpload";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-gray-800">
      <h1 className="text-4xl font-bold">Plant Disease & Crop Identification</h1>
      <p className="mt-4 text-lg">Upload an image to detect diseases or identify crops.</p>
      <div className="mt-6 flex gap-4">
        <ImageUpload className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Upload Image
        </ImageUpload>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Open Chatbot
        </button>
      </div>
    </div>
  );
};

export default App;
