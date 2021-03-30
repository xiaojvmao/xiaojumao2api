import { ALL, Body, Controller, Inject, Post, Provide } from '@midwayjs/decorator';
import { LoginDTO } from '../dto/login';
import { LoginService } from '../service/auth';

@Provide()
@Controller('/login')
export class LoginController {
  @Inject()
  loginService: LoginService
  @Post('/')
  async login(@Body(ALL) login: LoginDTO) {
    return await this.loginService.login(login);
  }
}
