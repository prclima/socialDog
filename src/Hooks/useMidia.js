import { useEffect, useState } from "react";

function useMidia(midia) {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function ChangeMatch() {
      const { matches } = window.matchMedia(midia);
      setMatch(matches);
    }
    ChangeMatch();
    window.addEventListener("resize", ChangeMatch);
    return () => {
      window.removeEventListener("resize", ChangeMatch);
    };
  }, [match]);

  return match;
}

export default useMidia;
