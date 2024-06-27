import { Request, Response } from 'express';
import Cliente from '../db/models/cliente';

export const findAll = async (req: Request, res: Response) => {
  try {
    const clienti = await Cliente.findAll();
    res.status(200).json(clienti);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const findById = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const create = async (req: Request, res: Response) => {
  try {
    const nuovoCliente = await Cliente.create(req.body);
    res.status(201).json(nuovoCliente);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const [updated] = await Cliente.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCliente = await Cliente.findByPk(req.params.id);
      res.status(200).json(updatedCliente);
    } else {
      res.status(404).json({ message: 'Cliente non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deleted = await Cliente.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Cliente non trovato' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};
/*
export const clienteController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById
};
*/