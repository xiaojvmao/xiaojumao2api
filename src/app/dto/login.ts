import { Rule, RuleType } from '@midwayjs/decorator';
/**
 * 登录参数校验
 */
export class LoginDTO {
  // uid
  @Rule(RuleType.number().required())
  uid: number;

  // 密码
  @Rule(RuleType.string().required())
  password: number;
}
