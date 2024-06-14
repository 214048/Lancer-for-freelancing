import { Request, Response } from 'express';
import { getUserByUsername } from '../models/usermodel';

export const getUserProfile = async (req: Request, res: Response) => {
    const { username } = req.params;
    try {
        const user = await getUserByUsername(username);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
};
