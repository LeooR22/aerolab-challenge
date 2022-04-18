import { Button, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = () => {
  let { data, isLoading } = useFetch("products");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("RECENTS");

  const filteredProducts = () => {
    if (sortBy === "LOWEST") {
      return data
        .sort((a, b) => a.cost - b.cost)
        .slice(currentPage, currentPage + 16);
    }
    if (sortBy === "HIGHEST") {
      return data
        .sort((a, b) => b.cost - a.cost)
        .slice(currentPage, currentPage + 16);
    }
    if (sortBy === "RECENTS") {
      return data
        .sort((a, b) => a._id.localeCompare(b._id))
        .slice(currentPage, currentPage + 16);
    }
  };
  console.log(data);
  console.log(sortBy);

  const toggleLowest = () => {
    setSortBy("LOWEST");
    // filteredProducts();
  };

  const toggleHighest = () => {
    setSortBy("HIGHEST");
    // filteredProducts();
  };

  const toggleRecents = () => {
    setSortBy("RECENTS");
    // filteredProducts();
  };

  const nextPage = () => {
    if (data.length > currentPage + 16) setCurrentPage(currentPage + 16);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 16);
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container md className="font-montserrat">
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text className="">Sort By : </Text>
        <Button
          css={{ marginLeft: 7 }}
          size={"sm"}
          ghost={sortBy !== "RECENTS"}
          color={"gradient"}
          onClick={toggleRecents}
        >
          Most recent
        </Button>
        <Button
          css={{ marginLeft: 7 }}
          size={"sm"}
          ghost={sortBy !== "LOWEST"}
          color={"gradient"}
          onClick={toggleLowest}
        >
          Lowest price
        </Button>
        <Button
          css={{ marginLeft: 5 }}
          size={"sm"}
          ghost={sortBy !== "HIGHEST"}
          color={"gradient"}
          onClick={toggleHighest}
        >
          Highest price
        </Button>
        <Spacer css={{ flex: 1 }} />
        <Button size={"sm"} onClick={prevPage}>
          Prev
        </Button>
        &nbsp;
        <Button size={"sm"} onClick={nextPage}>
          Siguientes
        </Button>
      </div>
      <Grid.Container className="font-montserrat" gap={2} justify="flex-start">
        {filteredProducts().map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </Grid.Container>
    </Container>
  );
};
