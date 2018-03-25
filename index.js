import express from 'express';
import bodyParser from 'body-parser';

import routes from './server/routes';

const { indexRoute, businessRoute, userRoute } = routes;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, error => {
  if (error) {
    return console.log(error);
  }

  console.log(`server started on port ${PORT}`);
});
