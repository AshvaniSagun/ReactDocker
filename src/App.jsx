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
import Parent from './components/parentChildRelationship/parent.jsx';
import ToggleUsingRef from './components/toggleUsingRef/toggleUsingRef.jsx';
import TreeComponent from './components/treeLikeStructure/TreeComponent.jsx';
import { MegaMenu } from 'primereact/megamenu';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeComponent, setActiveComponent] = useState(<HolyGrail />);
  const [activeName, setActiveName] = useState("HolyGrail");

  const conceptComponents = [
    { name: "HolyGrail", component: <HolyGrail /> },
    { name: "Form", component: <Form /> },
    { name: "Accordion", component: <Accordion /> },
    { name: "Custom Hook", component: <CustomHookComponent /> },
    { name: "Counter", component: <Counter /> },
    { name: "Fetch Data", component: <FetchData /> },
    { name: "DebounceSearch", component: <DebounceSearch /> },
    { name: "ParentChildRelation", component: <Parent /> },
    { name: "ToggleUsingRef", component: <ToggleUsingRef /> },
    { name: "TreeComponent", component: <TreeComponent /> },
  ];

  const items = [
    {
      label: 'Coding topics',
      icon: 'pi pi-code',
      items: [
        [
          {
            label: 'Components',
            items: conceptComponents.map((item) => ({
              label: item.name,
              command: () => {
                setActiveComponent(item.component);
                setActiveName(item.name);
              },
            })),
          },
        ],
      ],
    },
    {
      label: 'Practice Playground',
      icon: 'pi pi-spin pi-cog',
      command: () => {
        setActiveComponent(<Practice />);
        setActiveName("Practice");
      },
    },
    {
      label: 'New in React 19',
      icon: 'pi pi-spin pi-cog',
      items: [[]],
    },
  ];

  const appStyles = {
    backgroundColor: theme === 'light' ? '#b87a7aff' : '#1f1919ff',
    color: theme === 'light' ? '#1f1919ff' : '#b87a7aff',
    padding: '9px',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <div style={appStyles}>
        <div style={headerStyle}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <h3 style={{ margin: 0 }}>🧩 {activeName}</h3>
        </div>

        <div className="card" style={{ marginTop: '10px' }}>
          <MegaMenu model={items} breakpoint="500px" />
        </div>
      </div>

      <div style={{ padding: '10px' }}>
        {activeComponent}
      </div>
    </>
  );
}

export default App;
