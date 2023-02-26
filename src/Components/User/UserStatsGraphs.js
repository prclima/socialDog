import { useContext, useEffect, useState } from "react";
import style from "./UserStatsGraphs.module.css";
import { userContexto } from "../../UserContext";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

function UserStatsGraphs({ data }) {
  const { stats, GetData } = useContext(userContexto);

  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setGraph(graphData);
    setTotal(data.map((item) => Number(item.acessos)).reduce((a, b) => a + b));
    console.log(data);
  }, [data]);

  return (
    <section className={`${style.graph} animeLeft`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total} </p>
      </div>
      <div className={style.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, regth: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            label: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={style.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
