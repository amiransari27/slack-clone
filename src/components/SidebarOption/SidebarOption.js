import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "firestore/firebase";

function SidebarOption(props) {
  const { Icon, title, id, addChannelOption } = props;
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("/title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      <h3 className="sidebarOption__channel">
        {!Icon && <span className="sidebarOption__hash">#</span>} {title}
      </h3>
    </div>
  );
}

export default SidebarOption;
