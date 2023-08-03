import React from "react";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/CircleLoader";

//css
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoadingComponent = () => {
  return <RiseLoader color="red" loading={true} css={override} />;
};

export default LoadingComponent;