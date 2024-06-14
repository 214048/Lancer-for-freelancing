import { Request, Response } from 'express';
import { getUserByUsername } from '../models/usermodel';
import { User } from './../models/usermodel';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsername(username);
        if (user && user.password === password) { // Simplified password check for example
            req.session.user = user;
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

