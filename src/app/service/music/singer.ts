import { Provide } from '@midwayjs/decorator';
import { SingerModel } from '../../model/singer';
import { QueryDTO } from '../../dto/music/singer'
import { Repository, Like } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';

@Provide()
export class SingerService {
  @InjectEntityModel(SingerModel)
  singerModel: Repository<SingerModel>


  /**
   * 分页查询歌手列表
   * @param {QueryDTO} params
   */
  async querySinger(params: QueryDTO) {
    const { pageSize, page, sorter, ...filter } = params;
    const where: any = {};
    const order: any = { id: 'DESC' };

    // 排序方式
    if (sorter) {
      const [column, sort] = sorter.split('_');
      order[column] = sort.split('end')[0].toUpperCase();
    }

    // 模糊匹配id
    if (filter.id) {
      where.id = Like(filter.id);
    }

    // 模糊匹配名称
    if (filter.name) {
      where.name = Like(`${filter.name}%`);
    }

    // 模糊匹配标识
    if (filter.name) {
      where.name = Like(`${filter.name}%`);
    }

    const [list, total] = await this.singerModel.findAndCount({
      where,
      order,
      take: pageSize,
      skip: pageSize * (page - 1),
    });

    return {
      page,
      pageSize,
      total,
      list,
    };
  }
}


