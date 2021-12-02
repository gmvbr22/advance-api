export interface TokenPayload {
  user: string;
  role: string;
  device: string;
}

export interface TokenSignResult {
  expire: number;
  token: string;
}

export interface ITokenSign {
  sign(options: TokenPayload): Promise<TokenSignResult>;
}

export interface ITokenVerify {
  verify(token: string): Promise<TokenPayload>;
}
