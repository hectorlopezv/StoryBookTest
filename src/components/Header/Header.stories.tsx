import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("Components/Header", module)
  .addDecorator(withKnobs) // add story options
  .add("Header test", () => (
    <Header
      color={select("color", { Amarrillo: "yellow", Red: "red" }, "yellow")}
      onClick={action("Presiono Click")}
    />
  ))
  .add("Header using Props", () => (
    <Header
      title={text("Hector", "hector")}
      color={select("color", { Amarrillo: "yellow", Red: "red" }, "yellow")}
      onClick={action("Presiono Click")}
    />
  ));
