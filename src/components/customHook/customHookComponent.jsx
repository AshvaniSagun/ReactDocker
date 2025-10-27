import React from 'react';
import useToggle from './customHook';

function CustomHookComponent() {

const [theme, toggle] = useToggle();

const appTheme = {
    backgroundColor: theme === 'light' ? 'yellow' : 'red',
}

    return (
        <div style={appTheme}> 
             <p>The switch is {theme ? "light" : "dark"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default CustomHookComponent;