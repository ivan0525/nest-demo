import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'
import { AppService } from './app.service'

@Controller('/user-module')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sayHi')
  getHello(@Req() request: Request): string {
    console.log(request)
    return this.appService.getHello()
  }
}
