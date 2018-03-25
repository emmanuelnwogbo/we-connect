import express from 'express';
const indexRoute = express.Router();

import businessRoute from './business';
import userRoute from './user';

export default {
  indexRoute,
  businessRoute,
  userRoute,
};
