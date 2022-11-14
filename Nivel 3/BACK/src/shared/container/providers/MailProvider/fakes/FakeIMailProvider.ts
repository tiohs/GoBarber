import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

interface IMessage {
  messages: ISendMailDTO;
}

class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(messages: ISendMailDTO): Promise<void> {
    this.messages.push({
      messages,
    });
  }
}

export default FakeMailProvider;
