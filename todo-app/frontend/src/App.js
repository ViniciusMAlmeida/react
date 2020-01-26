import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

import React from 'react'
import Menu from './template/menu'
import Routes from './routes'

export default props => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)
