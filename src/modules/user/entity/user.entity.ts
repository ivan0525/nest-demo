import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column({ default: '卢本伟' })
  username: string

  @Column({ default: '123456' })
  password: string

  @Column()
  avatar: string

  @Column({ default: 'user' })
  role: string

  @Column({ default: '' })
  tag: string

  @Column({ type: 'double', default: new Date().valueOf() })
  createTime: number
}

export default User
