function CurrentTime() {
    const time = new Date().toLocaleTimeString();
    return (<h2>{time}</h2>)
}
export default CurrentTime;