import { Provide } from "@midwayjs/decorator";

@Provide()
export class RoleService {
  async getByUser(uid: number): Promise<number[]> {
    return [1, 2, 3]
  }
}
