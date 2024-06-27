import { Router } from 'express';

const clienteRouter = Router()

import {
    create,
    deleteById,
    findAll,
    findById,
    updateById
} from '../controllers/cliente.controller';


clienteRouter.get('/', findAll);
clienteRouter.get('/:id', findById);

clienteRouter.post('/', create);

clienteRouter.put('/:id',updateById);

clienteRouter.delete('/:id', deleteById);

export default clienteRouter;