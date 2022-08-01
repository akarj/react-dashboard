import "./SingleUser.scss";
import Charts from "../../components/charts/Charts";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";

const SingleUser = () => {
  return (
    <div className="userDescription">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://source.unsplash.com/1000x1000/?wallpaper,landscape"
                alt="Profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">LandScape</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">wonderfulimage@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91&nbsp;9999999999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Demo Houseno, City, State - 111111
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspectRatio={3 / 1} title="User Spendng (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transections</h1>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
