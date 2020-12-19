import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("Components/Button", module)
  .addDecorator(withKnobs)
  .add("Amarillo", () => (
    <Button
      color={select(
        "color",
        { Amarillo: "yellow", Naranja: "orange" },
        "yellow"
      )}
      onClick={action("Presiono Click")}
    />
  ))
  .add("Verde", () => (
    <Button color={text("color", "green")} onClick={action("clicked")} />
  ));
