import './playground.css';

import Tile from "./Tile";

function PlayGround(props) {
    
    return (
        <div className="playGround">
            {
                props.fields.map((element, index) => {
                    return (
                        <Tile key={index} state={element} id={index} clickFunction={props.btnClickFn}/>
                    )
                })
            }
        </div>
    );
}

export default PlayGround;