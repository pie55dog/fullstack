import './App.css'
import React from 'react'


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
        //console.log(this.state.boximport.items[0])

        return(
            <div>
            <p>hey :D</p>
            <p>{this.state.boximport.boxmaster}</p>
            {/*<p>{this.state.boximport.items}</p>}

            

           {/*  <div>{this.state.boximport.map(box => <div>{box.items}</div>)}
             
            </div>
            <div>{this.state.boximport.map(box => <div>{box.items.title}</div>)}</div> */}
            </div>

            
            
        )
    }
}

//*  <div>{this.state.boximport.map(box => <div>{box.items}</div>)}