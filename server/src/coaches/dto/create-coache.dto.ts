import { Column } from 'typeorm';

export class CreateCoacheDto {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  birthday: string;

  @Column()
  expirience: number;

  @Column()
  teamId: number;
}
