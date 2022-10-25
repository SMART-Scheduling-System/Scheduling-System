import React from 'react'
import axios from "axios";

function Home() {
  const getData = async () => {
    try {
      const response = await axios.get("/api/user/get-user-info-by-id", {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home