import { Container, Image, Spacer, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { Link as LinkReact } from "react-router-dom";
import logo from "./aerolab-logotipo.png";
import "../../styles.css";
import coin from "../Products/coin.png";

import UserContext from "../../context/UserContext";

export const Navbar = () => {
  const { userData } = useContext(UserContext);

  // console.log(userData);

  return (
    <Container md>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Image src={logo} alt="icono aerolab" width={70} height={70} />

        <Spacer css={{ flex: 1 }} />
        <Text
          className="font-montserrat"
          color="black"
          css={{ marginRight: 10 }}
        >
          {userData.name}
        </Text>
        <Text
          className="font-montserrat"
          color="black"
          css={{
            marginRight: 10,

            borderColor: "$black",
            backgroundColor: "$gray300",
            borderRadius: "$base",
            p: 5,
            display: "flex",
          }}
        >
          {userData.points}
          <img
            style={{ marginRight: 5, marginLeft: 10 }}
            src={coin}
            width="25px"
          />
        </Text>
        <LinkReact to="/">
          {/* <Link> */}
          <Text
            className="font-montserrat"
            color="black"
            css={{ marginRight: 10 }}
          >
            Shop
          </Text>
          {/* </Link> */}
        </LinkReact>
        {/* implementar Dropdown */}
        <LinkReact to="/history">
          <Text
            className="font-montserrat"
            color="black"
            css={{ marginRight: 10 }}
          >
            Redeems
          </Text>
        </LinkReact>
        <LinkReact to="/coins">
          <Text
            className="font-montserrat"
            color="black"
            css={{ marginRight: 15 }}
          >
            Get Coins
          </Text>
        </LinkReact>
      </div>
    </Container>
  );
};
