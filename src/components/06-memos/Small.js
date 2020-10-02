import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me volvi a llamar _D");
  return <small>{value}</small>;
});
