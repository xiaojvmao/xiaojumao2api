import { Inject, Provide, Config } from '@midwayjs/decorator';
// import * as md5 from 'md5';
import * as jwt from 'jsonwebtoken';
import { Context } from 'egg';
import { LoginDTO } from '../dto/login';
import { UserService } from './user/user';
import { RoleService } from './admin/role';
import { CacheManager } from '@midwayjs/cache';
import { JwtConfig } from '../../typings/xiaojumao';

/**
 * 登录
 */
@Provide()
export class LoginService {

  @Inject(`cache:cacheManager`)
  cache: CacheManager;

  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService

  @Inject()
  roleService: RoleService;

  @Config("jwt")
  config: JwtConfig
  /**
   * 登录
   * @param login
   */
  async login(login: LoginDTO) {
    const { uid, password } = login;
    password
      const user = this.userService.getUser({uid})
    // 校验用户
      if (user) {
        // 校验用户状态及密码
        // if (user.status === 0 || user.password !== md5(password)) {
        //   return "密码错误"
        // }
        // return '密码错误'
      } else {
        // throw ('账户或密码不正确~');
        return '账户或密码不正确~'
      }

      const { expire, refreshExpire } = this.config.token;
      const result = {
        expire,
        token: await this.generateToken(user, expire),
        refreshExpire,
        refreshToken: await this.generateToken(
          user,
          refreshExpire,
          true
        ),
      };

      // 将用户相关信息保存到缓存

      return result;
  }
  async generateToken(user, expire, isRefresh?) {
    await this.cache.set(`user:${user.uid}`, user)
    const tokenInfo = {
      ...user
    }
    return jwt.sign(tokenInfo, "secret", {
      expiresIn: expire
    })
  }
}
