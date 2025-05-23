import React, { useState } from "react";

function TextFilePortal() {
  const [fileContent, setFileContent] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setError("");
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContent(event.target.result);
      };
      reader.onerror = () => {
        setError("Error reading file.");
      };
      reader.readAsText(file);
    } else {
      setError("Please upload a valid .txt file.");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h2>Text File Upload Portal</h2>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {fileContent && (
        <div style={{ marginTop: 20 }}>
          <h3>File Content:</h3>
          <pre style={{ background: "#f4f4f4", padding: 10 }}>{fileContent}</pre>
        </div>
      )}
    </div>
  );
}

export default TextFilePortal;