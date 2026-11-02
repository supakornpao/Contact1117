import User from '../models/User.js'

export async function loginUser(req,res){
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'User not found' });
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        res.status(200).json({username: user.username})
    }catch(error){
        res.status(500).json(error, "login error");
    }
}