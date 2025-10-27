import React from 'react';
import useToggle from './customHook';

function CustomComponent() {

const [isOn, toggle] = useToggle();

    return (
        <div>
             <p>The switch is {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default CustomComponent;