export interface Client {
    name: string;
    nit: string;
    id?: string;
}

export interface ClientResponse {
    name: string;
    paternal: string;
    maternal: string;
    nit: string;
    id?: string;
}