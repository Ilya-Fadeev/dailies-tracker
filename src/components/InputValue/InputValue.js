import React, {useState} from 'react';

const InputValue = () => {

    const [textValue, setTextValue] = useState('hi everybody')

    return (
        <div>
                <h2>{textValue}</h2>
                <input 
                    type="text" 
                    value={textValue}
                    onChange={event => setTextValue(event.target.value)}>

                </input>
        </div>
    );
};

export default InputValue;