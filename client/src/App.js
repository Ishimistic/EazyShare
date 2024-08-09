import { useState, useEffect, useRef } from "react";
import "./App.css";
import { uploadFile } from "./service/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  // const url =
  //   "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log("Response: ", response);
        setResult(response.path || "Path not found in response");
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <div className="navbar">EazyShare</div>
      {/* <img src={url} className="img" alt="" /> */}
      <div className="wrapper">
        <h1>Create a link for easy share of your file</h1>
        <p>Upload any file and Get the link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {result !== "" ? (
          <a
            href={result}
            target="_blank"
            rel="noopener noreferrer"
            download={{ file }}
          >
            Download   : - {result}
          </a>
        ) : (
          ""
        )}

        {/* <a href={result} download={file} target="_blank" rel="noopener noreferrer">
          Download {file}
        </a> */}
      </div>
    </div>
  );
}

export default App;
