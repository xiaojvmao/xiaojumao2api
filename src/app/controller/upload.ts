import { Controller, Post, Inject, Provide } from '@midwayjs/decorator';
import * as sendToWormhole from 'stream-wormhole';
import { Context } from 'egg';
import { UploadService } from '../service/upload';

@Provide()
@Controller('/api/common/upload')
export class UploadController {

  @Inject()
  ctx: Context

  @Inject()
  uploadService: UploadService

  @Post('/')
  async upload() {
    const stream = await this.ctx.getFileStream();

    // 文件处理，上传到cos
    let result;
    try {
      result = await this.uploadService.uploadFile(stream);
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }

    this.ctx.body = result;
  }
}
