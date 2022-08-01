import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";
const Home = () => {
  return (
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
        <div className="charts">
          <Featured />
          <Charts aspectRatio={2 / 1} title="last 6 months revenue details" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transection</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
