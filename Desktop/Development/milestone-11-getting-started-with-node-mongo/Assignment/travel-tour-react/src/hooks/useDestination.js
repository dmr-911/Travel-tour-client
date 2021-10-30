import { useEffect, useState } from "react";
const useDetination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5000/destinations")
    fetch("https://infinite-stream-42915.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
    return { destinations };
};

export default useDetination;