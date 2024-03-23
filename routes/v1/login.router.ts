import express from 'express';
import login from '../../controller/login.controller'
const router = express.Router();



router.post('/', login);


export default router

