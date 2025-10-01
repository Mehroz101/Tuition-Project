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
  const [barChartData, setBarChartData] = useState({});
  const [barChartOptions, setBarChartOptions] = useState({});
  const [doughnutChartData, setDoughnutChartData] = useState({});
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({});

  const { data: Dashboarddata } = useQuery({
    queryKey: ["dashboarddata"],
    queryFn: DashboardData,
  });

  useEffect(() => {
    if (Dashboarddata) {
      setDashboard({
        TotalStudent: Dashboarddata?.TotalStudent,
        TotalTeacher: Dashboarddata?.TotalTeacher,
        TotalRevenue: Dashboarddata?.TotalRevenue,
      });

      // Extract last 7 days' data for the bar chart
      const last7DaysData = Dashboarddata?.Last7DaysInvitations || [];
      const labels = last7DaysData.map((entry) => entry.date); // Dates
      const data = last7DaysData.map((entry) => entry.count); // Counts

      const barChartData = {
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

      const barChartOptions = {
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

      setBarChartData(barChartData);
      setBarChartOptions(barChartOptions);

      // Extract invitation status counts for the doughnut chart
      const statusCounts = Dashboarddata?.InvitationStatusCounts || {};
      const doughnutChartData = {
        labels: ["Pending", "Closed", "Rejected", "Confirmed"],
        datasets: [
          {
            data: [
              statusCounts.pending || 0,
              statusCounts.closed || 0,
              statusCounts.rejected || 0,
              statusCounts.accepted || 0, // Assuming 'accepted' is the status for confirmed invitations
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.5)", // Blue for Pending
              "rgba(255, 206, 86, 0.5)", // Yellow for Closed
              "rgba(255, 99, 132, 0.5)", // Red for Rejected
              "rgba(75, 192, 192, 0.5)", // Green for Confirmed
            ],
            hoverBackgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(75, 192, 192, 0.8)",
            ],
          },
        ],
      };

      const doughnutChartOptions = {
        cutout: "60%",
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                label += context.raw;
                return label;
              },
            },
          },
        },
      };

      setDoughnutChartData(doughnutChartData);
      setDoughnutChartOptions(doughnutChartOptions);
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
              height:"450px"

            }}
          >
            <Chart type="bar" pt={{
              root:{
                style:{
                  height:"100%"
                }
              }
            }} data={barChartData} options={barChartOptions} />
          </div>
          <div
            className="card"
            style={{
              width: "45%",
              height:"450px"
            }}
          >
            <Chart
              type="doughnut"
              data={doughnutChartData}
              options={doughnutChartOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
