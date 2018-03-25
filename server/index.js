import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const { indexRoute, businessRoute, userRoute } = routes;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', indexRoute);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/business', businessRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, error => {
  if (error) {
    return console.log(error);
  }

  console.log(`server started on port ${PORT}`);
});
