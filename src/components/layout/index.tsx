"use client";

import React, { ReactNode, useState } from "react";
import { Box, Grid } from "@mui/material";

import ParticlesBg from "../particales";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  let [darkMode, setDarkMode] = useState(true);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  return (
    <>
      <ParticlesBg darkMode={darkMode.valueOf()} />
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid>{children}</Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              Create by &hearts;
              <a href={"#"}> Muhammad Haseeb </a>
            </p>
            <p>&copy; 2023</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
