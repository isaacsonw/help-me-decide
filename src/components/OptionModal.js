import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    ariaHideApp={false}
    onRequestClose={props.closeModal}
    closeTimeoutMS={400}
    className="modal"
  >
  <h2 className="modal__title">Selected Option</h2>
  <p className="modal__body">{props.selectedOption}</p>
  <button className="button" onClick={props.closeModal} >Okay</button>
  </Modal>
)

export default OptionModal