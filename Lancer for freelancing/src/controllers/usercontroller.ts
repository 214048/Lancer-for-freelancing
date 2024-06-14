import { Request, Response } from 'express';
import { addUser, removeUser, getUsers, User } from '../models/usermodel';

export const registerUser = async (req: Request, res: Response) => {
    const user: User = req.body;
    try {
        await addUser(user);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { username } = req.body;
    try {
        await removeUser(username);
        res.status(200).json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing user', error });
    }
};

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};
