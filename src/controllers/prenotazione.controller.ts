import { Request, Response } from 'express';
import Cliente from '../db/models/cliente';
import Prenotazione from '../db/models/prenotazione';
import Tavolo from '../db/models/tavolo';

export const findAll = async (req: Request, res: Response) => {
  try {
    const prenotazioni = await Prenotazione.findAll({include: [Tavolo, Cliente]});
    res.status(200).json(prenotazioni);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const findById = async (req: Request, res: Response) => {
  try {
    const prenotazione = await Prenotazione.findByPk(req.params.id, {include: [Tavolo, Cliente]});
    if (prenotazione) {
      res.status(200).json(prenotazione);
    } else {
      res.status(404).json({ message: 'Prenotazione non trovata' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const [updated] = await Prenotazione.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPrenotazione = await Prenotazione.findByPk(req.params.id);
      res.status(200).json(updatedPrenotazione);
    } else {
      res.status(404).json({ message: 'Prenotazione non trovata' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const deleted = await Prenotazione.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Prenotazione non trovata' });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};
/*
export const prenotazioneController = {
  findAll,
  findById,
  create,
  updateById,
  deleteById
};
*/

//algoritmo check tavoli liberi
export const getFreeTables = async (req: Request, res: Response) => {
  try {
    const { dataOra } = req.query;

    if (!dataOra) {
      return res.status(400).json({ message: "Il parametro dataOra è richiesto" });
    }

    const freeTables = await Tavolo.findAll({
      include: [
        {
          model: Prenotazione,
          required: false,
          where: {
            dataOra: dataOra
          }
        }
      ],
      where: {
        '$Prenotaziones.id$': null // Questo filtra i tavoli che non hanno prenotazioni alla data e ora specificata
      }
    });

    return res.status(200).json(freeTables);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

//algoritmo check disponibilità tavolo
export const create = async (req: Request, res: Response) => {
  try {
    const { tavoloId, dataOra, clienteId } = req.body;
/*
    if (!tavoloId || !dataOra || !clienteId) {
      return res.status(400).json({ message: "I parametri tavoloId, dataOra sono richiesti" });
    }

    const overlappingReservations = await Prenotazione.findAll({
      where: {
        tavoloId: tavoloId,
        dataOra: dataOra
      }
    });

    if (overlappingReservations.length>0) {
      return res.status(400).json({ message: "Il tavolo è già prenotato per l'orario specificato" });
    }

*/
    const newReservation = await Prenotazione.create({
      tavoloId,
      clienteId,
      dataOra
    });

    return res.status(201).json(newReservation);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};
