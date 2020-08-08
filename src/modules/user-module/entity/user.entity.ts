import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column({ default: '卢本伟' })
  username: string

  @Column({ default: '123456' })
  password: string

  @Column({ default: '' })
  avatar: string

  @Column({ default: 'user' })
  role: string

  @Column({ default: '' })
  tag: string

  @Column({ type: 'double', default: new Date().valueOf() })
  createTime: number
}
