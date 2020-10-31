import 'reflect-metadata';
import { SessionService } from './session.service';

const qrCodeMock = {
  execute: jest.fn(),
};

describe('Session test', () => {
  const service = new SessionService(qrCodeMock as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return qrCode generated', async () => {
    qrCodeMock.execute.mockResolvedValueOnce(Buffer);
    const response = await service.execute();

    expect(response).toBeTruthy();
  });
});
