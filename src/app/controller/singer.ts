import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/api/xiaojumao/singer')
export class SingerController {
  @Inject()
  ctx: Context;

  @Get('/')
  async getUser(@Query() id) {

  }
}
