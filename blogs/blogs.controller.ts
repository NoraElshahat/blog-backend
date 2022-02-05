import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto } from './dto/blog.dto';
import { Blog } from './entity/blog.entitiy';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: BlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }): Promise<Blog> {
    return this.blogService.findOne(id);
  }

  @Patch(':id')
  update(@Param() { id }, @Body() updateBlogDto: BlogDto): Promise<Blog> {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  delete(@Param() { id }): Promise<Blog> {
    return this.blogService.delete(id);
  }
}
