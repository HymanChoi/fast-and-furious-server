import { PartialType } from '@nestjs/swagger';
import { CreateDriverDto } from './create-driver.dto';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  readonly accountName: string | number;
  readonly realName: string;
  readonly password: string;
  readonly repassword: string;
  readonly mobile: number;
}
