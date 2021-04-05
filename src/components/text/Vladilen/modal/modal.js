import React from 'react'
import s from './modal.module.css'

export default class Modal extends React.Component {

    state={
        isOpen:false
    }

    clickModalOpen(){
        this.setState({isOpen:true})
    }
    clickModalClose(){
        this.setState({isOpen:false})
    }

    

    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.clickModalOpen()}>open module</button>

                {this.state.isOpen && (<div className={s.modal}>
                    <div className={s.modal_body}>
                        <h1>modal title</h1>
                        <p>I am awesome modal!</p>
                        <button onClick={()=> this.clickModalClose()}>close modal</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}