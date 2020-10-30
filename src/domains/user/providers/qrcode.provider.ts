import qrcode from 'qrcode';
import { QrCode } from './interfaces/qrcode.interface';

export class QrCodeProvider implements QrCode {
  async execute(): Promise<Buffer> {
    const qrCodeBase64 = await qrcode.toDataURL('I am a pony', {
      type: 'image/png',
      margin: 1,
      scale: 20,
    });

    return Buffer.from(qrCodeBase64.split(',')[1], 'base64');
  }
}
