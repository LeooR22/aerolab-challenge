import { Divider, Text, Card } from "@nextui-org/react";
import React from "react";
import moment from "moment";

export const CardBase = ({ product, history = false }) => {
  const { category, img, name, createDate } = product;

  return (
    <Card hoverable bordered clickable>
      <Card.Body css={{ p: 0, marginBottom: 12 }}>
        <Card.Image src={img.hdUrl} width="100%" height={140} />
        <Divider />
        <Text h5 css={{ marginLeft: 15, marginTop: 5 }} transform="capitalize">
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
        {history && (
          <Text
            h5
            css={{ marginLeft: 15, marginTop: 5 }}
            transform="capitalize"
          >
            {moment(createDate).format("MMMM Do YYYY, h:mm:ss a")}
          </Text>
        )}
      </Card.Body>
    </Card>
  );
};
