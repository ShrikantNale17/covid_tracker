import '../CSS/App.css';
import axios from 'axios'
// import Chart from "react-google-charts";
import { useEffect, useState } from 'react';
import Chart from './Chart';

function App() {

  const [covidData, setCovidData] = useState([])
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(0)
  const [chartData, setChartData] = useState({
    categories: [],
    TotalConfirmed: [],
    TotalDeaths: [],
    TotalRecovered: []
  })
  const BarsOnPage = 5

  useEffect(() => {
    axios("https://api.covid19api.com/summary")
      .then(res => setCovidData(res.data.Countries))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    setIndex(5 * page)
  }, [page])

  console.log(covidData.length / 5 + 1)
  console.log(page, page + 5 < covidData.length / 5)

  /* const dataElements = covidData.map(data => {
    return [data.Country, data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered]
  }) */

  const dataElements = covidData.slice(index, index + BarsOnPage)

  // console.log(dataElements)
  console.log(chartData)

  useEffect(() => {
    setChartData({

      categories: dataElements.map(data => data.Country),
      TotalConfirmed: dataElements.map(data => data.TotalConfirmed),
      TotalDeaths: dataElements.map(data => data.TotalDeaths),
      TotalRecovered: dataElements.map(data => data.TotalRecovered)
    }
    )
  }, [index, covidData])

  return (
    <div className="App"/*  style={{border: "10px groove grey", margin: "20px 150px"}} */>

      <Chart chartData={chartData} />
      {/* {covidData && <Chart
        width={'80%'}
        height={'70vh'}
        format={'decimal'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Country', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered'],
          dataElements[0],
          dataElements[1],
          dataElements[2],
          dataElements[3],
          dataElements[4]
        ]}
        options={{
          // Material design options
          chart: {
            title: 'Covid Tracker',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />} */}

      {/* <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <span class="page-link">2</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav> */}

      <nav aria-label="..." style={{marginTop: "40px", marginLeft: "auto", marginRight: "20%"}}>
        <ul className="pagination">
          <li><button className="page-item page-link" onClick={() => setPage(prevPage => prevPage > 5 && prevPage - 5)}>Previous</button></li>
          {page < covidData.length/5 && <li><button className="page-item page-link active" id={page + 1} onClick={() => setIndex(5 * page)}>{page + 1}</button></li>}
          {page+1 < covidData.length/5 && <li><button className="page-item page-link" id={page + 2} onClick={() => setIndex(5 * (page + 1))}>{page + 2}</button></li>}
          {page+2 < covidData.length/5 && <li><button className="page-item page-link" id={page + 3} onClick={() => setIndex(5 * (page + 2))}>{page + 3}</button></li>}
          {page+3 < covidData.length/5 && <li><button className="page-item page-link" id={page + 4} onClick={() => setIndex(5 * (page + 3))}>{page + 4}</button></li>}
          {page+4 < covidData.length/5 && <li><button className="page-item page-link" id={page + 5} onClick={() => setIndex(5 * (page + 4))}>{page + 5}</button></li>}
          <li><button className="page-item page-link" onClick={() => setPage(prevPage => prevPage + 5)} disabled={page+5 > covidData.length/5 && "disabled"}>Next</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
