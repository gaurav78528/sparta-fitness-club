import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
  


  const getData = (url) => {
    return fetch(url)
    .then((res) => res.json());
  }


  export default function PilotSingle() {
   
   const {id} = useParams()
   const [state, setState] = useState({})

useEffect(() => {
    getData(`https://fitness-handler.vercel.app/Pilot/${id}`).then((res) => 
   setState(res)
   //console.log(res)
    )
},[id])
// const {img} = state
//    console.log(state)

    return (
      <Container maxW={'7xl'}>
        
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={state.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                 {state.desc}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
               $ {state.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
                 <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('green.500', 'yellow.300')}
                  fontWeight={'500'}

                  textTransform={'uppercase'}
                  mb={'4'}>
                  Pregnancy Series: Second Trimester
                </Text>
              <VStack spacing={{ base: 4, sm: 6 }}>
             
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                   {state.over}
                </Text>
                 
              </VStack>

              <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('green.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 Approach and Difficulty Level
                </Text>
              <VStack spacing={{ base: 4, sm: 6 }}>
              
                <Text fontSize={'lg'}>
                   {state.difficult}
                </Text>

                
              </VStack>
              
             
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('green.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  PROGRAM DETAILS
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Length:
                    </Text>{' '}
                     {state.week}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Avg. Duration:
                    </Text>{' '}
                    {state.time}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Equipment:
                    </Text>{' '}
                     {state.equipment}
                  </ListItem>
                  
                  
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Training Type:
                    </Text>{' '}
                    Strength Training
                  </ListItem>
                  
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }