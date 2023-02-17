import { Request, Response } from "express";
import CreateService from "@src/Services/Client/CreateClientService";
import readService from "@src/Services/Client/ReadClientService";
import DeleteService from "@src/Services/Client/DeleteClientService";
import UpdateService from "@src/Services/Client/UpdateClientService";
import { container } from "tsyringe";

export default class ClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, email, address, birthDate, cpf } = request.body;

    const createClientService = container.resolve(CreateService);

    const createdClient = await createClientService.execute({
      name,
      phone,
      email,
      address,
      birthDate,
      cpf,
    });

    return response.json({ response: createdClient });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readClientService = container.resolve(readService);

    const findClient = await readClientService.execute(id);

    return response.json({
      cliente: findClient,
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Cliente excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name, phone, email, address, birthDate, cpf } = request.body;

    const updateService = container.resolve(UpdateService);

    const updatedClient = await updateService.execute({
      id,
      name,
      phone,
      email,
      address,
      birthDate,
      cpf,
    });

    return response.json({ response: updatedClient });
  }
}
