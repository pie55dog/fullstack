import './App.css'
import React from 'react'

//
//
//
//
//

//DATABASE
//color
//kind
//price
//profile
//title

function fetchRing(ringname) {
	const apiUrl = 'http://localhost:3000/remove/ear/title/' + ringname
	console.log(apiUrl)
    const data = fetch(apiUrl,  {
        method: "DELETE",
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type' : 'application/json'
        }
    })
    .then(earring => {
        return earring.json()
       })
    .catch (err => {
        console.error(err)
        return "error"
      })
    return data }


export default class DeleteRing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usertile: null,
            
        }
    }       
    
    componentDidMount() {
       
    }
    
    inputUpdate(evt, prop) {
        this.setState({
            [prop] : evt.target.value
        })
        console.log(this.state)
    }

    onSubmit() {
        console.log("FINAL STATE")
        console.log(this.state)
        fetchRing(this.state.usertitle)
    }

    render(){    
        
            return(
            <React.Fragment>
                <h2>Delete</h2>
                <p>Name</p>
                <input value={(this.state.usertitle)} onChange={evt => this.inputUpdate(evt, "usertitle")} />

                <button onClick={() => this.onSubmit()}>Submit</button>
                
            </React.Fragment>
            )
        }
        
}
