import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/')
export class HomeController {

  @Inject()
  ctx: Context

  @Get('/')
  async home(ctx: Context) {
    return ctx.helper.success('Hello Midwayjs!');
  }
}
