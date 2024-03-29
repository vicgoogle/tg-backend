import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

interface IRequest {
  id: string;
  nameEquipment: string;
  typeEquipment: string;
  description: string;
  priceEquipment: number;
  photo: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute({
    id,
    nameEquipment,
    typeEquipment,
    description,
    priceEquipment,
    photo,
  }: IRequest): Promise<Equipment> {
    const findEquipment = await this.equipmentsRepository.findById(id);

    if (!findEquipment) {
      throw new AppError("Equipamento não encontrado");
    }

    findEquipment.nameEquipment = nameEquipment;
    findEquipment.typeEquipment = typeEquipment;
    findEquipment.priceEquipment = priceEquipment;
    findEquipment.description = description;
    findEquipment.photo = photo;

    const newClient = await this.equipmentsRepository.save(findEquipment);

    return newClient;
  }
}
