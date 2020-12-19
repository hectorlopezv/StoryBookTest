import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Footer, {
  Footer_Row,
  Footer_Break,
  Footer_Col,
  Footer_Link,
  Footer_Text,
  Footer_Title,
} from ".";

storiesOf("Components/Footer", module)
  .addDecorator(withKnobs)
  .add("Fotter Container Style components", () => (
    <Footer>
      <Footer_Title>Questions? Contact us.</Footer_Title>
      <Footer_Break />
      <Footer_Row>
        <Footer_Col>
          <Footer_Link href="#">FAQ</Footer_Link>
          <Footer_Link href="#">Investor Relations</Footer_Link>
          <Footer_Link href="#">Ways to Watch</Footer_Link>
          <Footer_Link href="#">Corporate Information</Footer_Link>
          <Footer_Link href="#">Netflix Originals</Footer_Link>
        </Footer_Col>

        <Footer_Col>
          <Footer_Link href="#">Help Center</Footer_Link>
          <Footer_Link href="#">Jobs</Footer_Link>
          <Footer_Link href="#">Terms of Use</Footer_Link>
          <Footer_Link href="#">Contact Us</Footer_Link>
        </Footer_Col>

        <Footer_Col>
          <Footer_Link href="#">Account</Footer_Link>
          <Footer_Link href="#">Redeem Gift Cards</Footer_Link>
          <Footer_Link href="#">Privacy</Footer_Link>
          <Footer_Link href="#">Speed Test</Footer_Link>
        </Footer_Col>

        <Footer_Col>
          <Footer_Link href="#">Media Centre</Footer_Link>
          <Footer_Link href="#">buy Gift Cards</Footer_Link>
          <Footer_Link href="#">Cookie Preferences</Footer_Link>
          <Footer_Link href="#">Legal Notices</Footer_Link>
        </Footer_Col>
        <Footer_Break />
      </Footer_Row>

      <Footer_Text>Netflix Colombia</Footer_Text>
    </Footer>
  ))
  .add("Footer Title", () => (
    <Footer_Title>Questions? Contact us.</Footer_Title>
  ))
  .add("Footer Link", () => <Footer_Link href="#">Media Centre</Footer_Link>)
  .add("Footer Col", () => (
    <Footer_Col>
      <Footer_Link href="#">Media Centre</Footer_Link>
      <Footer_Link href="#">buy Gift Cards</Footer_Link>
      <Footer_Link href="#">Cookie Preferences</Footer_Link>
      <Footer_Link href="#">Legal Notices</Footer_Link>
    </Footer_Col>
  ))
  .add("Footer Break", () => <Footer_Break />);
