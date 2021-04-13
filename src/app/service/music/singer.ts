import { Provide } from '@midwayjs/decorator';
import { SingerModel } from '../../model/singer';
import { CreateDTO, QueryDTO } from '../../dto/music/singer'
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
      where.name = Like(`${filter.name}`);
    }

    if (filter.cloudId) {
      where.name = Like(`${filter.cloudId}`)
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

  /**
   * 根据歌手id获取数据
   * @param id
   */
  async getSongById({ id, cloudId }) {
    const where: any = {};
    if (id) {
      where.id = id;
    }
    if (cloudId) {
      where.cloudId = cloudId
    }
    const row = await this.singerModel
      .createQueryBuilder()
      .where(where)
      .getOne();
    return row;
  }

  /**
   * 创建歌手
   *
   */
  async createSinger(params: CreateDTO) {
    let permission = new SingerModel();
    permission = this.singerModel.merge(permission, params);

    const created = await this.singerModel.save(params);
    return created;
  }
}


