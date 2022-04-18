import React, { useContext } from "react";

import { Button, Container } from "@nextui-org/react";

import coin from "../../assets/coin.png";
import UserContext from "../../context/UserContext";
import { fetchApi } from "../../helpers/fetchApi";

import AWN from "awesome-notifications";

const options = {
  durations: {
    global: 2000,
  },
};

let notifier = new AWN(options);

export const GetCoins = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleGetCoins = (amount) => {
    console.log("claimed", amount);
    fetchApi("user/points", { amount }, "POST")
      .then((data) => {
        setUserData({ ...userData, points: userData.points + amount });
        notifier.success(`${amount} points has been added`);
      })
      .catch((error) => {
        notifier.warning(`There was a problem with the transaction`);
        console.log(error);
      });
  };

  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        onClick={() => handleGetCoins(1000)}
        ghost
        shadow
        color={"gradient"}
      >
        Get 1000{" "}
        <img alt="coin" src={coin} style={{ width: 25, marginLeft: 7 }} />
      </Button>
      <Button
        onClick={() => handleGetCoins(5000)}
        ghost
        shadow
        color={"gradient"}
      >
        Get 5000{" "}
        <img alt="coin" src={coin} style={{ width: 25, marginLeft: 7 }} />
      </Button>
      <Button
        onClick={() => handleGetCoins(7500)}
        ghost
        shadow
        color={"gradient"}
      >
        Get 7500{" "}
        <img alt="coin" src={coin} style={{ width: 25, marginLeft: 7 }} />
      </Button>
    </Container>
  );
};
