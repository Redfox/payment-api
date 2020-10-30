import { container } from 'tsyringe';

import { QrCodeProvider } from '@domains/user/providers/qrcode.provider';
import { QrCode } from '@domains/user/providers/interfaces/qrcode.interface';

container.registerSingleton<QrCode>(
  'QrCodeProvider',
  QrCodeProvider,
);
