import { Rule, RuleType } from '@midwayjs/decorator';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';
import { ListBaseDto } from '../base';
/**
 * 查询管理员列表参数
 */
export class QueryDTO extends ListBaseDto {

  @CreateApiPropertyDoc('筛选字段-id')
  @Rule(RuleType.string().trim().max(10).optional())
  id?: string;

  @CreateApiPropertyDoc('筛选字段-名称')
  @Rule(RuleType.string().trim().max(50).optional())
  name?: string;

  @CreateApiPropertyDoc('筛选字段-歌手对应网易云id')
  @Rule(RuleType.string().trim().max(50).optional())
  cloudId?: string;
}

/**
 * 获取单个管理员参数
 */
export class ShowDTO {
  @CreateApiPropertyDoc('歌曲的id')
  @Rule(RuleType.string().trim().max(10))
  id: string;

  @CreateApiPropertyDoc('歌曲的id')
  @Rule(RuleType.string().trim().max(10))
  cloudId: string;
}

/**
 * 删除歌手参数
 */
export class RemoveDTO {
  @CreateApiPropertyDoc('歌手id')
  @Rule(RuleType.array().items(RuleType.string().trim().max(10)).min(1))
  ids: string;
}

/**
 * 创建歌手参数
 */
export class CreateDTO {

  @CreateApiPropertyDoc('歌手名')
  @Rule(RuleType.string().trim().min(1).max(255))
  name: string;

  @CreateApiPropertyDoc('头像')
  @Rule(RuleType.string().trim().max(255).optional())
  avatar?: string;

  @CreateApiPropertyDoc('歌手网易云id')
  @Rule(RuleType.string().trim())
  cloudId?: string;

}

/**
 * 更新歌曲参数
 */
export class UpdateDTO {
  @CreateApiPropertyDoc('歌手id')
  @Rule(RuleType.string().trim().max(10).required())
  id: string;

  @CreateApiPropertyDoc('歌手名')
  @Rule(RuleType.string().trim().min(5).max(255))
  name: string;

  @CreateApiPropertyDoc('头像')
  @Rule(RuleType.string().trim().max(255).optional())
  avatar?: string;

  @CreateApiPropertyDoc('歌手id')
  @Rule(RuleType.string().trim().min(5).max(60).required())
  cloudId?: string;

}
