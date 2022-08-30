import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestApi";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stat");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

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
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="Active User"
            aspect={2 / 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
