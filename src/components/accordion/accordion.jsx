// import { useState } from "react";

// function Accordion () {

//     const [toggleAccordion, setToggleAccordion] = useState(null);

//     const onAccordionToggle = (key) => {
//         const toggle = toggleAccordion === key ? null : key
//         setToggleAccordion(toggle)
//     }


//     return (
      
//       <>
//             <div style={{padding:'10px',backgroundColor:'aquamarine'}} onClick={() => onAccordionToggle(1)}><button>Accordion 1</button></div>
//              {toggleAccordion === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

//              <div style={{padding:'10px',backgroundColor:'darkviolet'}} onClick={() => onAccordionToggle(2)}><button>Accordion 2</button></div>
//              {toggleAccordion === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

//              <div style={{padding:'10px',backgroundColor:'yellow'}} onClick={() => onAccordionToggle(3)}><button>Accordion 3</button></div>
//              {toggleAccordion === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
//       </>

// )
// }

// export default Accordion;


//Dynalic Accordions below 
import { useState } from "react";

function Accordion() {
 const [toggleAccordion, setToggleAccordion] = useState(null);

  const accordionData = [
    {
      id: 1,
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Accordion 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Accordion 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const onAccordionToggle = (id) => {
    setToggleAccordion(toggleAccordion === id ? null : id);
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      {accordionData.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <div style={{padding: "10px",backgroundColor: "#89cff0"}} onClick={() => onAccordionToggle(item.id)}>
            <strong>{item.title}</strong>
          </div>
          {toggleAccordion === item.id && (
            <div
              style={{backgroundColor: "#f0f0f0",padding: "10px"}}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
