import { Inject, Controller, Post, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user/user';

@Provide()
@Controller('/api')
export class SongController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
