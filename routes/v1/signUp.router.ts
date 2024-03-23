import express from 'express';
import signUp from '../../controller/signUp.controller'
const router = express.Router();
const app= express();


router.post('/', signUp);
router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default router
