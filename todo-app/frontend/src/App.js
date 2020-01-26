import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

import React from 'react';
import Todo from './todo/todo'
import About from './about/about'
import Menu from './template/menu'

export default props => (
  <div className='container'>
    <Menu />
    <Todo />
    <About />
  </div>
)
