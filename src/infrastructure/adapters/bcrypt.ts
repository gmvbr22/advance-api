import {PasswordComparator, PasswordHasher} from '../../application/protocols';
import {hashSync, compareSync} from 'bcrypt';

export class BcryptAdapter implements PasswordComparator, PasswordHasher {
  private rounds: number;

  public constructor(rounds: number) {
    this.rounds = rounds;
  }

  public async hash(password: string): Promise<string> {
    return hashSync(password, this.rounds);
  }

  public async compare(password: string, hash: string): Promise<boolean> {
    return compareSync(password, hash);
  }
}
