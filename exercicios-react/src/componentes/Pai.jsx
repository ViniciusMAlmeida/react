import React from "react";
import Filho from './Filho'

export default props => {
    const notificarSaidadoFilho =
        lugar => alert(`Liberado para ${lugar}`)
    return (
        <div>
            <Filho notificar={notificarSaidadoFilho} />
        </div>
    )
}
