import { Module } from '@nestjs/common'
import { UserModule } from './modules/user-module/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: 'mysqlmima',
      database: 'space_x',
      charset: 'utf8mb4',
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule
  ]
})
export class AppModule {}
