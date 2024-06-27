import { Request, Response } from 'express';
import Tavolo from '../db/models/tavolo';

export const findAll = async (req: Request, res: Response) => {
  try {
    const clienti = await Tavolo.findAll();
    res.status(200).json(clienti);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const findById = async (req: Request, res: Response) => {
  try {
    const tavolo = await Tavolo.findByPk(req.params.id);
    if (tavolo) {
      res.status(200).json(tavolo);
    } else {
      res.status(404).json({ message: 'Tavolo non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const create = async (req: Request, res: Response) => {
  try {
    const nuovoTavolo = await Tavolo.create(req.body);
    res.status(201).json(nuovoTavolo);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const [updated] = await Tavolo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTavolo = await Tavolo.findByPk(req.params.id);
      res.status(200).json(updatedTavolo);
    } else {
      res.status(404).json({ message: 'Tavolo non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deleted = await Tavolo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Tavolo non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};
/*
export const tavoloController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById
};
*/