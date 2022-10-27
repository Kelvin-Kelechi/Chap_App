import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
  const [charts, setcharts] = useState(undefined);

  // let user = "david";
  const handleSend = () => {
    console.log("Sending....");

    const userName = localStorage.getItem("username");
    const chart__data = localStorage.getItem("charts");

    if (!chart__data) {
      return localStorage.setItem(
        "charts",
        JSON.stringify([{ message: message, userName: user }])
      );
    }

    const data = JSON.parse(chart__data);
    console.log(data);
    data.push({
      message: message,
      userName: user,
    });
    localStorage.removeItem("charts");

    localStorage.setItem("charts", JSON.stringify(data));
    setcharts(JSON.parse(localStorage.getItem("charts")));
    setMessage("");
  };

  useEffect(
    () => {
      setcharts(JSON.parse(localStorage.getItem("charts")));
    },
    [localStorage.getItem("charts")],
    charts
  );

  console.log(charts);
  return (
    <Main>
      <div className="main2">
        <div className="messages">
          {charts
            ? charts.map((val) => (
                <div  
                  className={
                    val.userName != user ? "message_sender" : "message_you"
                  }
                >
                  <div className={
                    val.userName != user ? "message_sender_profile" : "message_you_profile"
                  }>
                    <span>{val.userName.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="text">
                    <span>
                      {val.userName != user
                        ? `${val.userName.toUpperCase()}`
                        : "You"}
                    </span>
                    <h2>{val.message}</h2>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="input__box">
          <input
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </Main>
  );
};

export default Chat;

const Main = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .message_sender_profile {
    height: 100px;
    border-radius: 50%;
    width: 100px;
    display: flex;
    color:#fff;
    justify-content: center;
    align-items: center;
    background-color: #D3D3D3;
    font-size: 30px;
    font-weight: 600;
  }
  .message_you_profile {
    color:#fff;
    height: 100px;
    border-radius: 50%;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A53FEB;
    font-size: 30px;
    font-weight: 600;
  }
  .main2 {
    width: 100%;
    height: 75vh;
    overflow: scroll;
    background-color: #fff;
  }
  .messages {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
  .message_sender {
    display: flex;
    margin-block: 30px;
    justify-content: flex-start;
    width: 40%;
    color: black;
    
    .text {
      /* width: 50%; */
      background: #D3D3D3;
      color: black;
      padding: 30px;
      border-radius: 20px;
      width: 80%;
      margin-bottom: 50px;
      position: relative;
      bottom: -30px;
      left: 20px;
    }
  }
  .message_you {
    color: black;
    display: flex;
    justify-content: flex-end;
    /* width: 40%; */
    /* background-color: blue; */
    .text {
      width: 50%;
      background: #A53FEB;
      color: white;
      padding: 30px;
      border-radius: 20px;
      margin-bottom: 50px;
      position: relative;
      bottom: -30px;
      left: 20px;
    }
  }
  .input__box {
    display: flex;
    width:100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    background:  #A53FEB;

    input {
      display: flex;
      border-radius: 50px;
      padding: 20px;
      flex: 0.9;
      border: none;
      background-color: #fff;
    }
  }
  button {
    border: none;
    padding: 30px;
    border-radius: 50px;
    margin-left: 20px;
    color: #36454F;
    font-size: 20px;
    font-weight: 700;
    background: #fff;
  }
`;