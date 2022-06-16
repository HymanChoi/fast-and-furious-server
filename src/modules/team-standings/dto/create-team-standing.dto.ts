import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class Team {
  @ApiProperty({ description: '车队名称' })
  team: string;

  @ApiProperty({ description: '分数' })
  points: string;

  @ApiProperty({ description: '排名' })
  position: string;
}

export class CreateTeamStandingDto {
  @ApiProperty({ description: '年份' })
  @IsNotEmpty({ message: '年份不能为空' })
  readonly year: number;

  @ApiProperty({
    type: () => Team,
    isArray: true,
    description: '数据',
  })
  @IsNotEmpty({ message: '数据不能为空' })
  readonly list: Team[];
}
