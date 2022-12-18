import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import "./Slider.css"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Slide() {
  
  const [slider, setSlider] = React.useState(null);

 
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });


  const cards = [
    {
      title: 'Custom Workouts',
      text:
        "FB Plus",
      image:
        'https://cloudfront.fitnessblender.com/assets/img/fbplus/fingerprint.jpg',
    },
    {
        title: 'Custom Workouts',
        text:
          "FB Plus",
        image:
          'https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg',
      },
    {
      title: 'Custom Workouts',
      text:
        "FB Plus",
      image:
        'https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/67-guided-practice-to-embrace-vulnerability-96cb.jpg',
    },
    {
      title: 'Custom Workouts',
      text:
        "FB Plus",
      image:
        'https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/64-guided-meditation-for-grief-9028.jpg',
    },
   
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'full'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative"   marginLeft="40px" >
              <Stack
                spacing={6}
                
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="white">
                  {card.title} 
                </Heading>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="rgba(255,255,255,0.5)" mt={-10}>
                  {card.text} <Button bg={"green.400"}>ALL ACCESS</Button>
                </Heading>
                <Text color={"white"} p={3} border="1px solid #4296cb" w={"50%"} textAlign="center" className="text"> Join All Access Now</Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}