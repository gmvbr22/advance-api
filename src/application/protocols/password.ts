export interface PasswordHasher {
  hash(password: string): Promise<string>;
}

export interface PasswordComparator {
  compare(password: string, hash: string): Promise<boolean>;
}
