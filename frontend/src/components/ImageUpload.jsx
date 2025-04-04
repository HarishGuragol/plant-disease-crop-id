import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [recommendation, setRecommendation] = useState("");  // New state

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://127.0.0.1:8000/upload/", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log("API Response:", result);  // Debugging log

        if (result.status === "success") {
          setPrediction(result.label);
          setRecommendation(result.recommendation);  // Save recommendation
        } else {
          setPrediction("Error: " + result.message);
          setRecommendation("");
        }
      } catch (error) {
        console.error("Upload error:", error);
        setPrediction("Upload failed.");
        setRecommendation("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
      {image && <img src={image} alt="Uploaded" className="w-48 h-48 object-cover rounded-lg" />}
      {prediction && <p className="mt-4 text-lg font-semibold">Prediction: {prediction}</p>}
      {recommendation && (
        <p className="mt-2 text-lg text-green-700">Recommendation: {recommendation}</p>
      )}
    </div>
  );
};

export default ImageUpload;
