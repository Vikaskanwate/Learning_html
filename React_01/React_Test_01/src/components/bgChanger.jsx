import React, { useState } from 'react'
import "../App.css"
const bgChanger = () => {
    const [bgColor, setbgColor] = useState('lightblue')

    function randomColors() {
        const colors = ["red", "yellow", "purple", "orange", "cyan"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    const [copied ,setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(bgColor);
        // alert(`Copied: ${bgColor}`);
        setCopied(true)
        setTimeout(()=>setCopied(false),1500)
    }


    return (
        <div className='app' style={{ backgroundColor: bgColor }} >
            <div className='container'>
                <h1 className='title'>Pick a background color</h1>
                <input type="color"
                    value={bgColor}
                    onChange={(e) =>
                        setbgColor(e.target.value)}
                    className='color-input'
                />
                <p className='color-text'>Selected Color: {bgColor}</p>
                <div className='btn'>
                    <button className='reset-btn' onClick={() => setbgColor("#ffffff")}>reset</button>
                    <button className='reset-btn copy' onClick={() => { (copyToClipboard()) }}>copy</button>
                    {copied && <p className='copied'>copied</p>}
                </div>
            </div>
            {/* <button onClick={()=>{setbgColor(randomColors())}}>bgColor</button> */}
        </div>
    )
}


export default bgChanger