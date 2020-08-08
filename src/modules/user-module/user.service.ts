import { Injectable } from '@nestjs/common'
import { Repository, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { hashSync } from 'bcrypt'
import { CommonTypes } from '../../types'
import { User } from './entity/user.entity'
import { StatusCodeEnum } from '../../common/constants'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  // 添加用户（注册新用户）
  async addUser(user: User): Promise<CommonTypes.CommonResult> {
    // 查询数据库中是否有同名username的数据
    const isExit = await this.userRepository.find({ username: user.username })
    // 如果存在，则新增失败
    if (isExit.length > 0) {
      return { status: StatusCodeEnum.FAIL, message: '用户名重复', data: null }
    }
    // 对用户密码进行加密处理
    user.password = hashSync(user.password, 10)
    // 存入数据库，新增成功
    await this.userRepository.save(user)
    return { status: StatusCodeEnum.OK, message: '注册成功', data: null }
  }

  // 通过用户名查询用户
  async selectUserByName(username: string): Promise<CommonTypes.CommonResult> {
    if (username) {
      const users = await this.userRepository.find({
        select: ['userId', 'username', 'avatar', 'role', 'tag', 'createTime'],
        where: { username: Like(`%${username}%`) }
      })
      return { status: StatusCodeEnum.OK, message: '处理成功', data: users }
    }
    return { status: StatusCodeEnum.FAIL, message: '用户名不能为空', data: null }
  }
}
