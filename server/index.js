require('dotenv').config();
const express = require('express');
const db = require('./db/postgres.js');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// test
app.get('/test', (req, res) => {
  res.send('test success!');
});

app.get('/breweries', (req, res) => {
  console.log(req.query)
  db.query(`SELECT json_agg(
    json_build_object(
      'id', b.id,
      'name', b.name,
      'brewery_type', b.brewery_type,
      'street', b.street,
      'address_2', b.address_2,
      'address_3', b.address_3,
      'city', b.city,
      'state', b.state,
      'county_province', b.county_province,
      'postal_code', b.postal_code,
      'country', b.country,
      'longitude', b.longitude,
      'latitude', b.latitude,
      'phone', b.phone,
      'website_url', b.website_url,
      'updated_at', b.updated_at,
      'created_at', b.created_at
    )
  ) FROM brews b WHERE b.city = ${req.query.by_city}`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('breweries get!');
    if (result) {
      console.log('satisfactory query made!')
      res.send(result.rows[0].json_agg);
    }
  });
});

app.listen(port, () => {
  console.log('listening on:', port);
});