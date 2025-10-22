import { useState } from "react";

function Accordion () {

    const [toggleAccordion, setToggleAccordion] = useState(null);

    const onAccordionToggle = (key) => {
        const toggle = toggleAccordion === key ? null : key
        setToggleAccordion(toggle)
    }


    return (
      
      <>
            <div style={{padding:'10px',backgroundColor:'aquamarine'}} onClick={() => onAccordionToggle(1)}><button>Html </button></div>
             {toggleAccordion === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

             <div style={{padding:'10px',backgroundColor:'darkviolet'}} onClick={() => onAccordionToggle(2)}><button>Html </button></div>
             {toggleAccordion === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}

             <div style={{padding:'10px',backgroundColor:'yellow'}} onClick={() => onAccordionToggle(3)}><button>Html </button></div>
             {toggleAccordion === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
      </>

)
}

export default Accordion;