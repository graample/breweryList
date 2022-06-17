import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GoogleMap from './GoogleMap.jsx';

export default function BreweryListItem(props) {
  var center;
  props.item.latitude
    ? center = [parseFloat(props.item.latitude), parseFloat(props.item.longitude)]
    : center = null
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.item.street ? props.item.street : ''} {props.item.city}, {props.item.state}, {props.item.postal_code}
          </Typography>
          {props.item.website_url
          ? <Button size="small" href={props.item.website_url} target="_blank">Website</Button>
          : <Typography sx={{ mb: 1.5 }} color="text.secondary">
          No website provided
          </Typography>}
          {center ? <GoogleMap center={center}/> : ''}
        </AccordionDetails>
      </Accordion>
    </>
  )
}