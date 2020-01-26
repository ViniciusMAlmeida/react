import React from 'react'
import If from '../utils/if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.styles} onclick={props.onClick}>
            <i className={'fas fa-' + props.icon}></i>
        </button>
    </If>
)