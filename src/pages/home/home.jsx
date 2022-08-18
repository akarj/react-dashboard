import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./home.scss";
const Home = () => {
  return (
    // <SimpleBar style={{ maxHeight: "80vh" }}>
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <SimpleBar style={{ maxHeight: "80vh" }}>
          <div className="charts">
            <Featured />
            <Charts aspectRatio={2 / 1} title="last 6 months revenue details" />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest transection</div>
            <Tables />
          </div>
        </SimpleBar>
      </div>
    </div>
    // </SimpleBar>
  );
};

export default Home;
