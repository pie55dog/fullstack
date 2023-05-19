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

function fetchNewEar(color, kind, price, profile, title) {
    
    const apiUrl = 'http://localhost:3000/new/earring'
    const data = fetch(apiUrl, {
        method: "Post",
        body: JSON.stringify(data),
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type' : 'aplication/jsor'
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


export default class BoxClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usercolor : null,
            userkind : null,
            userprice : null,
            userprofile: noimgae,
            usertite: null,
            
        }
    }       
    
    componentDidMount() {
       
    }

    render()
     {      


        }
        
}
