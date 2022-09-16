import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./Pages/ChatBox";
import ChatHead from "./Pages/ChatHead";
import Header from "./Pages/Header";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/chat-box" element={<ChatBox />} />
      </Routes>
    </>
  );
};

export default App;
