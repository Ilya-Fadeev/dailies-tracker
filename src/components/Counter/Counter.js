import React, {useState} from "react";

const Counter
 = () => {

    const [countValue, setCountValue] = useState(10);

    function increaseCountValue() {
        setCountValue(countValue + 1);
    }
  
    function decreaseCountValue() {
        setCountValue(countValue - 1);
    }

    return (
        <div>
            <h2>{countValue}</h2>
            <button onClick={increaseCountValue}>Increment</button>
            <button onClick={decreaseCountValue}>Decrement</button>
        </div>
    );
};

export default Counter;