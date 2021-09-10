import { PartialType } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { CreateCoacheDto } from './create-coache.dto';

export class UpdateCoacheDto extends PartialType(CreateCoacheDto) {
  @Column()
  name?: string;

  @Column()
  surname?: string;

  @Column()
  birthday?: string;

  @Column()
  expirience?: number;
}
