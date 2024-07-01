import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Proposal } from '../models/proposalmodel';

export const createProposal = async (req: Request, res: Response) => {
  const { freelancerId, description, amount, status } = req.body;

  try {
    const proposal = new Proposal();
    proposal.freelancerId = freelancerId;
    proposal.description = description;
    proposal.amount = amount;
    proposal.status = status;

    const proposalRepository = getRepository(Proposal);
    await proposalRepository.save(proposal);

    res.status(201).send(proposal);
  } catch (error) {
    res.status(400).send(error);
  }
};
