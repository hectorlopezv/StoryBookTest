import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import BurgerIngridient from "./Ingredient/BurgerIngridient";
import classes from "./Burger.module.css";

storiesOf("Components/BurgerIgredient", module)
  .addDecorator(withKnobs)
  .add("Burger Ingredient", () => (
    <div className={classes.Burger}>
      <BurgerIngridient
        type={select(
          "Options",
          {
            breadTop: "bread-top",
            breadBottom: "bread-bottom",
            cheese: "cheese",
            bacon: "bacon",
            meat: "meat",
            salad: "salad",
          },
          "bread-top"
        )}
      />
    </div>
  ));
