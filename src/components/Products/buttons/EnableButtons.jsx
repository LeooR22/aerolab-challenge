import { Button } from "@nextui-org/react";
import React from "react";

import coin from "../../../assets/coin.png";

export const EnableButtons = ({ HandleRedeem, _id, name, cost }) => {
  return (
    <Button
      onClick={() => HandleRedeem(_id)}
      color={"gradient"}
      css={{ marginTop: 10 }}
    >
      Redeem for {cost}
      <img
        src={coin}
        style={{ height: "10%", width: "10%", marginLeft: "15px" }}
        alt={name}
      />
    </Button>
  );
};
