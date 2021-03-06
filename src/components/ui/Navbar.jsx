import React, { useContext } from "react";
import { Link as LinkReact } from "react-router-dom";

import { Container, Image, Spacer, Text } from "@nextui-org/react";

import UserContext from "../../context/UserContext";

import logo from "../../assets/aerolab-logotipo.png";
import coin from "../../assets/coin.png";
import "../../styles.css";

export const Navbar = () => {
  const { userData } = useContext(UserContext);

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
        <LinkReact to="/">
          <Image src={logo} alt="icono aerolab" width={70} height={70} />
        </LinkReact>

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
            alt="coin aero"
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
