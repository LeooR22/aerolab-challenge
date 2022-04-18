import React from "react";
import { DisabledButton } from "./DisabledButton";
import { EnableButtons } from "./EnableButtons";
import { LoadingButton } from "./LoadingButton";

export const ButtonsLogic = ({ loading, userData, HandleRedeem, product }) => {
  const { cost, name, _id } = product;

  return (
    <>
      {!loading ? (
        <>
          {userData.points >= cost ? (
            <EnableButtons
              HandleRedeem={HandleRedeem}
              _id={_id}
              name={name}
              cost={cost}
            />
          ) : (
            <DisabledButton cost={cost} userData={userData} name={name} />
          )}
        </>
      ) : (
        <LoadingButton />
      )}
    </>
  );
};
