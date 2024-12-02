import { Client, ClientResponse } from "../interfaces/client.interface";

export function mapClientResponsetoClientArray(clientResponse: ClientResponse[]): Client[] {
  let newClient: Client[] = []
  clientResponse.forEach((client)=>{
    newClient.push(mapClientResponsetoClient(client))
  })
  return newClient;
}

export function mapClientToClientResponseArray(client: Client[]): ClientResponse[] {
  let newClient: ClientResponse[] = []
  client.forEach((client)=>{
    newClient.push(mapClientToClientResponse(client))
  })
  return newClient;
}

export function mapClientResponsetoClient(
  clientResponse: ClientResponse
): Client {
  return {
    name: `${clientResponse.name} ${clientResponse.maternal} ${clientResponse.paternal}`,
    nit: clientResponse.nit,
  };
}

export function mapClientToClientResponse(client: Client): ClientResponse {
  return {
    paternal: getSurnamePaternal(client.name),
    maternal: getSurnameMaternal(client.name),
    name: getName(client.name),
    nit: client.nit,
    id: client.id
  };
}

export function getSurnamePaternal(fullName: string): string {
  const nameArray = fullName.split(" ");
  return nameArray[nameArray.length - 1];
}

export function getSurnameMaternal(fullName: string): string {
  const nameArray = fullName.split(" ");
  return nameArray[nameArray.length - 2];
}

export function getName(fullName: string): string {
  const nameArray = fullName.split(" ");
  nameArray.splice(-2)
  return nameArray.join(" ");
}
