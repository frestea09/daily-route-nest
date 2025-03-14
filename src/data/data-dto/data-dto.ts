import { Exclude, Expose } from 'class-transformer';

export class DataDto {
  @Exclude()
  id: number;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Exclude()
  published: boolean;

  @Exclude()
  authorId: number;

  constructor(partial: Partial<DataDto>) {
    Object.assign(this, partial);
  }
}
