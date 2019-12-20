import emotion from "emotion/dist/emotion.umd.min.js";
const { css } = emotion;

const ORANGE = "#ffa500";
const RED = "red";
const WHITE = "white";

export const heading = css`
  background-color: ${ORANGE};
  color: ${WHITE};
`;

export const Button = css`
  border: none;
  color: white;
  padding: 14px 28px;
  cursor: pointer;
  background-color: ${ORANGE};
  &:hover {
    background-color: ${RED};
  }
`;
