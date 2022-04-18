import { Button, Loading } from "@nextui-org/react";
import React from "react";

export const LoadingButton = () => {
  return (
    <Button
      disabled
      auto
      bordered
      color="default"
      css={{ px: "$13", marginTop: 10 }}
    >
      <Loading type="points" color="primary" size="sm" />
    </Button>
  );
};
