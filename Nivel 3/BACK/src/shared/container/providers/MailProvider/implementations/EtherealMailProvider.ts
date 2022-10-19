import IMailProvider from '../models/IMailProvider';

class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {}
}

export default FakeMailProvider;
