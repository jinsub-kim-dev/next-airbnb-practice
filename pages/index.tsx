import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Home from "../components/home/Home";

const Container = styled.div`
  font-size: 21px;
  color: gray;
`;

const index: NextPage = () => {
  return <Home />;
};

export default index;
