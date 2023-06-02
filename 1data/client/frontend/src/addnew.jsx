import './App.css'
import React from 'react'
import noimgae from './assets/download-5.png'

//
//
//the start of something that can add an earring to db
//
//
//

//DATABASE
//color
//kind
//price
//profile
//title

function fetchNewEar(body) {
    console.log(body)

    const apiUrl = 'http://localhost:3000/new/earring'

    const data = fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
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
    return data
}


export default class NewCreation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usercolor : null,
            userkind : null,
            userprice : null,
            userprofile: noimgae,
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
        var body = {
        "color": (this.state.usercolor),
        "kind": (this.state.userkind),
        "price": (this.state.userprice),
        "profile": (this.state.userprofile),
        'title': (this.state.usertitle)}
        console.log("body: " + body)
        fetchNewEar(body)
    }

    render(){    
        
            return(
            <React.Fragment>
                <h2>Create your own Earring!!</h2>
                <p>Color</p>
                <input value={(this.state.usercolor)} onChange={evt => this.inputUpdate(evt, "usercolor")} />
                <p>Kind: small, large, stud, hoop</p>
                <input value={(this.state.userkind)} onChange={evt => this.inputUpdate(evt, "userkind")} />
                <p>Price</p>
                <input value={(this.state.userprice)} onChange={evt => this.inputUpdate(evt, "userprice")} />
                <p>Image URL</p>
                <input value={(this.state.userprofile)} onChange={evt => this.inputUpdate(evt, "userprofile")} />
                <p>Name</p>
                <input value={(this.state.usertitle)} onChange={evt => this.inputUpdate(evt, "usertitle")} />

                <button onClick={() => this.onSubmit()}>Submit</button>
                
            </React.Fragment>
            )
        }
        
}
