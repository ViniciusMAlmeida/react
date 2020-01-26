import React from 'react'
import linkAtivo from '../utils/linkAtivo'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <a className="navbar-brand" href="#/">
            <i className='far fa-calendar-check'></i> TodoApp
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className={linkAtivo('/todos')}>
                    <a className="nav-link" href="/todos">Todos <span className="sr-only">(current)</span></a>
                </li>
                <li className={linkAtivo('/about')}>
                    <a className="nav-link" href="/about">Sobre</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
        </div>
    </nav>
)