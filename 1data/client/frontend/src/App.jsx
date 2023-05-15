import './App.css'
import React from 'react'


function fetchBox() {
    const data = fetch("http://localhost:3000/box")
    .then(earring => {
        return earring.json()
       })
    .catch (err => {
        console.error(err)
        return "error"
      })
    return data

    

}
export default class BoxClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxname : this.props.boxname,
            boximport : []

           
  
        }
        const fetchbox = fetchBox()
    }       
    
    componentDidMount() {
        fetchBox () .then (result => {
            this.setState({
                boximport : result
            });
        })
    }

    render()
     {
        console.log('this is in the render')
        console.log("BOXIMPORT" + this.state.boximport)
        console.log(this.state.boximport.map(box => <div>{box.items.color}</div>))

        return(
            <div>
            <p>hey :D</p>

            <div>{this.state.boximport.map(box => <div>{box.boxmaster}</div>)}
             
            </div>
            <div>{this.state.boximport.map(box => <div>{box.items.title}</div>)}</div>
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
