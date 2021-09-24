import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({type: 'string'})
  readonly username: string;
  @ApiProperty({type: 'string'})
  readonly email: string;
  @ApiProperty({type: 'string'})
  readonly bio: string;
  @ApiProperty({type: 'string'})
  readonly image: string;
}