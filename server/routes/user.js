import express from 'express';

import Controllers from '../controllers';

const router = express.Router();
const { UserController } = Controllers;
const { signUp } = UserController;

router.post('/signup', signUp);

export default router;
