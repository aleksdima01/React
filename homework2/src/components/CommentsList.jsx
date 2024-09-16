import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" },
        { id: 6, text: "Это шестой комментарий" }
    ]);

    const deleteComment = (id) => {
        const newArray = [...comments].filter(el => el.id !== id);
        console.log(newArray);
        setComments(newArray);
    }

    return (<ul className="comments_all">
        {comments.map((com) =>
            <li className="comments" key={com.id}>{com.text} <button onClick={() => deleteComment(com.id)}>Удалить</button></li>)
        }
    </ul >);
}

export default CommentsList;