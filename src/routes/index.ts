import { Router } from 'express';
import clienteRouter from './cliente.routes';
import prenotazioneRouter from './prenotazione.routes';
import tavoloRouter from './tavolo.routes';

const router = Router()

router.use('/tavolo.routes', tavoloRouter);
router.use('/cliente.routes', clienteRouter);
router.use('/prenotazione.routes', prenotazioneRouter);


export default router;