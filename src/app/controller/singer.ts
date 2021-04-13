import { Inject, Controller, Get, Post, Provide, Validate, Body, ALL, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { CreateDTO, ShowDTO } from '../dto/music/singer';
import { SingerService } from '../service/music/singer';

@Provide()
@Controller('/singer')
export class SingerController {
  @Inject()
  ctx: Context;

  @Inject()
  singerService: SingerService

  @Get('/')
  async getSinger(ctx: Context, @Query(ALL) query: ShowDTO) {
    let created = await this.singerService.getSongById(query)
    return ctx.helper.success(created)
  }

  @Post('/create', {
    summary: '创建歌手',
  })
  @Validate()
  async create(ctx: Context, @Body(ALL) params: CreateDTO) {
    let created = await this.singerService.createSinger(params)
    return ctx.helper.success(created)
  }
}
