import { Box } from '@chakra-ui/react'
import {motion} from 'framer-motion'

export default function BounceWrapper({children}) {

    return (
        <Box
        height={"100%"}
        width="100%"
        as={motion.div}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
            scale: 0.9
        }}>
            {children}
        </Box>
    )
}