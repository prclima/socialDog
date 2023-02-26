import { useContext, useEffect } from "react";
import { userContexto } from "../../UserContext";
import UserStatsGraphs from "./UserStatsGraphs";

function UserStats() {
  const { stats, GetData } = useContext(userContexto);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      {stats ? (
        <UserStatsGraphs data={stats} />
      ) : (
        <UserStatsGraphs
          data={[
            {
              title: "sem estatistica",
              acessos: 0,
            },
          ]}
        />
      )}
    </div>
  );
}

export default UserStats;
