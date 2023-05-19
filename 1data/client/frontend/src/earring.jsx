import './App.css'
import React from 'react'


//gets the earring by name, returns that earring
function fetchRing(ringname) {
	const apiUrl = 'http://localhost:3000/oneear/' + ringname
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
export default class EarClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ringname : this.props.ringname,
            ringimport : []

           
  
        }
        const fetchring = fetchRing(this.state.ringname)
    }       
   
//updates state, similar to box.jsx
    componentDidMount() {
        fetchRing (this.state.ringname) .then (result => {
            this.setState({
                ringimport : result
            });
        })
    }

    render()
     {
        // console.log('this is in the render')
        // console.log("ESRRR")
        // console.log(this.state.ringimport)

        
        //takes the propertys of the now updated ring import and makes it look all nice

        return(
            <div className='earringdisplay'>
					<div>
						<h3>{this.state.ringimport.title}</h3> 
						<p>{this.state.ringimport.color}, {this.state.ringimport.kind}</p>
						<p>price: <em>{this.state.ringimport.price}</em></p>
					</div>
				<img src={this.state.ringimport.profile}></img>							     
            </div>

            
            
        )
    }
}
  