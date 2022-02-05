import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class BlogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(1000)
  readonly body: string;
}
