import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { BaseModel } from './base';

@EntityModel({
  name: 'singers',
})
export class SingerModel extends BaseModel {
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 190,
    comment: '歌名',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '头像',
  })
  avatar: string;
}
