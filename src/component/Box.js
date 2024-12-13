import React from 'react'

const Box = (props) => {
    // console.log("data", props)
    let result;
    // computer 일때 user와 결과값 반대로 
    if (props.title === "Computer" && props.result !== "Tie" && props.result !== "") {
        result = props.result === "Win" ? "Lose" : "Win"
    } else {
        result = props.result;
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2>{props.item?.name || "Waiting..."}</h2>
            <img className='item-img' src={props.item && props.item.img} alt=''></img>
            <span className="result-text">{result}</span>
        </div>
    )
}

export default Box
