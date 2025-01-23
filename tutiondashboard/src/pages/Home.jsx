import React, { useEffect, useState } from "react";
import Statistic_card from "../components/Statistic_card";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChartSimple,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { DashboardData } from "../services/Api";
import { Chart } from "primereact/chart";

const Home = () => {
  const [dashboard, setDashboard] = useState({
    TotalStudent: 0,
    TotalTeacher: 0,
    TotalRevenue: 0,
  });
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const { data: Dashboarddata } = useQuery({
    queryKey: ["dashboarddata"],
    queryFn: DashboardData,
  });

  useEffect(() => {
    if (Dashboarddata) {
      console.log(Dashboarddata);
      setDashboard({
        TotalStudent: Dashboarddata?.TotalStudent,
        TotalTeacher: Dashboarddata?.TotalTeacher,
        TotalRevenue: Dashboarddata?.TotalRevenue,
      });

      // Extract last 7 days' data for the chart
      const last7DaysData = Dashboarddata?.Last7DaysInvitations || [];
      const labels = last7DaysData.map((entry) => entry.date); // Assuming each entry has a `date` field
      const data = last7DaysData.map((entry) => entry.count); // Assuming each entry has a `count` field

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Invitation Requests",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Requests",
            },
          },
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      };

      setChartData(chartData);
      setChartOptions(chartOptions);
    }
  }, [Dashboarddata]);

  return (
    <>
      <div className="dashboard">
        <h1 className="page_heading">Dashboard</h1>
        <div className="statistic_cards flex gap-4 flex-wrap">
          <Statistic_card
            card_number={1}
            card_heading={"Students"}
            card_count={dashboard?.TotalStudent}
            card_icon={<FontAwesomeIcon icon={faUserGraduate} />}
          />

          <Statistic_card
            card_number={2}
            card_heading={"Teachers"}
            card_count={dashboard?.TotalTeacher}
            card_icon={<FontAwesomeIcon icon={faChalkboardUser} />}
          />

          <Statistic_card
            card_number={4}
            card_heading={"Revenue"}
            card_count={dashboard?.TotalRevenue}
            card_icon={<FontAwesomeIcon icon={faChartSimple} />}
          />
        </div>
        <div className="graphs flex gap-4 flex-wrap mt-6">
          <div
            className="card"
            style={{
              width: "45%",
            }}
          >
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
          <div
            className="card"
            style={{
              width: "45%",
            }}
          >
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
