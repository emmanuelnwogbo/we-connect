import express from 'express';
const router = express.Router();
const indexRoute = router;

import businessRoute from './business';
import userRoute from './user';

router.get('/', (req, res, next) => {
  res.send('hello index');
});

export default {
  indexRoute,
  businessRoute,
  userRoute,
};
