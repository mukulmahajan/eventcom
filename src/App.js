import React, { Component } from 'react';

import  CheckBox  from './CheckBox'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: [
        {id: 1, value: "Rod Hand", isChecked: false},
        {id: 2, value: "Rod DVM", isChecked: false},
        {id: 3, value: "Curt", isChecked: false},
        {id: 4, value: "Juliet", isChecked: false},
        {id: 5, value: "Cliften", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let Data=this.state.Data
    Data.forEach(data =>data.isChecked = event.target.checked) 
    this.setState({Data:Data})
  }

  handleCheckChieldElement = (event) => {
    let Data= this.state.Data
    Data.forEach(data => {
       if (data.value === event.target.value)
          data.isChecked =  event.target.checked
    })
    this.setState({Data:Data})
  }


  render() {
    return (
      <div className="App">
      <p>Intermidiate Checkbox</p>
      <input type="checkbox" onChange={this.handleAllChecked}  value="check" />Select All
        <ul>
        {
          this.state.Data.map((Data, index) => {
            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...Data} />)
          })
        }
        </ul>
      </div>
    );
  }
}

export default App