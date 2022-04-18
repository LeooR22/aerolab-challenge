import { Grid } from "@nextui-org/react";
import React from "react";
import { CardBase } from "../Products/CardBase";

export const GridHistory = ({ arrHistory }) => {
  return (
    <Grid.Container className="font-montserrat" gap={2} justify="flex-start">
      {arrHistory.map((product) => (
        <Grid
          key={product.createDate}
          xs={12}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          direction="column"
        >
          <CardBase product={product} history />
        </Grid>
      ))}
    </Grid.Container>
  );
};
