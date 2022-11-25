import React from 'react'
import Axios from 'axios'
class Jokes extends React.Component {
 constructor(props) {
     super(props)
     this.state = {
        list: []
     }
     this.appendItem = this.appendItem.bind(this)
     this.deleteItem = this.deleteItem.bind(this)
 } 
 
 appendItem () {
     Axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
     .then(response => {
         console.log(response.data.joke)
         this.setState(prevState => {
             return {
                 list: [...prevState.list, response.data.joke]
             }
         })
     })
 }
 
 deleteItem() {
    let tempArr = this.state.list
    tempArr.pop()
    this.setState(prevState => {
        return {
            list: tempArr
        }
    })
 }
 
 render () {
     return (
        <div>
           <h1>Jokes</h1>
           <ul>
                {this.state.list.map(joke => (
                <li key={joke} className="listItem">{joke}</li>
                ))}
           </ul>
           <button onClick={this.appendItem}>Add Joke</button>
           <button onClick={this.deleteItem}>Delete Joke</button>
        </div>
     )
 }
}
export default Jokes