import './App.css'
import React from 'react'


async function fetchBox(boxname) {
    const data = await fetch("htpp://localhost:3000/box/"+{boxname})
    return data.json()
}
export default class BoxClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boximport : fetchBox(this.props.boxname)
  
        }}       

    
    render()
     {
        console.log('this is in the render')

        return(
            <div>
            <p>hey :D</p>
            </div>
            
            
        )
    }
}
  
/* 
function ColapseF (theWhat) {
    const [theClass, setTheWhat] = useState(theWhat)
    const [theHTML, setTheHTML] = useState(document.getElementsByClassName(props.getWhat))

    return(
        <div>
        <button onClick={(e => this.closePop(theClass))}>Colapse</button>
        <div>{this.state.popup}</div>
        </div>
        
        
    )

} */
