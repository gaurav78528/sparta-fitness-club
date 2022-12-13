import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = () => {
  return (
    <Box w={"30%"}>
        <Box>
            <Image w={"full"} src='https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-9687-fb-just-your-body-2-week-no-equipment-challenge-b0df.jpg' alt="fitness"/>
        </Box>
        <Box>
            <Text>2 WEEK CHALLENGE </Text>
            <Text>34 MIN/DAY</Text>

        </Box>
        <Box>
            <Text>FB Just Your Body: 2-Week No Equipment Challenge</Text>
        </Box>
        <Box>
            <Box>
            <Text>As Low As</Text>
            <Text>$7.99</Text>
            </Box>
            <Box>
                <Button>ADD TO BAG</Button>
            </Box>

        </Box>
    </Box>
  )
}

export default Card