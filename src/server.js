require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import configs from './config/configViewEngine';
import initWebRoute from './route/web';



const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//config view engine, static file
configs(app);

//connect web route
initWebRoute(app);


app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
});