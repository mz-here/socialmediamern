import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { Box, Input, useTheme, useMediaQuery } from "@mui/material";

import { keyframes } from "@mui/system";

const Result = ({ setShowSearch }) => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const background = theme.palette.background.default;

  const slide = keyframes`0%    {
                                    transform: translateY(-100%);
                                }
                        100%    {
                                    transform: translateY(0);
                                }`;
  const handleChange = async (e) => {
    let key = e.target.value;
    if (key) {
      let res = await fetch(`http://localhost:4001/users/search/${key}`);
      res = await res.json(res);
      setData(res);
    } else {
      setData([]);
    }
  };

  return (
    <>
      <Box
        position="absolute"
        right="0"
        bottom="0"
        height="100%"
        width="100%"
        zIndex="10"
        backgroundColor={background}
        sx={{ animation: `${slide} 0.5s ease forwards` }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="auto"
          height="auto"
        >
          <Input
            sx={{
              height: "10%",
              margin: "50px",
              width: "85%",
              fontSize: "30px",
            }}
            placeholder="Search User"
            onChange={handleChange}
          />
          <Close
            sx={{
              fontSize: "40px",
              marginTop: "40px",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => setShowSearch(false)}
          />
        </Box>
        {isNonMobileScreens ? (
          <Box display="flex" flexDirection="column" justifyContent="flex-end">
            {data.map((user) => (
              <div
                key={user._id}
                style={{
                  backgroundColor: "grey",
                  width: "auto",
                  margin: "10px 280px 10px 200px",
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/profile/${user._id}`);
                  window.location.reload();
                }}
              >
                {user.firstName} {user.lastName}
              </div>
            ))}
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" justifyContent="flex-end">
            {data.map((user) => (
              <div
                key={user._id}
                style={{
                  backgroundColor: "grey",
                  width: "70%",
                  margin: "10px 20% 10px 15%",
                  padding: "10px",
                  fontSize: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/profile/${user._id}`);
                  window.location.reload();
                }}
              >
                {user.firstName} {user.lastName}
              </div>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Result;
