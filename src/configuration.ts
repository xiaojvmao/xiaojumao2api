import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as cache from '@midwayjs/cache';
import { join } from 'path';

@Configuration({
  imports: [
    '@midwayjs/orm',
    cache   // 导入 cache 组件
  ],
  importConfigs: [
    join(__dirname, 'config')
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}
