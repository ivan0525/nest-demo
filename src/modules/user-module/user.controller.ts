import { Body, Controller, Get, Query, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CommonTypes } from '../../types'
import { User } from './entity/user.entity'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/test')
  test() {
    return 'Hello World!'
  }
  // 添加用户（注册新用户）
  @Post('/register')
  addUser(@Body() user: User): Promise<CommonTypes.CommonResult> {
    return this.userService.addUser(user)
  }

  // 通过用户名查询用户
  @Get('/selectByName')
  selectUserByName(@Query('username') username: string): Promise<CommonTypes.CommonResult> {
    return this.userService.selectUserByName(username)
  }

  // 登录
  @Post('/login')
  login(
    @Body() userInfo: { username: string; password: string }
  ): Promise<CommonTypes.CommonResult> {
    return this.userService.login(userInfo)
  }

  // 通过id查询用户信息
  @Get('/selectById')
  selectUserById(@Query('userId') userId: string): Promise<CommonTypes.CommonResult> {
    return this.userService.selectUserById(userId)
  }
}
