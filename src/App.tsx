import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import ScoReport from "./components/ScoReport";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LightTheme, darkTheme } from "./theme";
function App() {
  const [mode, setMode] = React.useState<string>(localStorage.getItem("theme") || "dark");

  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }


  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : LightTheme}>
      <CssBaseline/>
      <BrowserRouter>
        <Navbar mode={mode} setMode={setMode}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ScoReport />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
