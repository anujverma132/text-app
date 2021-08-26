import React from 'react'

export default function Navbar(props) {
    return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Text Modifier</a>
                
                    <div className="form-check form-switch ">
                    <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
                    </div>
                </div>
            </nav>
    );
}
