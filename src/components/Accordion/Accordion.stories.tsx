import React from "react";
import { storiesOf } from "@storybook/react";
import faqs from "./faqs.json";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Accordion, {
  Accordion_Title,
  Accordion_Item,
  Accordion_Header,
  Accordion_Body,
} from ".";

storiesOf("Components/Accordion", module)
  .addDecorator(withKnobs)
  .add("Accordion full Component", () => (
    <Accordion>
      <Accordion_Title>Frequently Asked Questions</Accordion_Title>
      {faqs.map((item: any) => {
        return (
          <Accordion_Item key={item.id}>
            <Accordion_Header>{item.header}</Accordion_Header>
            <Accordion_Body>{item.body}</Accordion_Body>
          </Accordion_Item>
        );
      })}
    </Accordion>
  ))
  .add("Accordion Item", () => (
    <Accordion_Item>
      <Accordion_Header>Header Title</Accordion_Header>
      <Accordion_Body>THE JOKER FIRST MOVIE.</Accordion_Body>
    </Accordion_Item>
  ))
  .add("Accordion Header", () => (
    <Accordion_Header>Header Title</Accordion_Header>
  ))
  .add("Accordion Title", () => (
    <Accordion_Title>Frequently Asked Questions</Accordion_Title>
  ));
