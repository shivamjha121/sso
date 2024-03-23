import express from 'express';
import signUp from './signUp.router'
import login from './login.router'
const router = express.Router();
const app= express();

router.use('/signUp', signUp)
router.use('/login', login)

export default router