import { useState } from "react";

import { Container, Grid } from "@nextui-org/react";

import { GridControllers } from "./GridControllers";
import { ProductCard } from "./ProductCard";

import { filteredProducts } from "../../helpers/utils";
import { useFetch } from "../../hooks/useFetch";

export const ProductsGrid = () => {
  let { data, isLoading } = useFetch("products");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("RECENTS");

  const toggleSort = (idSort) => {
    setSortBy(idSort);
  };

  const onChange = (e) => {
    setCurrentPage((e - 1) * 16);
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container md className="font-montserrat" css={{ marginTop: 20 }}>
      <GridControllers
        toggleSort={toggleSort}
        onChange={onChange}
        sortBy={sortBy}
      />

      <Grid.Container className="font-montserrat" gap={2} justify="flex-start">
        {filteredProducts(data, sortBy, currentPage).map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </Grid.Container>
    </Container>
  );
};
