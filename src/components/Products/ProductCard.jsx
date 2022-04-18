import { useContext, useState } from "react";

import { Card, Divider, Grid, Text } from "@nextui-org/react";

import { ButtonsLogic } from "./buttons";
import { fetchApi } from "../../helpers/fetchApi";
import UserContext from "../../context/UserContext";

import "../../styles.css";

export const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { category, cost, img, name } = product;
  const { userData, setUserData } = useContext(UserContext);

  const HandleRedeem = (id) => {
    setLoading(true);
    fetchApi("redeem", { productId: id }, "POST").then((data) => {
      console.log(data);
      setLoading(false);

      setUserData({ ...userData, points: userData.points - cost });
    });
  };

  return (
    <Grid xs={12} sm={4} md={3} lg={3} xl={3} direction="column">
      <Card hoverable bordered clickable>
        <Card.Body css={{ p: 0, marginBottom: 12 }}>
          <Card.Image src={img.hdUrl} width="100%" height={140} />
          <Divider />
          <Text
            h5
            css={{ marginLeft: 15, marginTop: 5 }}
            transform="capitalize"
          >
            {name}
          </Text>
          <Text
            transform="uppercase"
            css={{
              marginLeft: 15,
              fontSize: "$xs",
              fontWeight: "$semibold",
              color: "$gray400",
            }}
            className="font-montserrat"
          >
            {category}
          </Text>
        </Card.Body>
      </Card>
      <ButtonsLogic
        loading={loading}
        userData={userData}
        HandleRedeem={HandleRedeem}
        product={product}
      />
    </Grid>
  );
};
