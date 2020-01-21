import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ListaAprovados from "./componentes/ComponenteComFuncao";
// import Pai from './componentes/Pai'
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from "./componentes/Contador";
import Hook from "./componentes/Hook";

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
        {/* <Pai /> */}
        {/* <ListaAprovados /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Mariana" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/*<MultiElementos />*/}
        {/*<CompA valor="Olá eu sou o A!" />
        <B valor="B na área!" />*/}
        {/*<PrimeiroComponente valor="Bom dia!" /> */}
    </div>
    , elemento)

// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(jsx, elemento)
