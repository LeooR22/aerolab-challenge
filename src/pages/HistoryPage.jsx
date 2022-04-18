import { Container } from "@nextui-org/react";
import React from "react";
import { GridHistory } from "../components/history/GridHistory";
import { Navbar } from "../components/ui/Navbar";
import { useFetch } from "../hooks/useFetch";

export const HistoryPage = () => {
  const { data, isLoading } = useFetch("user/history");
  if (isLoading) return <h1>Loading....</h1>;

  const arrHistory = data.sort((a, b) =>
    b.createDate.localeCompare(a.createDate)
  );

  return (
    <>
      <Navbar />
      <Container md>
        <h2>History Page</h2>
        <GridHistory arrHistory={arrHistory} />
      </Container>
    </>
  );
};
