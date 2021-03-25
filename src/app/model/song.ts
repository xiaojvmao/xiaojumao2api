import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { BaseModel } from './base';

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
    length: 60,
    nullable: true,
    comment: '',
  })
  password: string;

  @Column({
    type: 'varchar',
    comment: '歌手名',
  })
  singername: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '背景',
  })
  background: string;
}
