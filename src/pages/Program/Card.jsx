import { Flex } from '@chakra-ui/layout'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({src, week, min, des, price,key }) => {
  return (
    <Box w={"full"} border="1px solid black"   >
        <Box>
            <Image w={"full"} src={src} alt="fitness"/>
        </Box>
        <Flex justifyContent="space-around" p={2}>
            <Text>{week}</Text>
            <Text>{min}</Text>
        </Flex>
        <Box p={2}>
            <Text>{des}</Text>
        </Box>
        <Flex justifyContent="space-between" p={2}>
            <Box>
            <Text>As Low As</Text>
            <Text>$ {price}</Text>
            </Box>
            <Box>
                <Button>ADD TO BAG</Button>
            </Box>

        </Flex>
    </Box>
  )
}

export default Card