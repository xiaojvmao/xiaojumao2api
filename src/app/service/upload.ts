import { Config, Provide } from "@midwayjs/decorator";
import * as path from 'path';
import * as COS from "cos-nodejs-sdk-v5"
import * as md5 from "md5"
import { FileStream } from "egg";

@Provide()
export class UploadService {

  @Config("cos")
  cosConfig

  async uploadFile(stream: FileStream) {
    const cos = new COS({
      SecretId: this.cosConfig.secretId,
      SecretKey: this.cosConfig.secretKey,
    })
    const fileName = this.encrypt(stream.filename)
    cos.putObject({
      Bucket: 'mv-1253399808', /* 必须 */
      Region: 'ap-shanghai',
      Key: fileName,
      Body: stream
    })
  }
  private encrypt(fileName?: string) {
    fileName = fileName || this.cosConfig.baseSecret;

    return (
      md5(fileName + String(new Date().getTime())) +
      path.basename(fileName)
    );
  }
}
