import React from 'react';

export default function ReactCourse () {
    const [count, setCount] = React.useState(0);

    const add = () => {
        setCount(prevCount => prevCount + 1);
    };

    const sub = () => {
        setCount(prevCount => prevCount - 1);
    };
    //--------------------------------------------------
    const [thingsArray, addThingsArray] = React.useState([(<p key={0}>Thing {1}</p>), (<p key={1}>Thing {2}</p>)]);
    const addItem = () => {
        addThingsArray(prevThingsArray => {
            const nextThingsArray = [...prevThingsArray];
            const lastThing = prevThingsArray.length;
            nextThingsArray.push((<p key={lastThing}>Thing {lastThing + 1}</p>))
            return nextThingsArray;
        });
    };

    return (
        <div>
            <h3>ReactCourse</h3>
            <p>{count}</p>
            <p onClick={add}>+</p>
            <p onClick={sub}>-</p>
            {/*-----------------------------*/}
            <p onClick={addItem}>Add Item</p>
            <div>{thingsArray}</div>
        </div>
    );
}