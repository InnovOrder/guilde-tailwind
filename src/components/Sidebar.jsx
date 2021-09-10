import React from 'react'
import SidebarLink from './SidebarLink'

const Sidebar = () => {

    const titles = ["azerty", "qsdfgh", "wxcvbn"]
    return (
        <div>
            {titles.map(title => (
                <SidebarLink title={title}/>
            ))}
        </div>
    )
}

export default Sidebar
