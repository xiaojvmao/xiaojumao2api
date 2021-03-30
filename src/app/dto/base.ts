import { Rule, RuleType } from "@midwayjs/decorator";
import { CreateApiPropertyDoc } from "@midwayjs/swagger";

export class ListBaseDto {
  @CreateApiPropertyDoc('当前页')
  @Rule(RuleType.number().min(1).max(100000).default(1).optional())
  page?: number;

  @CreateApiPropertyDoc('每页数量')
  @Rule(RuleType.number().min(1).max(1000).default(10).optional())
  pageSize?: number;

  @CreateApiPropertyDoc(
    '排序字段，以字段名加下划线组合，不能有特殊字符和不存在的字段。例如: name_ASC 或者 name_DESC'
  )
  @Rule(
    RuleType.string()
      .trim()
      .max(50)
      .regex(/^[a-zA-Z]*(_ascend|_descend)$/)
      .optional()
  )
  sorter?: string;
}
