import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Message from "./Chat";

storiesOf("Components/Chat", module)
  .addDecorator(withKnobs)
  .add("Chat Testin", () => (
    <div className="chat_messages">
      <Message
        timestamp={Date.now()}
        message={text("Message", "Message")}
        user={{ photo: "", displayName: text("User Name", "User Name") }}
      />
    </div>
  ));
