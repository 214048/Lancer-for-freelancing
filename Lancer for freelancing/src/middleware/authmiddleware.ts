import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) {
        return next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user && req.session.user.role === 'Admin') {
        return next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

