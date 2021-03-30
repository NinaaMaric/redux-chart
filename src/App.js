import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getData } from "./actions/bitcoinActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bitcoin);
  const [num, setNum] = useState(15);

  const data = {
    labels: ["11:00", "12:00"],
    datasets: [
      {
        label: "BTS",
        data: [4000, 5000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        piontBorderColor: "rgba(238,175,0,0.7)",
      },
    ],
  };
  const fetchData = (time) => {
    //fexth data from redux using time?
    dispatch(getData({ time, number: num }));
  };

  return (
    <div className="App">
      <div className="btns-wrapper">
        <button onClick={() => fetchData("1min")}>1 minutes</button>
        <button onClick={() => fetchData("5min")}>5 minutes</button>
        <button onClick={() => fetchData("15min")}>15 minutes</button>

        <input onChange={(e) => setNum(e.target.value)} />
        {state.loading && <p>Loading..</p>}
        {state.errors && <p>Loading..</p>}
      </div>

      <div className="chart-wrapper">
        {/* <Line data={state.data} /> */}
        <Line data={data} />
      </div>
    </div>
  );
}

export default App;
