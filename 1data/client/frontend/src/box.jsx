import './App.css'
import React from 'react'
import EarClass from './earring.jsx'


//gets the box based on the box name passed in props
function fetchBox(boxname) {
    const apiUrl = 'http://localhost:3000/onebox/' + boxname
    const data = fetch(apiUrl)
    //copy pase from routs.js
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

    }       
    
    componentDidMount() {
        fetchBox (this.state.boxname) .then (result => {
            this.setState({
                boximport : result
                //updating state
            });
        })
    }

    render()
     {
    

        console.log(this.state.boximport.items)
        const itemlist = (this.state.boximport)
        
        //renders once the earrings in box data is recived
        //would be cool to be able to render multiple earrings per box! using recusion or map??
        if (this.state.boximport.length != 0) {
            return(
                <div className='boxdisplay' >
    

                    <h2>{this.state.boximport.boxmaster}</h2>
                
                    <span>
                        <span >{this.state.boximport.items.map(earring => <span><EarClass ringname={earring.title} /></span>)}</span>

                    </span>
                    

                    
                </div>
    

                
                
            )

        }


        
    }
}

//*  <div>{this.state.boximport.map(box => <div>{box.items}</div>)}
//
//
//CHANGES BACKGROUND TO COLOR OF EARRING but the red is discusting style={{backgroundColor: (itemlist.items[0].color)}}