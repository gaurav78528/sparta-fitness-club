import { Box, Button, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
 
import { FaBeer } from 'react-icons/fa'
const Card = () => {
  return (
    <Box w={"33%"} border="1px solid black" m={"auto"}>
        <Box>
            <Image w={"full"} src='https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-9687-fb-just-your-body-2-week-no-equipment-challenge-b0df.jpg' alt="fitness"/>
        </Box>
        <Flex p={4} justifyContent={"space-around"} color="blue.400">
            <Text>2 WEEK CHALLENGE </Text>
            <Text>34 MIN/DAY</Text>

        </Flex>
        <Box p={4}>
            <Text fontWeight={"bold"} fontSize="25px">FB Just Your Body: 2-Week No Equipment Challenge</Text>
        </Box>
        <Flex justifyContent={"space-between"} p={4}>
            <Box>
            <Text>As Low As</Text>
            <Text fontWeight={"bold"}>$7.99</Text>
            </Box>
            <Box>
                <Button><FaBeer /> ADD TO BAG</Button>
            </Box>

        </Flex>
    </Box>
  )
}
 
export default Card