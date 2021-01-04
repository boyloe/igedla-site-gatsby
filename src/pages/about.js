import React from 'react'
import IgedlaVideo from '../assets/Igedla-final.mp4'

export const about = () => {
    return (
        <div>
            <h1>What is Igedla?</h1>
            <video controls>
                <source src={IgedlaVideo} type="video/mp4" />
            </video>
        </div>
    )
}
