import { Container } from "@nextui-org/react";
import React from "react";
import { Navbar } from "../components/ui/Navbar";

import { GetCoins } from "../components/coins/GetCoins";

export const CoinsPage = () => {
  return (
    <>
      <Navbar />
      <Container md>
        <h2>CoinsPage</h2>
      </Container>
      <GetCoins />
    </>
  );
};
