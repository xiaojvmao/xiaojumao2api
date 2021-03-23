import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616484324704_6203';

  // add your config here
  config.middleware = [
    "reportMiddleware"
  ];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true
  }

  config.xiaojumao = {
    jwt: {
      secret: "12nuiasdu989je923jjasnbhdjbhsj",
      token: {
          expire: 36000000,
          refreshExpire: 36000000
      }
    }
  }

  return config;
};
