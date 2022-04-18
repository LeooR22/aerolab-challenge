import { Container, Image } from "@nextui-org/react";
import React from "react";
import { ProductsGrid } from "../components/Products/ProductsGrid";
import { Navbar } from "../components/ui/Navbar";

import banner from "../assets/header.png";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container md>
        <img src={banner} alt="banner" />
      </Container>

      <ProductsGrid />
    </>
  );
};
