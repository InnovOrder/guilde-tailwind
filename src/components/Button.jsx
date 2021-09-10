import React from 'react'

const Button = () => {
    return (
        <div>
            <button className="bg-purple-300 active:bg-green-300 hover:bg-purple-500 shadow-2xl rounded-lg mx-auto mt-9 py-4 px-8 flex">
                <h1 className="animate-spin mx-2">🦄</h1>
                <h6>I AM A BUTTON</h6>
                <h1 className="animate-spin mx-2">🦄</h1>
                </button>
        </div>
    )
}

export default Button
