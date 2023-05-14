
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const[covidData,setCovidData]= useState("")
     
  useEffect(()=>{
    fetch("https://data.covid19india.org/data.json")
    .then(res=>res.json())
    .then(data=>setCovidData(data))
  },[covidData])
  
  return (
    <div>
      <h1>Live Covid Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>StateCode </th>
          </tr>
        </thead>
        <tbody>
          {
            covidData.statewise.map((cElem)=>{
              return(
                <>
                  <tr>
                    <td>{cElem.active}</td>
                    <td>{cElem.confirmed}</td>
                    <td>{cElem.deaths}</td>
                    <td>{cElem.statecode}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
