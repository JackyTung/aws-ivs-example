import React, { useState, useEffect } from 'react'
import Feed from './Feed';

import loadIVS from './loadIVS';


const AmazonIVSWorkaround = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        loadIVS(() => {
            setLoaded(true)
        })
    }, [])

    if (!loaded) {
        return <div>Wait loading</div>
    }
   
    return (
        <Feed/>
    )
    
}

export default AmazonIVSWorkaround;