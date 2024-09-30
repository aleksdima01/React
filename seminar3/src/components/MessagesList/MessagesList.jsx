import { Message } from "../Message/Message";
import { propTypeMessages } from "../../helper";

export const MessagesList = ({ messages }) => (
  <ul>
    {messages.map(({ id, text }) => (
      <Message key={id} msg={text} />
    ))}
  </ul>
);

MessagesList.propTypes = {
  messages: propTypeMessages,
};
