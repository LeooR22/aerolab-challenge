import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import React from "react";

export const EcommerceApp = () => {
  return (
    <>
      <h2>EcommerceApp</h2>

      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={6} sm={3} md={2} xl={1} direction="column">
          <Card hoverable bordered>
            <Card.Body css={{ p: 1 }}>
              <Card.Image
                css={{}}
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295"
                width="100%"
                height={140}
              />
              <hr />
              <Text css={{ marginLeft: 15 }} transform="capitalize">
                Iphone 13
              </Text>
              <Text css={{ marginLeft: 15 }}>Phones</Text>
            </Card.Body>
          </Card>
          <Button color={"gradient"} css={{ marginTop: 10 }}>
            Redeem for 15000
          </Button>
        </Grid>
        {/* <Grid xs={6} sm={3} md={2} xl={1} direction="column">
          <Card hoverable bordered>
            <Card.Body css={{ p: 1 }}>
              <Card.Image
                css={{}}
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295"
                width="100%"
                height={140}
              />
              <hr />
              <Text css={{ marginLeft: 15 }} transform="capitalize">
                Iphone 13
              </Text>
              <Text css={{ marginLeft: 15 }}>Phones</Text>
            </Card.Body>
          </Card>
          <Button color={"gradient"} css={{ marginTop: 10 }}>
            Redeem for 15000
          </Button>
        </Grid> */}
      </Grid.Container>
    </>
  );
};
