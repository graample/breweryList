DROP TABLE IF EXISTS brews;

CREATE TABLE IF NOT EXISTS brews (
  uid SERIAL PRIMARY KEY,
  id varchar(255),
  name varchar(255),
  brewery_type varchar(255),
  street varchar(255),
  address_2 varchar(255),
  address_3 varchar(255),
  city varchar(255),
  state varchar(255),
  county_province varchar(255),
  postal_code INT,
  country varchar(255),
  longitude DECIMAL,
  latitude DECIMAL,
  phone INT,
  website_url varchar(255),
  updated_at BIGINT,
  created_at BIGINT
);