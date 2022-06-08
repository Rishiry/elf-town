import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
  
const ChakraBounceWrapper = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    whileHover:{
        scale: 1.1
    },
    whileTap:{
    scale: 0.9
}
  });

export default ChakraBounceWrapper