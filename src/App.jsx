import './App.css'
import { useState } from "react";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { MegaMenu } from 'primereact/megamenu';

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

function App() {
  const { theme, toggleTheme } = useTheme();

  const [activeComponent, setActiveComponent] = useState(<HolyGrail />);

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
      label: 'Concepts',
      icon: 'pi pi-code',
      items: [
        [
          {
            label: 'Components',
            items: conceptComponents.map((item) => ({
              label: item.name,
              command: () => setActiveComponent(item.component),
            }))
          }
        ]
      ]
    },
    {
      label: 'Practice Playground',
      icon: 'pi pi-spin pi-cog',
      command: () => setActiveComponent(<Practice />)
    },
    {
      label: 'Coming Soon 2',
      icon: 'pi pi-spin pi-cog',
      items: [[]] // still empty
    }
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
