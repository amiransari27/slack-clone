import React, { useState } from "react";
import firebase from "firebase";
import "./ChatInput.css";
import db from "firestore/firebase";
import { useStateValue } from "store/StateProvider";

function ChatInput(props) {
  const [input, setInput] = useState("");
  const [state] = useStateValue();
  const { user } = state;
  const { channelName, channelId } = props;

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messges").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput("");
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
