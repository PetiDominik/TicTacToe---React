import React, {useState} from 'react';
import './App.css';
import PlayGround from './component/PlayGround';
import Fields from './model/Fields';

const FIELDS = new Fields();

function App() {
    
    let [fieldState, setFieldState] = useState(FIELDS.getAllValue());

    function changeState(id) {
        console.log(id, "steps:", FIELDS.getSteps());
        console.log("előtte:", FIELDS.getAllValue());
        FIELDS.setValueById(id);
        /* console.log(fields.getAllValue()); */
        setFieldState(FIELDS.getAllValue());
    }
    return (
        <div className="App">
            <PlayGround fields={fieldState} btnClickFn={changeState}/>
        </div>
    );
}

export default App;
