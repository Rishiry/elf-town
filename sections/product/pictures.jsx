import { Box, Center, Image, SimpleGrid, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import BounceWrapper from "components/bounceWrapper/bounceWrapper";
import { constructImageURL } from "lib/helper";
import { useState } from "react";

export default function Pictures({product}) {


    const display_image = constructImageURL(product.display_image.id);
    const additional_images =  product? product.additional_images.map(i => constructImageURL(i.directus_files_id)) : []

    const images = [display_image].concat(additional_images)

    const [currentImage,
        setCurrentImage] = useState(display_image);

    return (
       <Center width = {{base: "100vw", md: "60vw"}} backgroundColor = {
            useColorModeValue("gray.50", "gray.700")
        }
        roundedBottomLeft={"20px"}
        roundedBottomRight={{base: "20px", md: 0}}
    
        px = {
            '2.5vh'
        }
        pt = {{base:"15vh", md:0}}
        pb = {{base:"5vh", md:0}} > <VStack spacing={8}>
          <Image
                    src={currentImage}
                    h={{
                    base: "35vh",
                    md: "55vh"
                }}
                    alt="Product Image"
                    borderRadius="15px"/>
    
            <Stack direction="row" spacing="2.5vw" mx="auto">
    
                <SimpleGrid
                    columns={{
                    base: 4,
                    md: 4
                }}
                    spacing={{
                    base: "5vw",
                    md: "2.5vw"
                }}>
                    {images.map((e) => <BounceWrapper key={e}>
                        <Box
                            w={{
                            base: "20vw",
                            md: "7.5vw"
                        }}
                            h={{
                            base: "20vw",
                            md: "7.5vw"
                        }}>
                            <Image
                                src={e}
                                w="100%"
                                h="100%"
                                objectFit='cover'
                                borderRadius="15px"
                                cursor="pointer"
                                alt={'More'}
                                onClick={(e) => setCurrentImage(e.target.src)}/>
                        </Box>
                    </BounceWrapper>)}
    
                </SimpleGrid>
            </Stack>
    
        </VStack> </Center> 
    )
}