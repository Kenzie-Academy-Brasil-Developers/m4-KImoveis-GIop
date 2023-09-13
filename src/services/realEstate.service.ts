import { Repository } from "typeorm";
import {
  TrealEstateRequest,
  TrealEstateResponse,
} from "../interfaces/realEstate.interface";
import { Address, Category, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const createRealEstateService = async (
  realEstateData: TrealEstateRequest
): Promise<TrealEstateResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  let address: Address = adressRepository.create(
    realEstateData.address as Address
  );
  await adressRepository.save(address);
  const category: Category | null = await categoryRepository.findOne({
    where: { id: realEstateData.categoryId },
  });
  if (!category) {
    throw new AppError("category not found", 404);
  }
  const obj = {
    ...realEstateData,
    address: address,
    category: category,
  };

  const realEstate: RealEstate = realEstateRepository.create(obj);

  await realEstateRepository.save(realEstate);

  return realEstate;
};

const listRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const RealEstateList: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return RealEstateList!;
};

export { listRealEstateService, createRealEstateService };
