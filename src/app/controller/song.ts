import { Inject, Controller, Provide, Query, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { SongService } from '../service/music/song';

@Provide()
@Controller('/song')
export class SongController {
  @Inject()
  ctx: Context;

  @Inject()
  songService: SongService;

  @Get('/')
  async getSong(@Query() id) {
    const song = await this.songService.getSongById({ id });
    return this.ctx.helper.success(song);
  }
}
