import React from 'react'

const Content = ({children}) => {
    return (
        <div className="container mx-auto md:grid grid-cols-2 auto-rows-auto auto-cols-auto">
            {children}
        </div>
    )
}

export default Content
