import React from "react";

import { Button, Pagination, Spacer, Text } from "@nextui-org/react";

export const GridControllers = ({ onChange, sortBy, toggleSort }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Text className="">Sort By : </Text>
      <Button
        css={{ marginLeft: 7 }}
        size={"sm"}
        ghost={sortBy !== "RECENTS"}
        color={"gradient"}
        onClick={() => toggleSort("RECENTS")}
      >
        Most recent
      </Button>
      <Button
        css={{ marginLeft: 7 }}
        size={"sm"}
        ghost={sortBy !== "LOWEST"}
        color={"gradient"}
        onClick={() => toggleSort("LOWEST")}
      >
        Lowest price
      </Button>
      <Button
        css={{ marginLeft: 5 }}
        size={"sm"}
        ghost={sortBy !== "HIGHEST"}
        color={"gradient"}
        onClick={() => toggleSort("HIGHEST")}
      >
        Highest price
      </Button>
      <Spacer css={{ flex: 1 }} />
      <Pagination
        color={"gradient"}
        rounded
        total={2}
        initialPage={1}
        onChange={onChange}
      />
    </div>
  );
};
