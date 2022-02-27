import { useState, useEffect } from "react";

const UserInput = () => {

    const [input, setInput] = useState(null);
    const [title, setTitle] = useState("Initial Title");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const change = (e) => {
        setInput(e.target.value);
    }

    const submit = () => {
        setTitle(input);
    }

    return (
        <div>
            <h1>{input}</h1>
            <input placeholder="type here" onChange={change} />
            <button onClick={submit}>Submit</button>
        </div>

    );

}

export default UserInput;