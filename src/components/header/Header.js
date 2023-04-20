import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Header.css";


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'bisque', height:'90vh'}} className='header'>
      <CardContent>
        <Typography sx={{ fontSize: '3rem',color:"white" }} color="text.primary" gutterBottom>
          Tasty & Delicious Food
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
  );
}