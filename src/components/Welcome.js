import React from 'react'


export default function welcome(props) {
    return (
        <div>
            <div id="greet-msg">
                <h1>Hey...! {props.name} Welcome.</h1>
                <h2>Welcome to the college.</h2>
                <p>Assignment done by Abqari Abbas ({props.reg})</p>
            </div>
        </div>
    )
}
