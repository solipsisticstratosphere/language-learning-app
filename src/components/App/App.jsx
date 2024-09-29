import { useState } from "react";
import "./App.css";
import { Layout } from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
