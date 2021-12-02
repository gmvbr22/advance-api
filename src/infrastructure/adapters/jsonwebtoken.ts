import {
  ITokenSign,
  ITokenVerify,
  TokenPayload,
  TokenSignResult,
} from '../../application/protocols';

import {sign, verify} from 'jsonwebtoken';

export class JWTAdapter implements ITokenSign, ITokenVerify {
  private secret: string;

  public constructor(secret: string) {
    this.secret = secret;
  }

  public async sign(options: TokenPayload): Promise<TokenSignResult> {
    const expire = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = sign(
      {
        exp: expire,
        sub: options.user,
        role: options.role,
        device: options.device,
      },
      this.secret
    );
    return {token, expire};
  }

  public async verify(token: string): Promise<TokenPayload> {
    const payload = verify(token, this.secret) as TokenPayload;
    if (
      typeof payload.user !== 'string' ||
      typeof payload.role !== 'string' ||
      typeof payload.device !== 'string'
    ) {
      throw new Error('missing token payload');
    }
    return payload;
  }
}
