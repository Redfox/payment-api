import { injectable } from 'tsyringe';

@injectable()
export class SessionService {
  execute(): string {
    return 'token';
  }
}
