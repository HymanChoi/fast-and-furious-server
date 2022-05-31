import { PartialType } from '@nestjs/swagger';
import { CreateTeamStandingDto } from './create-team-standing.dto';

export class UpdateTeamStandingDto extends PartialType(CreateTeamStandingDto) {}
