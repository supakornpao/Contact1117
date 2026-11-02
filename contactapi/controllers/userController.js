import User from '../models/User.js'

export async function loginUser(req,res){
    const { username, password } = req.body;
    if(!username || !password)
        return res.status(400).json({error: "missing field"})
    const user = await User.findOne({ username });
    if(!user)
        return res.status(401).json({error: "Wrong username or password"});
    const isMatch = await user.comparePassword(password);
    if(!isMatch)
        return res.status(401).json({error: "Wrong username or password"});
    res.status(200).json({username: user.username})
}