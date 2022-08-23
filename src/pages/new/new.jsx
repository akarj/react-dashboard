import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { database, auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);

  console.log(data);
  console.log("file", file);

  console.log("per", per !== null && per < 100, per);

  useEffect(() => {
    const uploadFile = () => {
      const newName = new Date().getTime() + file.name;
      const storageRef = ref(storage, newName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setPer(progress);
          console.log("Upload is paused", progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        error => {
          // console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setData(prev => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const changeHandler = e => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(database, "users", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (ev) {
      window.alert(ev.message);
    }
  };

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
            <form onSubmit={submitHandler}>
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
                      onChange={changeHandler}
                    />
                  </div>
                );
              })}

              <button disabled={per !== null && per < 100}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
