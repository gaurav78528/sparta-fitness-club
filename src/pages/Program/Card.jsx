import { Flex } from '@chakra-ui/layout'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineShoppingBag } from 'react-icons/md'
import "./Plans.css"

const Card = ({src, week, min, des, price,key }) => {
  return (
    <Box w={"full"}    className="hov" >
        <Box>
            <Image w={"full"} src={src} alt="fitness"/>
        </Box>
        <Flex  p={2}>
            <Text>{week} - {min}</Text>
            
        </Flex>
        <Box p={2} fontWeight="bold" fontSize={"20px"} h={150}>
            <Text>{des}</Text>
        </Box>
        <Flex justifyContent="space-between" p={2} marginBottom={"20px"} >
            <Box>
            <Text>As Low As</Text>
            <Text fontWeight="bold">$ {price}</Text>
            </Box>
            <Box>
                {/* //testing */}
                <Button gap={2} bg={"blue.300"} color={"white"}><MdOutlineShoppingBag fontSize={"25px"}/>ADD TO BAG</Button>
            </Box>

        </Flex>
    </Box>
  )
}

export default Card