import React from "react"
//this renders to the page
import ReactDOM from "react-dom"
//render an unordered list <ul> to the page

ReactDOM.render(<div><h1> Unordered List Element </h1><ul>     <li>One  </li> 
                         <li>Two  </li>
                         <li>Three</li>
                         <li>Four </li>
                </ul></div>, 
                document.getElementById("root"))
