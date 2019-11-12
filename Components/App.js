import React from "react"
import Footer from "./Footer"

function App(){
  //need to return a div element
  return(
    <div>
      <nav>
          <h1> Hewo to the world</h1>
          <ul>
              <li> Hello => Acceptable </li>
              <li> Hellow => Somewhat Acceptable </li>
              <li> Hewo UwU => Not Acceptable </li>
          </ul>
      </nav>
      <main> This has been a PSA from me and what you can send me </main>
      {/*this is the function you created for a footer*/}
      <Footer />
    </div>
    
  )
}
export default App
