import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const { data } = await axios.get("/api/home");
      setMessage(data);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <p>message: {message}</p>
    </div>
  );
};

export default Home;
