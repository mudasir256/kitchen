
import { useState } from "react";
import Chart from "react-apexcharts";
import Nav from "./Nav";
import SideNav from "./SideNav";
import '../components/home.css'
const Home = (props) => {
    const [Transactionrate,] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      });

  return <div>
 
 <Nav/>
   <div className="home">
<SideNav/>
<Chart
                options={Transactionrate.options}
                series={Transactionrate.series}
                type="donut"
                width="360"
              />
              <div className="chart">
              <p className="user" >Users</p>
              <button className="home-button" >Add More...</button>
              </div>
    </div>
    </div>
};

export default Home;
// style={{color:'black', margin:'20px', borderRadius:'10px'}}
// style={{backgroundColor:'#cdcdcd', border:'none', textAlign:'center', position:'absolute', left:'60%', cursor:'pointer'}}