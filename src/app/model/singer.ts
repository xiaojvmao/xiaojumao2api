import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { BaseModel } from './base';

@EntityModel({
  name: 'singers',
})
export class UserModel extends BaseModel {
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
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '头像',
  })
  avatar: string;
}
