import { injectable, inject } from 'tsyringe';

interface IRequest {
  userId: string;
  month: number;
  year: number;
}

@injectable()
export default class LisProviderMonthAvailabilityService {
  constructor() {}

  public async execute(): Promise<void> {}
}
