import { inject, injectable } from 'tsyringe';
import { QrCode } from '../providers/interfaces/qrcode.interface';

@injectable()
export class SessionService {
  constructor(
    @inject('QrCodeProvider')
    private qrCode: QrCode,
  ) {}

  async execute(): Promise<Buffer> {
    return this.qrCode.execute();
  }
}
