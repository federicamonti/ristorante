import { Router } from 'express';

const tavoloRouter = Router()

import {
    create,
    deleteById,
    findAll,
    findById,
    updateById
} from '../controllers/tavolo.controller';


tavoloRouter.get('/all', findAll);
tavoloRouter.get('/:id', findById);

tavoloRouter.post('/', create);

tavoloRouter.put('/:id', updateById);

tavoloRouter.delete('/:id', deleteById);

export default tavoloRouter;