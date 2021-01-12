import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

export const Server_Clock = () => {
  const [getTime, setTime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromTimeAPI", time => {
      setTime(time);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="alert alert-info">Please wait, Loading...</p>;
  }

  return (
    <>
      <h1>TIME{getTime}</h1>
    </>
  );
}