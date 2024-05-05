import React, { useState, useEffect } from "react";
import { Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user name from localStorage or wherever you store user information
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.
        username); // Assuming the user object has a 'name' property
    }
  }, []);

  const items = [
    {
      key: "1",
      label: <a href="/home">Home</a>,
    },
    {
      key: "2",
      label: <a href="/marsroverphotos">Mars Rover Photos</a>,
    },
    {
      key: "3",
      label: <a href="/APOD">APOD</a>,
    },
    {
      key: "4",
      label: (
        <li
          onClick={() => {
            // Perform logout logic here
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Logout
        </li>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          width: "100%",
          backgroundColor: "black",
          marginTop: 0,
        }}
      >
        <Row justify="center">
          <Col lg={20} sm={15} xs={20}>
            <h1>
              <b>
                <Link
                  to="/"
                  style={{
                    color: " #28489b",
                    letterSpacing: "1px",
                    fontSize: "30px",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
                    alt="logo"
                    style={{
                      width: "100px",
                      height: "100%",
                      marginRight: "10px",
                      textDecoration: "none",
                    }}
                  />
                  <marquee direction="right">NASA API MANAGEMENT</marquee>
                </Link>
              </b>
            </h1>
          </Col>
          <Col lg={2} sm={5} xs={4}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <Dropdown menu={{ items }} placement="bottom">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/desnqqj6a/image/upload/v1683887268/User-Profile-PNG-High-Quality-Image_mwetdc.png"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                    alt="user"
                  />
                  <p>WELCOME</p>
                </div>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NavBar;
