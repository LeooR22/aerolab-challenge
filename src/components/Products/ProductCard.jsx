import { useContext, useState } from "react";

import { Grid } from "@nextui-org/react";

import { ButtonsLogic } from "./buttons";
import { fetchApi } from "../../helpers/fetchApi";
import UserContext from "../../context/UserContext";

import "../../styles.css";
import { CardBase } from "./CardBase";

import AWN from "awesome-notifications";

const options = {
  durations: {
    global: 2000,
  },
};

let notifier = new AWN(options);

export const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { cost } = product;
  const { userData, setUserData } = useContext(UserContext);

  const HandleRedeem = (id) => {
    setLoading(true);
    fetchApi("redeem", { productId: id }, "POST")
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUserData({ ...userData, points: userData.points - cost });
        notifier.success(`${product.name} redeemed successfully`);
      })
      .catch((error) => {
        notifier.warning(`There was a problem with the transaction`);
        console.log(error);
      });
  };

  return (
    <Grid xs={12} sm={4} md={3} lg={3} xl={3} direction="column">
      <CardBase product={product} />
      <ButtonsLogic
        loading={loading}
        userData={userData}
        HandleRedeem={HandleRedeem}
        product={product}
      />
    </Grid>
  );
};
