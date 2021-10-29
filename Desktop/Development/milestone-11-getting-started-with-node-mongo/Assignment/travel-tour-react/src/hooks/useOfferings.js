import { useState, useEffect } from "react";

const useOfferings = () => {
  const [offerings, setOfferings] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5000/offerings")
    fetch("https://infinite-stream-42915.herokuapp.com/offerings")
      .then((res) => res.json())
      .then((data) => setOfferings(data));
  }, []);
    
    return { offerings, setOfferings };
};

export default useOfferings;
