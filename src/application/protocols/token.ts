export interface TokenPayload {
  user: string;
  role: string;
  device: string;
}

export interface TokenSignResult {
  expire: number;
  token: string;
}

export interface TokenSign {
  sign(options: TokenPayload): Promise<TokenSignResult>;
}

export interface TokenVerify {
  verify(token: string): Promise<TokenPayload>;
}
