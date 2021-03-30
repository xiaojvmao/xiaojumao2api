import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { BaseModel } from './base';
import { SingerModel } from './singer';

@EntityModel({
  name: 'song',
})
export class SongModel extends BaseModel {
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 190,
    comment: '歌曲名',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 190,
    comment: '地址',
  })
  src: string;

  @Column({
    type: 'integer',
    comment: '歌手id',
    name: 'singer_id'
  })
  singerId: string

  @Column({
    type: 'varchar',
    length: 255,
    comment: '背景图',
    name: 'background_img'
  })
  backgroundImg: string;

  @ManyToOne(type => SingerModel)
  @JoinColumn({
    name: 'singer_id',
    referencedColumnName: 'id',
  })
  singer: SingerModel

}
