import './App.css'
import {useState, useContext} from "react";
import HolyGrail from "./components/holyGrail/holyGrail.jsx";
import Form from "./components/formToDoList/form.jsx";
import Accordion from './components/accordion/accordion.jsx';
import useTheme  from './components/lightDarkMode/ThemeContext.jsx';
import Practice from './components/practice/practice.jsx';
import CustomComponent from './components/customHook/customComponent.jsx';

function App() {
    const {theme, toggleTheme} = useTheme();

    const [currentIndex, setCurrentIndex] = useState(0);
    const conceptComponents = [
        <HolyGrail key="HolyGrail"/>,
        <Form key="ToDo Form"/>,
        <Accordion key="Accordion"/>,
        <Practice key="Practice"/>,
        <CustomComponent key="CustomComponent"/>
    ];

    const appStyles = {
    backgroundColor: theme === 'light' ? '#b87a7aff' : '#1f1919ff',
    color: theme === 'light' ? '#1f1919ff' : '#b87a7aff',
    padding: '9px'
  };


    return (
        <>
            <div style={appStyles}>
                 <button onClick={toggleTheme}>Toggle Theme</button> {conceptComponents[currentIndex].key}
                {conceptComponents.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            backgroundColor: currentIndex === index ? '#007bff' : '#ccc',
                            color: currentIndex === index ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div style={{padding:'10px'}}>
                {conceptComponents[currentIndex]}
            </div>
        </>
    )
}

export default App
