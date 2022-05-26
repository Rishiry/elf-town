import {motion} from 'framer-motion'
import {useState} from 'react'

export default function BounceWrapper({children}) {

    return (
        <motion.div
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
            scale: 0.9
        }}>
            {children}
        </motion.div>
    )
}