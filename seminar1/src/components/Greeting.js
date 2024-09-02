function Greetings() {
    let textTime = '';
    const time = new Date().getHours();
    if (time >= 4 && time <= 12) {
        textTime = "Доброе утро";
    }
    else if (time >= 12 && time <= 17)
        textTime = "Добрый день";
    else if (time >= 17 && time <= 24)
        textTime = "Добрый вечер";
    else
        textTime = "Доброй ночи";
    return (
        <h1>{textTime}</h1>
    )
}

export default Greetings;