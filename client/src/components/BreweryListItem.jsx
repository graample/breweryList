import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GoogleMap from './GoogleMap.jsx';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BreweryListItem(props) {
  var center;
  {props.item.latitude
    ? center = [parseFloat(props.item.latitude), parseFloat(props.item.longitude)]
    : center = null}
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.item.street ? props.item.street : ''} {props.item.city}, {props.item.state}, {props.item.postal_code}
          </Typography>
        </CardContent>
        <CardActions>
          {props.item.website_url
          ? <Button size="small" href={props.item.website_url} target="_blank">Website</Button>
          : <Typography sx={{ mb: 1.5 }} color="text.secondary">
          No website provided
          </Typography>}
        </CardActions>
        {center ? <GoogleMap center={center}/> : ''}
      </Card>
    </>
  )
}