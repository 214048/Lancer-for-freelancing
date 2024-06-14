import pool from '../db';

export interface Post {
    userId: any;
    id: number;
    title: string;
    description: string;
    jobType: 'Hourly' | 'Fixed';
    budget: number;
    author: string;
    date: string;
}

export const addPost = async (post: Post) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'INSERT INTO posts (title, description, job_type, budget, author, date) VALUES (?, ?, ?, ?, ?, ?)';
        await connection.query(sql, [post.title, post.description, post.jobType, post.budget, post.author, post.date]);
    } finally {
        connection.release();
    }
};

export const removePost = async (postId: number) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'DELETE FROM posts WHERE id = ?';
        await connection.query(sql, [postId]);
    } finally {
        connection.release();
    }
};

export const getPosts = async (): Promise<Post[]> => {
    const connection = await pool.getConnection();
    try {
        const sql = 'SELECT * FROM posts';
        const [rows] = await connection.query(sql);
        return rows as Post[];
    } finally {
        connection.release();
    }
};

export const updatePost = async (updatedPost: Post) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'UPDATE posts SET title = ?, description = ?, job_type = ?, budget = ?, author = ?, date = ? WHERE id = ?';
        await connection.query(sql, [updatedPost.title, updatedPost.description, updatedPost.jobType, updatedPost.budget, updatedPost.author, updatedPost.date, updatedPost.id]);
    } finally {
        connection.release();
    }
};

export const createPostInDB = async (post: Post) => {
    const connection = await pool.getConnection();
    try {
        const sql = 'INSERT INTO posts (title, description, jobType, budget, userId) VALUES (?, ?, ?, ?, ?)';
        await connection.query(sql, [post.title, post.description, post.jobType, post.budget, post.userId]);
    } finally {
        connection.release();
    }
};
