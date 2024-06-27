import { Router } from 'express';

const prenotazioneRouter = Router()

import {
    create,
    deleteById,
    findAll,
    findById,
    getFreeTables,
    updateById
} from '../controllers/prenotazione.controller';

prenotazioneRouter.get('/tavolidisponibili', getFreeTables);
prenotazioneRouter.get('/', findAll);
prenotazioneRouter.get('/:id',findById);

prenotazioneRouter.post('/', create);

prenotazioneRouter.put('/:id', updateById);

prenotazioneRouter.delete('/:id', deleteById);

export default prenotazioneRouter;