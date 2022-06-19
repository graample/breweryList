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

export default function BreweryListItem(props) {
  var typeDescription;
  switch (props.item.brewery_type) {
    case 'micro':
      typeDescription = 'Most craft breweries. For example, Samual Adams is still considered a micro brewery.';
      break;
    case 'nano':
      typeDescription = 'An extremely small brewery which typically only distributes locally.';
      break;
    case 'regional':
      typeDescription = `A regional location of an expanded brewery. Ex. Sierra Nevada's Asheville, NC location.`;
      break;
    case 'brewpub':
      typeDescription = 'A beer-focused restaurant or restaurant/bar with a brewery on-premise.';
      break;
    case 'large':
      typeDescription = 'A very large brewery. Likely not for visitors. Ex. Miller-Coors.';
      break;
    case 'planning':
      typeDescription = 'A brewery in planning or not yet opened to the public.';
      break;
    case 'bar':
      typeDescription = 'A bar. No brewery equipment on premise.';
      break;
    case 'contract':
      typeDescription = `A brewery that uses another brewery's equipment.`;
      break;
    case 'proprietor':
      typeDescription = 'Similar to contract brewing but refers more to a brewery incubator.';
      break;
    case 'closed':
      typeDescription = 'A location which has been closed.';
      break;
  }

  var center;
  props.item.latitude
    ? center = [parseFloat(props.item.latitude), parseFloat(props.item.longitude)]
    : center = props.item.street

  return (
    <>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ mt: 0.5 }}>{props.item.name}</Typography>
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
          {center
          ? <div className="google-map-code">
            {console.log(process.env.MAPS)}
            <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS}&q=${center}`} width="100%" height="450" style={{border:0}} aria-hidden="false"></iframe>
          </div>
          : ''}
        </AccordionDetails>
      </Accordion>
    </>
  )
}