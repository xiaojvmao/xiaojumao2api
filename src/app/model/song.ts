import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { BaseModel } from './base';
import { SingerModel } from './singer';

@EntityModel({
  name: 'song',
})
export class UserModel extends BaseModel {
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
    comment: '歌手id'
  })
  singer_id: string

  @Column({
    type: 'varchar',
    length: 255,
    comment: '背景图',
  })
  background_img: string;

  @ManyToOne(type => SingerModel)
  @JoinColumn({
    name: 'sing',
    referencedColumnName: 'id',
  })
  singer: SingerModel

}
