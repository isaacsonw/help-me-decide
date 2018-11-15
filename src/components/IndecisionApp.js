import React, { Component } from 'react'
import Action from './Action'
import Options from './Options'
import Header from './Header'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class IndcisionApp extends Component {

    state = {
      options: [],
      selectedOption: undefined
    }


  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if(options){
        this.setState(() => ({options}))
      }
    } catch (error) {
      //Do nothing
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }

  }

  handleAddOption = (text) => {
    if(!text){
      return 'Please enter valid text'
    }else if(this.state.options.includes(text)){
      return 'Option already exist'
    }
    this.setState((prevState) => ({options: prevState.options.concat(text)}))
  }

  handleRemoveAll = () => {
    this.setState(() => ({ options: []}))
  }

  handleChoiceOption = () => {
    if(this.state.options.length !== 0){
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      this.setState(() => ({ selectedOption: option}))
    }
  }

  handleRemoveOption = (optionText) => {
    this.setState((prevState) => ({
     options: prevState.options.filter((option) => optionText !== option)
    }))
  }

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'
    return(
      <div>
      <Header subtitle={subtitle}/>
      <div className="container">
        <Action hasOptions={this.state.options.length > 0} handleChoiceOption={this.handleChoiceOption}/>
        <div className="widget">
        <Options
          handleRemoveAll={this.handleRemoveAll}
          options={this.state.options}
          handleRemoveOption={this.handleRemoveOption}
          />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
      </div>
      <OptionModal closeModal={this.closeModal} selectedOption={this.state.selectedOption} />
      </div>
    )
  }
}