import './App.css'
import React from 'react'
import EarClass from './earring.jsx'


//gets the earring by name, returns that earring
function fetchRings() {
	const apiUrl = 'http://localhost:3000/earrings'
	console.log(apiUrl)
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
export default class AllRing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rings: []

           
  
        }
    }       
   
//updates state, similar to box.jsx
    componentDidMount() {
        fetchRings (this.state.ringname) .then (result => {
            this.setState({
                rings : result
            });
        })
    }

    render()
     {
        console.log('this is in the render')
        console.log(this.state.rings)
/*         const rows = [];
        for (let i = 0; i < length[rings]; i++) {
            rows.push(<EarClass ringname= />);
        } */
        // console.log("ESRRR")
        // console.log(this.state.ringimport)
        

        
        //takes the propertys of the now updated ring import and makes it look all nice

        return(
            <div>{this.state.rings.map(earring => <div><EarClass ringname={earring.title} /></div>)}</div>
        )
    }
}
  