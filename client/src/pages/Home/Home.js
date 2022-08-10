import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="widgets">
          <Widget type={"users"} />
          <Widget type={"orders"} />
          <Widget type={"earnings"} />
          <Widget type={"balance"} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
