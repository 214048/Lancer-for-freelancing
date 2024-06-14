import { Request, Response } from 'express';
import { addPost, removePost, getPosts, updatePost, Post } from '../models/postmodel';
import { createPostInDB } from '../models/postmodel';

export const createPost = async (req: Request, res: Response) => {
    const post: Post = req.body;
    try {
        await addPost(post);
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await removePost(id);
        res.status(200).json({ message: 'Post removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing post', error });
    }
};

export const listPosts = async (req: Request, res: Response) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error });
    }
};

export const modifyPost = async (req: Request, res: Response) => {
    const updatedPost: Post = req.body;
    try {
        await updatePost(updatedPost);
        res.status(200).json({ message: 'Post updated successfully', updatedPost });
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};
export const createUserPost = async (req: Request, res: Response) => {
    const { title, description, jobType, budget } = req.body;
    const userId = req.session.user?.id;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        await createPostInDB({
            title, description, jobType, budget, userId,
            id: 0,
            author: '',
            date: ''
        });
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};