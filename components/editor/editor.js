import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.bubble.css';
import { Box } from '@chakra-ui/react';


export default function Editor() {
    const theme = 'bubble';
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],

          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'align': null}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
          ['image']
        ],
      };
  const { quill, quillRef } = useQuill({theme, modules});

  console.log(quill);    // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <Box style={{'z-index': '99'}} height={{'base': '50vh'}} width={{base: '70vw', lg: '30vw'}} border="1.5px dashed" borderColor={"gray.200"} rounded={"20px"}>
      <div style={{'z-index': '99999'}} ref={quillRef} />
    </Box>
  );
};