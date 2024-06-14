import pool from '../db';

export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: 'Client' | 'Freelancer';
    profilePicture: string;
}

export const addUser = async (user: User) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'INSERT INTO users (username, password, first_name, last_name, email, phone_number, role, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        await connection.query(sql, [user.username, user.password, user.firstName, user.lastName, user.email, user.phoneNumber, user.role, user.profilePicture]);
    } finally {
        connection.release();
    }
};

export const removeUser = async (username: string) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'DELETE FROM users WHERE username = ?';
        await connection.query(sql, [username]);
    } finally {
        connection.release();
    }
};

export const getUsers = async (): Promise<User[]> => {
    const connection = await pool.getConnection();
    try {
        const sql = 'SELECT * FROM users';
        const [rows] = await connection.query(sql);
        return rows as User[];
    } finally {
        connection.release();
    }
};
export const getUserByUsername = async (username: string): Promise<User | null> => {
    const connection = await pool.getConnection();
    try {
        const sql = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await connection.query(sql, [username]);
        const users = rows as User[];
        return users.length ? users[0] : null;
    } finally {
        connection.release();
    }
};
