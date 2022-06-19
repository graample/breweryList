import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

import GoogleMap from './GoogleMap.jsx';

export default function BreweryListItem(props) {
  var typeDescription;
  if (props.item.brewery_type === 'micro') {
    typeDescription = 'Most craft breweries. For example, Samual Adams is still considered a micro brewery.';
  } else if (props.item.brewery_type === 'nano') {
    typeDescription = 'An extremely small brewery which typically only distributes locally.';
  } else if (props.item.brewery_type === 'regional') {
    typeDescription = 'A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.';
  } else if (props.item.brewery_type === 'brewpub') {
    typeDescription = 'A beer-focused restaurant or restaurant/bar with a brewery on-premise.';
  } else if (props.item.brewery_type === 'large') {
    typeDescription = 'A very large brewery. Likely not for visitors. Ex. Miller-Coors.';
  } else if (props.item.brewery_type === 'planning') {
    typeDescription = 'A brewery in planning or not yet opened to the public.';
  } else if (props.item.brewery_type === 'bar') {
    typeDescription = 'A bar. No brewery equipment on premise.';
  } else if (props.item.brewery_type === 'contract') {
    typeDescription = 'A brewery that uses another brewery’s equipment.';
  } else if (props.item.brewery_type === 'proprietor') {
    typeDescription = 'Similar to contract brewing but refers more to a brewery incubator.';
  } else if (props.item.brewery_type === 'closed') {
    typeDescription = 'A location which has been closed.';
  }

  var center;
  props.item.latitude
    ? center = [parseFloat(props.item.latitude), parseFloat(props.item.longitude)]
    : center = null

  return (
    <>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{props.item.name}</Typography>
          <Tooltip title={typeDescription}>
            <Chip icon={<SportsBarIcon />} label={props.item.brewery_type} sx={{ ml: "auto" }}/>
          </Tooltip>
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