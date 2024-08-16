import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const Chocolate = ({name, emoji})=>{
   
    
    return (<>
    <h2>{name} - {emoji}</h2>
    </>)
}

const Snacks = ()=>{
    return <h1>snacks </h1>
}


root.render(<>

<h1>All chocolates</h1>

<Chocolate name="dairy milk" emoji="🥛" />
<Chocolate name="kitkit" emoji="🍫"/>
<Chocolate name="lollypop" emoji="🍭"/>
<Chocolate name="ice cream" emoji="🍦"/>
<Chocolate name="candy" emoji="🍬"/>


</>)