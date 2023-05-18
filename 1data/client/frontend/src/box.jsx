import './App.css'
import React from 'react'
import EarClass from './earring.jsx'


function fetchBox(boxname) {
    const apiUrl = 'http://localhost:3000/onebox/' + boxname
    const data = fetch(apiUrl)
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
        fetchBox (this.state.boxname) .then (result => {
            this.setState({
                boximport : result
            });
        })
    }

    render()
     {
    
        // console.log('this is in the render')
        // console.log("BOXIMPORT" + this.state.boximport)
        console.log(this.state.boximport.items)
        const itemlist = (this.state.boximport)
        
        if (this.state.boximport.length != 0) {
            return(
                <div>
    

                <h2>{this.state.boximport.boxmaster}</h2>
                
                <div className='allearmain' >
                    
                    <EarClass ringname={itemlist.items[0].title} />
                    
                </div>
                {/*<div>{itemlist.map(stuff => <div>{stuff.title}</div>)}</div>
                
                {/*<p>{this.state.boximport.items}</p>}
    
                
    
               {/*  <div>{this.state.boximport.map(box => <div>{box.items}</div>)}
                 
                </div>
                <div>{this.state.boximport.map(box => <div>{box.items.title}</div>)}</div> */}
                </div>
    

                
                
            )

        }


        
    }
}

//*  <div>{this.state.boximport.map(box => <div>{box.items}</div>)}
//
//
//CHANGES BACKGROUND TO COLOR OF EARRING but the red is discusting style={{backgroundColor: (itemlist.items[0].color)}}