export interface PrenotazioneAttributes {
    id: number;
    tavoloId: number;
    clienteId: number;
    dataOra: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}