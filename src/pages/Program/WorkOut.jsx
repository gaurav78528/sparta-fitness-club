import React, {useEffect, useState} from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../store/workout/work.action'
import { Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'


const WorkOut = () => {
const [bata, setBata] = useState([])

  const products = useSelector((store) => store.prod.products);
  const dispatch = useDispatch();

 useEffect(() => {
 axios.get("http://localhost:8080/Products").then((d) => {
setBata(d.data)
 })
 }, [])

  return (
    <div>
      <h1>Workout</h1>
      <Grid  templateColumns='repeat(3, 1fr)'>

     
      {
        bata.map((pro) => (
          <GridItem >
           <Card 
           key={pro.id}
           min={pro.time}
           price={pro.price}
           des={pro.desc}
           src={pro.img}
           week={pro.week}
           />
             
          </GridItem>
           
        ))
      }
        </Grid>
    </div>
  )
}

export default WorkOut