const Message = ({ message }) => {
    const isMe = message.from === "me";

    return (
        <div
            style={{
                display: "flex",
                justifyContent: isMe ? "flex-end" : "flex-start",
                margin: "5px 0"
            }}
        >
            <div
                style={{
                    padding: "8px 12px",
                    borderRadius: "10px",
                    maxWidth: "60%",
                    background: isMe ? "#DCF8C6" : "#EEE"
                }}
            >
                {message.text}
            </div>
        </div>
    );
}

export default Message;