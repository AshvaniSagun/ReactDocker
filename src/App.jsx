import './App.css'
import {useState} from "react";
import HolyGrail from "./components/holyGrail/holyGrail.jsx";
import Form from "./components/formToDoList/form.jsx";
import Accordion from './components/accordion/accordion.jsx';

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const conceptComponents = [
        <HolyGrail key="holyGrail"/>,
        <Form key="form"/>,
        <Accordion key="accordion"/>
    ];

    return (
        <>
            <div>
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
            {conceptComponents[currentIndex]}
        </>
    )
}

export default App
