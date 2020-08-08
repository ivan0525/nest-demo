import { PrimaryGeneratedColumn } from 'typeorm'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
@Schema()
export class User extends Document {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Prop({ default: '卢本伟' })
  username: string

  @Prop({ default: '123456' })
  password: string

  @Prop({ default: '' })
  avatar: string

  @Prop({ default: 'user' })
  role: string

  @Prop({ default: '' })
  tag: string

  @Prop({ type: 'number', default: new Date().valueOf() })
  createTime: number
}

export const UserSchema = SchemaFactory.createForClass(User)
