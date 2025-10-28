import './App.css'
import { useState } from "react";
import HolyGrail from "./components/holyGrail/holyGrail.jsx";
import Form from "./components/formToDoList/form.jsx";
import Accordion from './components/accordion/accordion.jsx';
import useTheme from './components/lightDarkMode/ThemeContext.jsx';
import Practice from './components/practice/practice.jsx';
import CustomHookComponent from './components/customHook/customHookComponent.jsx';
import Counter from './components/counter/counter.jsx';
import FetchData from './components/fetchData/fetchData.jsx';
import DebounceSearch from './components/debouncing/debouncing.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const conceptComponents = [
    { name: "HolyGrail", component: <HolyGrail /> },
    { name: "Form", component: <Form /> },
    { name: "Accordion", component: <Accordion /> },
    { name: "Practice", component: <Practice /> },
    { name: "Custom Hook", component: <CustomHookComponent /> },
    { name: "Counter", component: <Counter /> },
    { name: "Fetch Data", component: <FetchData /> },
    { name: "DebounceSearch", component: <DebounceSearch /> }
  ];

  const appStyles = {
    backgroundColor: theme === 'light' ? '#b87a7aff' : '#1f1919ff',
    color: theme === 'light' ? '#1f1919ff' : '#b87a7aff',
    padding: '9px'
  };

  return (
    <>
      <div style={appStyles}>
        <button onClick={toggleTheme}>Toggle Theme</button>{" "}
        {conceptComponents.map((item, index) => (
          <button
            key={item.name}
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
            {item.name}
          </button>
        ))}
      </div>

      <div style={{ padding: '10px' }}>
        {conceptComponents[currentIndex].component}
      </div>
    </>
  );
}

export default App;
