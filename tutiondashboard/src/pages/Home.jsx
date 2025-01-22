import React, { useEffect, useState } from "react";
import Statistic_card from "../components/Statistic_card";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChartSimple,
  faCoffee,
  faUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { DashboardData } from "../services/Api";
// import ChartLine from "../components/ChartLine";
// import PieChart from "../components/PiaChart";
const Home = () => {
const [dashboard,setDashboard] = useState({
  TotalStudent:0,
  TotalTeacher:0,
  TotalTeacher:0,

})
  const {data:Dashboarddata} = useQuery({
    queryKey:["dashboarddata"],
    queryFn:DashboardData
  })
  useEffect(()=>{
    if(Dashboarddata){
      console.log(Dashboarddata)
      setDashboard({
        TotalStudent:Dashboarddata?.TotalStudent,
        TotalTeacher:Dashboarddata?.TotalTeacher,
        TotalRevenue:Dashboarddata?.TotalRevenue
      })
    }
  },[Dashboarddata])

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
      </div>
    </>
  );
};

export default Home;