import exptress from "express";
import usersData from "../model/users.model";
import { url } from "../index";
const router = exptress.Router();
const app= exptress();

async function loginUser (req: any, res: any) {
    const { email, password } = req.body;

    console.log(url)
    const user = await usersData.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found", status: 400 });
    }
    if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password", status: 400 });
    }
    res.status(200).json({ redirect: url, status: 200, user });
    
    
 
}


export default loginUser;