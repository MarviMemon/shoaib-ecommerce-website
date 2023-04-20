import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import item1 from "../../itemImages/item1.jpeg";
import item2 from "../../itemImages/item2.jpg";
import item3 from "../../itemImages/item3.jpg";
import item4 from "../../itemImages/item4.jpg";
import item5 from "../../itemImages/item5.jpg";
import item6 from "../../itemImages/item6.avif";

export default function MediaCard() {
    const items = [
    {id:1, image: item1, title:"Lizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'},
    {id:2, image: item2, title:"Lizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'},
    {id:3, image: item3, title:"Wizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'},
    {id:4, image: item4, title:"Mizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'},
    {id:5, image: item5, title:"Kizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'},
    {id:6, image: item6, title:"Aizard", description:"LIZARDS ARE A WIDESPREAD GROUP OF SQUAMATE REPTILES, WITH OVER 6,000 SPECIES, RANGING ACROSS ALL CONTINENTS EXCEPT ANTARCTICA", price: '$29'}
]
  return (
    <>
    <Card sx={{ maxWidth: 345, marginTop:'30px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
         $29
        </Typography>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}