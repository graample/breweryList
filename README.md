# breweryList

A project formed as a week-long coding challenge for RSM powered by the OpenBreweryDB API.

Allows searches to be made for breweries listed in the US, queried by city. Type in the name of a city in the United States, and it'll give you a list of breweries in that city (or cities). The list uses flex styling, so it doesn't really matter how wide the browser is, the list will adapt.. and overcome. (The intended minimum width for the page is 435px so don't get too carried away.)

Hover over the brewery type, and it'll tell you a little more about that brewery type.

Click on a brewery and it'll give you an address and a map location for the given address. If the brewery has a website, you can click the link and it'll open in a new tab. If there is no longitude/latitude given for a particular brewery, the map will automatically switch to whereever the address points to.

There is a toggle for a custom database of breweries that can be referenced, but for now it only has its seed values (search for "city" and... you'll see what I mean). Will add a way to add more custom breweries.


# How to set up

- Specify your API key and local variables in the .env file
- `npm install`
- `npm start`
- Navigate to your server/port
- Crack open a cold one ;)


# Technologies used

- React
- MaterialUI
- Webpack/Babel for transpiling
- Node/Express
- PostgreSQL


# Future considerations

- Mobile optimization
- Implement some sort of pagination system.
- Make my own custom funny icons to add a personal touch.
- Actually, funny pictures would be cool too.
- Take screenshots of the breweries and mint them to the blockchain (???)
