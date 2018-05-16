import express from 'express';
import bodyParser from 'body-parser';
import routes from './unicorn-names/routes';

const app = express();
const port = process.env.PORT || 7000;

app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

console.log('unicorn name generator RESTful API server started at http://localhost:' + port);