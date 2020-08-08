import { Body, Controller, Get, Query, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CommonTypes } from '../../types'
import { User } from './entity/user.entity'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 添加用户（注册新用户）
  @Post('/register')
  addUser(@Body() user: User): Promise<CommonTypes.CommonResult> {
    return this.userService.addUser(user)
  }

  // 通过用户名查询用户
  @Get('/selectByName')
  selectUserByName(@Query('username') username: string): Promise<CommonTypes.CommonResult> {
    console.log(typeof username)
    return this.userService.selectUserByName(username)
  }
}
