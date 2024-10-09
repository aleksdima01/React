import React from 'react'

const Button = ({ children, handlerClick = () => { } }) => {      //если нет функции, то будет пустое значение
    return (
        <button onClick={handlerClick}>{children}</button>
    )
}

export default Button;
