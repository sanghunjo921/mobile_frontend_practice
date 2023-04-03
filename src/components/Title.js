import React, { memo } from "react";

const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

export default memo(Title);
