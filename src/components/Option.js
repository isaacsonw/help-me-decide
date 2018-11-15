import React from 'react'


const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.optionNumber}. {props.optionText}</p>
      <button
      className="button button--link"
        onClick={(e) =>{
          props.handleRemoveOption(props.optionText)
        }}
      >
      remove
      </button>
    </div>
  )



export default Option