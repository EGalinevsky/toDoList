import React, {useState} from 'react'

export const Hooks1 = () =>{

    const [count, setCount] = useState(0)
    return (
        <div>
            <p>колчество кликов {count}</p>
            <button onClick={() =>setCount(prev => prev + 1) }>Увеличить</button>
            <button onClick={() =>setCount(prev => prev - 1)}>уменьшить</button>
        </div>
    )
}
