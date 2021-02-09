import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "atoms/button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "The **button** is the component that should fire an action based on a click event.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The element(s) that should be rendered within the button",
      default: "undefined",
    },
    onClick: {
      description: "The action that is fired when the button is pressed",
    },
  },
};

export const standard = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

standard.args = {
  children: "This is a button",
  onClick: action("Button"),
};

// parameters: {
//   docs: {
//     description: {
//       component:
//         "The **button** is the component that should fire an action based on a click event.",
//     },
//   },
// },
