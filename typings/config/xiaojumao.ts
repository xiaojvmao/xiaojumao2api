export interface XiaojumaoConfig {
  jwt: {
      secret: string;
      token: {
          expire: number;
          refreshExpire: number;
      };
  };
}

