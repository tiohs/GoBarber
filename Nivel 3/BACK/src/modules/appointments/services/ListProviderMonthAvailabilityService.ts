import { injectable, inject } from 'tsyringe';

interface IRequest {
  userId: string;
  month: number;
  year: number;
}

type IResponse = {
  day: number;
  available: boolean;
}[];

@injectable()
export default class LisProviderMonthAvailabilityService {
  constructor() {}

  public async execute(): Promise<IResponse> {}
}
