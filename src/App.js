import React,{useState,useEffect} from 'react'

function App() {
const [covidData,setCovidData]=useState("")
console.log(covidData.statewise)
useEffect(()=>{
  fetch("https://data.covid19india.org/data.json")
  .then(res=>res.json())
  .then(data=>setCovidData(data))
})

  return (
    <div>
      <h1>Covid Tracker App</h1>
      <table>
        <thead>
          <tr>
            <th>Active </th>
            <th>Confirmed</th>
            <th>Death</th>
            <th>State </th>
          </tr>
        </thead>
        <tbody>
          {
            covidData.statewise.map((cElem)=>{
              return (
                <>
                  <tr>
                    <td>{cElem.active}</td>
                    <td>{cElem.confirmed}</td>
                    <td>{cElem.deaths}</td>
                    <td>{cElem.state}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App