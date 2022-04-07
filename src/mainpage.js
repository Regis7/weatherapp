import React from "react"
import './App.css';

const Mainpage=()=> {
    return (
        <div class="container">
        <div class="navigation">
        
            <nav class="w3-bar w3-black">
                <a href="#Home" class="logo">Home</a>
                <a href="#Weather-info" class="menu">Weather info</a>
                <a href="#Contacts" class="menu">Contacts</a>
                <a href="#Login" class="menu">Login</a>
            </nav>
        </div>
        <div class="search">
        <form class="example" action="/action_page.php">
     <input type="text" 
     placeholder="Search by Country or city name" 
     name="search"/>
       <div  className="button">
          <button type="search"> Search </button>
          </div>
        </form>
     </div>
     <div class="recommendation">           
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Cloud</th>
              <th>Degrees</th>
              <th>Wind direction</th>
              <th>Sun starts</th>
              <th>Sun ends</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>15:00</td>
              <td>Cloud</td>
              <td>31</td>
              <td>North-South</td>
              <td>8:15</td>
              <td>19:09</td>
            </tr>
            <div class="table2">
                <tbody>
                    <tr>
                        <td>
                            <h4>Recommendation</h4>
                        </td>
                        <td>
                <img src="./images/4.JPG"
                 class="img" alt="Cinque Terre" 
                 width="250" height="270"/>
                        </td>
                        <td>
                            <img src="./images/4.JPG" 
                            class="img" 
                            alt="Cinque Terre" 
                            width="250" height="270"/>
                        </td>
                        <td>
                            <img src="./images/4.JPG" 
                            class="img" alt="Cinque Terre" 
                            width="250" height="270"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>15:00</td>
                        <td>Cloud</td>
                        <td>31</td>
                        <td>North-South</td>
                        <td>8:15</td>
                        <td>19:09</td>
                      </tr>
                  </tbody>
            </div>
          </tbody>
        </table>
    </div>
    <div class="footer">
        <footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        <p class="w3-medium">  <a href="#Contacts">Contacts</a>
          All rights reserved <a href="#">The SCRUM Blue group</a>
        </p>
        </footer>
    </div>
    </div>
        
    );
  }
  
  export default Mainpage
  