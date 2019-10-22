import React from "react"
import ReactDOM from "react-dom"

//always have some camel case
//will only return a single JSX element - get around it by wrapping it in a <div>!
function MyApp(){
  return (
      <div>
        <h1> This should be Fun!</h1>
         <ul> 
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
         </ul>
     </div> 
     )
}

//the documentgetElementById("root") shows the program where to display the code you are writing
//<MyApp/> is a self closing component - apparently there are other components you can have to accept child components
ReactDOM.render( <MyApp/>, document.getElementById("root"))
