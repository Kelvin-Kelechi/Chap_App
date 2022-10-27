import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;

  input {
    display: flex;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    border: none;
  }
  button {
    border: none;
    padding: 15px;
    border-radius: 10px;
    margin-left: 30px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background: #8fc5df;
  }
`;
const CreateUser = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleRoute = () => {
    console.log("saving...");
    // localStorage.setItem("username", userName);
    setUser(userName);
    navigate("/chart");
  };
  return (
    <Main>
      <div className="nav">
<input
        placeholder="enter username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleRoute}>Enter Chart</button>
      </div>
      
    </Main>
  );
};

export default CreateUser;

