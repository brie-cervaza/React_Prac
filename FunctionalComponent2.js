import React from "react"
import ReactDOM from "react-dom"

//creating a functional component

function MyApp2(){
  //opening with a div cause we are making more than just a list
  //create a heading with your name
  return (
    <div>
    {/*In <div>, comments have to look like this apparently*/}
      <h1> Brie-cervaza</h1>
  {/*a paragraph with a little info on yourself*/}
        <p>Learning a language on my lonesome because I really don't want to study Proofs right now and learning this seems like a good time. That and I hear this is good for app development and websites. That or just really good for being productive while not being productive. Eh? </p>
        
        {/*ordered or unordered list of top 3 vacation spots you'd like to visit*/}
      <h2> Top Three Places I'd like to vacation</h2>
        <ul>
          <li>Singapor (although I'd like to be able to speak passiable mandarin before I go)</li>
          <li>Europe (never been there before)</li>
          <li>Anywhere outside of the home state (never really been on a vacation before)</li> 
        </ul>
    </div>
  )  
}//end function MyApp2()
ReactDOM.render(<MyApp2/>, document.getElementById("root"))
