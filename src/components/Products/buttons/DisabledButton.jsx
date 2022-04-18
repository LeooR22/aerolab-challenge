import { Button } from "@nextui-org/react";
import React from "react";

import coin from "../../../assets/coin.png";

export const DisabledButton = ({ cost, userData, name }) => {
  return (
    <Button disabled color={"warning"} css={{ marginTop: 10 }}>
      You need + {cost - userData.points}
      <img
        src={coin}
        style={{ height: "10%", width: "10%", marginLeft: "15px" }}
        alt={name}
      />
    </Button>
  );
};
