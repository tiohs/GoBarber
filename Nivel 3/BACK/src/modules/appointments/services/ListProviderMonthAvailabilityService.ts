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
export default class ListProviderMonthAvailabilityService {
  constructor() {}

  public async execute({ userId, year, month }): Promise<IResponse> {
    return [{ day: 1, available: false }];
  }
}
