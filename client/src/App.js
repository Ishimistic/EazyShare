import { useState } from "react";
import "./App.css";
import { uploadFile } from "./service/api";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      const response = await uploadFile(data);
      setResult(response || "Path not found in response");
    }
  };

  return (
    <div className="container">
      <div className="navbar">EazyShare</div>

      <div className="wrapper">
        <h1>Create a link for easy share of your file</h1>
        <p>Upload any file and Get the link.</p>

        {/* 
        <input
          type="file"
          className="fileInput"
          onChange={(e)=>setFile(e.target.files[0])}
        /> */}
        <div className="fileInputContainer">
          <label className="customFileLabel">
            Choose File
            <input
              type="file"
              className="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <span>No file chosen</span> {/* This will remain unstyled */}
        </div>
        

        {file && <button onClick={() => getImage()}>Upload</button>}

        {result !== "" ? (
          <a
            href={result}
            target="_blank"
            rel="noopener noreferrer"
            download={{ file }}
          >
            Download : - {result}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
