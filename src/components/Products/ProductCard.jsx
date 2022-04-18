import { Button, Card, Divider, Grid, Loading, Text } from "@nextui-org/react";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { fetchApi } from "../../helpers/fetchApi";
import "../../styles.css";

import coin from "./coin.png";

export const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { category, cost, img, name, _id } = product;
  const { userData, setUserData } = useContext(UserContext);

  const HandleRedeem = (id) => {
    // console.log("Redeem", id);
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
      {!loading ? (
        <>
          {userData.points >= cost ? (
            <Button
              onClick={() => HandleRedeem(_id, setLoading)}
              color={"gradient"}
              css={{ marginTop: 10 }}
            >
              Redeem for {cost}{" "}
              <img
                src={coin}
                style={{ height: "10%", width: "10%", marginLeft: "15px" }}
                alt={name}
              />
            </Button>
          ) : (
            <Button disabled color={"warning"} css={{ marginTop: 10 }}>
              You need + {cost - userData.points}
              <img
                src={coin}
                style={{ height: "10%", width: "10%", marginLeft: "15px" }}
                alt={name}
              />
            </Button>
          )}
        </>
      ) : (
        <Button
          disabled
          auto
          bordered
          color="default"
          css={{ px: "$13", marginTop: 10 }}
        >
          <Loading type="points" color="primary" size="sm" />
        </Button>
      )}
    </Grid>
  );
};
