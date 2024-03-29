import { container } from "tsyringe";

import RentsRepository from "@src/Repositories/RentsRepository";
import ClientsRepository from "@src/Repositories/ClientsRepository";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import EquipmentsRepository from "@src/Repositories/EquipmentsRepository";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";
import AddressRepository from "@src/Repositories/AddressRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IRentsRepository>(
  "RentsRepository",
  RentsRepository
);

container.registerSingleton<IEquipmentsRepository>(
  "EquipmentsRepository",
  EquipmentsRepository
);

container.registerSingleton<IAddressRepository>(
  "AddressRepository",
  AddressRepository
);
