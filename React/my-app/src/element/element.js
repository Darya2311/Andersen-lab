import React, { Component} from 'react'

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.searchInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  focusInput() {
    this.searchInput.current.focus()
  }
  
  render () {
    return (
      <form>
        <button type='button' onClick={this.focusInput}> On focus </button>
        <input type='text' ref={this.searchInput}  placeholder='Enter some text' value={this.state.value} onChange={this.handleChange}/>
        <button type='submit' disabled={this.state.value === 'реакт'} > Submit </button>
      </form>
    )
  }
}


export default Element