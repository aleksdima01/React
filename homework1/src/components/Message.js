import './Message.css'

function Message({ text, color }) {
    return (<h2 className="h2" style={{ color }}>{text}</h2>)
}

export default Message;