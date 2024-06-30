import { Request, Response } from 'express';
import Proposal from '../models/proposalmodel';

export const addProposal = async (req: Request, res: Response): Promise<void> => {
  try {
    const { author, amount, description } = req.body;
    const newProposal = await Proposal.create({ author, amount, description });
    res.status(201).json(newProposal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add proposal' });
  }
};