import React from 'react'
import HeaderGroupManager from './HeaderGroupManager'
import Body from './Body'

function GroupManager() {
    return (
        <div className="container mx-auto" >
            <div>
                <HeaderGroupManager />
            </div>
            <div>
                <Body />
            </div>
        </div>
    )
}

export default GroupManager