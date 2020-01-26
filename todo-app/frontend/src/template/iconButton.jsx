import React from 'react'

export default props => {
    if(props.hide){
        return null
    } else {
        return (
            <button className={'btn btn-' + props.styles} onclick={props.onClick}>
                <i className={'fas fa-' + props.icon}></i>
            </button>
        )
    }
}