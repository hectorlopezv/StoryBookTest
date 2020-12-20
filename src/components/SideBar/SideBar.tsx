import React from "react";
import "./SidebarChannel.css";

export interface SidebarChannelProps {
  id?: string;
  channelName: { channelName: string };
}

const SidebarChannel: React.FC<SidebarChannelProps> = (props) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {props.channelName.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
