import './tile.css';

function Tile(props) {
    function clickFn() {
        props.clickFunction(props.id);
    }
    let classes = `tile ${props.state}`;
    return (
        <div className={classes} onClick={clickFn}>
        </div>
    );
}

export default Tile;