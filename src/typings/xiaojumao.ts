export interface JwtConfig {
  secret: string;
  token: {
    expire: number;
    refreshExpire: number;
  };
}
