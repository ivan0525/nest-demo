import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CommonTypes } from '../../types'
import { User } from './schema/user.schema'
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
  async addUser(user: User): Promise<CommonTypes.CommonResult> {
    try {
      // 查询数据库中是否有同名username的数据
      const isExit = await this.userModel.find({ username: user.username })
      // 如果存在，则新增失败
      if (isExit.length > 0) {
        return { status: 'error', message: '用户名重复', data: '' }
      }
      // 存入数据库，新增成功
      const data = new this.userModel(user)
      await data.save()
      return { status: 'ok', message: '注册成功', data }
    } catch (err) {
      return { status: 'error', message: '注册失败', data: err }
    }
  }
}
