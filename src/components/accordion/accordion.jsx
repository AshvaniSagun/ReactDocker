import { useState } from "react";

function Accordion () {

    const [toggleAccordion, setToggleAccordion] = useState(null);

    const onAccordionToggle = (key) => {
        const toggle = toggleAccordion === key ? null : key
        setToggleAccordion(toggle)
    }


    return (
      
      <>
            <div style={{padding:'10px',backgroundColor:'aquamarine'}} onClick={() => onAccordionToggle(1)}><button>Accordion 1</button></div>
             {toggleAccordion === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

             <div style={{padding:'10px',backgroundColor:'darkviolet'}} onClick={() => onAccordionToggle(2)}><button>Accordion 2</button></div>
             {toggleAccordion === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

             <div style={{padding:'10px',backgroundColor:'yellow'}} onClick={() => onAccordionToggle(3)}><button>Accordion 3</button></div>
             {toggleAccordion === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
      </>

)
}

export default Accordion;