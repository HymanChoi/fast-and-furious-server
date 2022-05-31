import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamStandingDto {
  @ApiProperty({ description: '年份' })
  @IsNotEmpty({ message: '年份不能为空' })
  readonly year: number;

  @ApiProperty({ description: '数据' })
  @IsNotEmpty({ message: '数据不能为空' })
  readonly list: string;
}
