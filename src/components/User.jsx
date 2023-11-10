import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    return(
        <div>
            <h2>{name}</h2>
            <h3>Count : {count}</h3>
            <button onClick={() => {
                setCount(count+1)
            }}>
            Add
            </button>
        </div>
    )
}

export default User;