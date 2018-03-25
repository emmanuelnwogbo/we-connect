import express from 'express';

import businessRoute from './business';
import userRoute from './user';

const router = express.Router();
const indexRoute = router;

router.get('/', (req, res) => {
  res.send('hello index');
});

export default {
  indexRoute,
  businessRoute,
  userRoute,
};
