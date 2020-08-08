import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CommonTypes } from '../../types'
import { User } from './schema/user.schema'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  addUser(@Body() user: User): Promise<CommonTypes.CommonResult> {
    return this.userService.addUser(user)
  }
}
