import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SidebarChannel from "./SideBar";

storiesOf("Components/Channel", module)
  .addDecorator(withKnobs)
  .add("Sidebar Component", () => (
    <SidebarChannel channelName={{ channelName: text("channelName", "DBZ") }} />
  ));
