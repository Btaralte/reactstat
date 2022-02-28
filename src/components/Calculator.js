import React,{useState} from "react";
import ztable from "ztable";
import Card from "./UI/Card";
import classes from "./Calculator.module.css";
const Phi = (x) => {
    let x1 = Math.trunc(x*100)/100;
    if(x1==x) return ztable(x);    
    let x2 = x1+0.01
    let p1 = ztable(x1);
    let p2 = ztable(x2);
    let p = p2 + ((x-x2)*(p1-p2))/(x1-x2);
    return p;
}

const Calculator = () => {
    const [mean,setMean] = useState(0);
    const [sd,setSd] = useState(1);
    const [x,setX] = useState(0);
    const [result,setResult] = useState(0.5);

    const meanHandler = (event) => {
        setMean(parseFloat(event.target.value));
    }
    const sdHandler = event => {
        setSd(parseFloat(event.target.value));
    }
    const xHandler = event => {
        setX(parseFloat(event.target.value));
    }
    const calculateProb = () => {
        let trx = (x-mean)/sd;
        setResult(Phi(trx));
    }

    
    return(
        <Card>
            <div className={classes.calculator}>
                <label>Mean:</label>
                <input onChange={meanHandler} defaultValue='0'></input>
                <label>SD:</label>
                <input  onChange={sdHandler} defaultValue='1'></input>
                <label>x:</label>
                <input onChange={xHandler} defaultValue='0'></input>
                <br></br>
                <button onClick={calculateProb}>{'P(X <= x)'}</button>
                <p>Result : {result}</p>
            </div>
        </Card>
    );
}
export default Calculator;