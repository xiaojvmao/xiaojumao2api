import { Provide } from '@midwayjs/decorator';
import { SongModel } from '../../model/song';
import { QueryDTO } from '../../dto/music/song'
import { Repository, Like } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';

@Provide()
export class SongService {
  @InjectEntityModel(SongModel)
  songModel: Repository<SongModel>

  /**
   * 分页查询歌曲列表
   * @param {QueryDTO} params
   */
  async querySong(params: QueryDTO) {
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

    // 模糊匹配标识
    if (filter.cloudId) {
      where.name = Like(`${filter.name}%`);
    }

    const [list, total] = await this.songModel.findAndCount({
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
   * 根据歌曲id获取数据
   * @param id 管理员id
   */
  async getSongById({ id, cloudId }: {
    id?: string
    cloudId?: string
  }) {
    const where: any = {};
    if (id) {
      where.id = id;
    }
    if (cloudId) {
      where.cloudId = cloudId
    }
    const row = await this.songModel
      .createQueryBuilder()
      .where(where)
      .getOne();
    return row;
  }


}
