import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { Blog, BlogEntity } from './entity/blog.entitiy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogEntity }]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
