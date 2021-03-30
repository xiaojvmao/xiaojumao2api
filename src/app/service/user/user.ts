import { Inject, Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../../../interface';
import { UserModel } from '../../model/user';

@Provide()
export class UserService {

  @Inject()
  userModel: UserModel

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
