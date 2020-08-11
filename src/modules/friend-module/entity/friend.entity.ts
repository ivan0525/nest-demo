import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class FriendEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  friendId: string

  @Column()
  userId: string
}
