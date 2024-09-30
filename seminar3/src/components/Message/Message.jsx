import PropTypes from "prop-types";

export const Message = ({ msg }) => {
  return <li>{msg}</li>;
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};
