import usersData from "../model/users.model";



async function signUp(req: any, res: any) {
    const { name, phoneNo, email, password } = req.body;
    const user = await usersData.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists", status: 400 });
        
    }
    const newUser = new usersData({ name, phoneNo, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
}


export default signUp