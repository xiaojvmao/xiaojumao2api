import { ConnectionOptions } from 'typeorm';

export const security = {
  csrf: false,
  orm: {

  }
}

// 数据库配置
export const orm: ConnectionOptions = {
  type: 'mysql',
  host: 'sh-cdb-9e23suum.sql.tencentcdb.com',
  port: 60219,
  username: 'root',
  password: '987412365',
  database: 'xiaojumao',
  synchronize: false,
  logging: true,
};
