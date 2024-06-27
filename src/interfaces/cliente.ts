export interface ClienteAttributes {
    id: number;
    nome: string;
    cognome: string;
    telefono: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}