import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';

let HomePage = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const [uId, setUId] = useState("");
  const [uName, setUName] = useState("");
  useEffect(() => {
    const uId = JSON.parse(localStorage.getItem('userId'));
    const uName = JSON.parse(localStorage.getItem('userName'));

    if (uId && uName) {
      setUId(uId);
      setUId(uName);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem('userId');
    setUId("");
    navigate('/');
    window.location.reload(false);
  }
  const Login = () => {
    navigate('/userLogin');
  }
  return (
    <div className="App" style={{
      backgroundColor: 'none',
    }}>
      {
        uId === "" &&
        <Button
          variant="contained"
          color="primary"
          className="nav-link"
          onClick={Login}
        >User Login</Button>
      }
      {
        uId !== "" &&
        <Button
          variant="contained"
          color="secondary"
          className="nav-link"
          onClick={logout}>
          Logout
        </Button>
      }
      <br />
      {
        uId === "" &&
        <h4>Login First to make order</h4>
      }
      {
        uId !== "" &&
        <h4>Have a nice day &nbsp;{uId}</h4>
      }
      <ProductList />
    </div>
  );
}

export default HomePage;