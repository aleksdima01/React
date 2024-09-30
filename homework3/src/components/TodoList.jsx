import { Button, List, ListItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    const newTask = () => {
        if (text.trim() === '') {
            return;
        }
        setTasks([...tasks, text]);
        setText("");
    }
    const updateText = (e) => {
        setText(text => e.target.value)
    }
    const deleteTask = (index) => {
        const newArray = Array.from(tasks);
        newArray.splice(index, 1);
        setTasks(newArray);
    }

    return (<>
        <div style={{
            display: 'flex', alignItems: 'center'
        }}>

            <TextField
                onChange={updateText}
                value={text}
                style={{ margin: "20px" }} id="outlined-basic" label="Введите задачу" variant="outlined" />
            <Button onClick={newTask} style={{ margin: "20px" }} variant="outlined">Добавить задачу</Button>
        </div >
        {
            tasks.length > 0 ?
                <div>
                    < List sx={{ width: '100%', maxWidth: 360 }}>
                        {tasks.map((task, index) => (
                            <ListItem key={index}>
                                {task}
                                <DeleteForeverIcon onClick={() => deleteTask(index)} />
                            </ListItem>))
                        }
                    </List>
                </div > :
                <div style={{ margin: '20px' }}>
                    <p >Пока нет задач</p>
                </div>
        }
    </>
    );
}

export default TodoList
