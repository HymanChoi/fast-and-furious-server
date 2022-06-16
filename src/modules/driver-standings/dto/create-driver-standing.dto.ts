import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class DriverStandingListItem {
  @ApiProperty({ description: '排名' })
  position: string;

  @ApiProperty({ description: '车手名称' })
  driver: string;

  @ApiProperty({ description: '国籍' })
  nationality: string;

  @ApiProperty({ description: '车队名称' })
  team: string;

  @ApiProperty({ description: '分数' })
  points: string;
}

export class CreateDriverStandingDto {
  @ApiProperty({ description: '年份' })
  @IsNotEmpty({ message: '年份不能为空' })
  readonly year: number;

  @ApiProperty({
    type: () => DriverStandingListItem,
    isArray: true,
    description: '数据',
  })
  @IsNotEmpty({ message: '数据不能为空' })
  readonly list: DriverStandingListItem[];
}
