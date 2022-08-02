import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="profileImage">
                  Image
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  style={{ display: "none" }}
                  onChange={e => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map(input => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.id}>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                    />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
