function Box({ children }) {
    return (
        <div style={{
            border: "1px solid black", margin: "15px", padding: "15px"
        }}>
            {children}
        </div >
    );
}

export default Box;