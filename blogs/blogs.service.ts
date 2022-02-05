import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDto } from './dto/blog.dto';
import { Blog, BlogDocument } from './entity/blog.entitiy';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) readonly blogModel: Model<BlogDocument>,
  ) {}

  async create(createBlogDto: BlogDto): Promise<Blog> {
    const blog = await new this.blogModel(createBlogDto);

    if (!blog) {
      throw new BadRequestException('please check Your inputs');
    }

    return blog.save();
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find().lean();
  }

  async findOne(_id: string): Promise<Blog> {
    const blog = await this.blogModel.findById(_id);

    if (!blog) {
      throw new NotFoundException('No blog Found');
    }

    return blog;
  }

  async update(_id: string, updateBlogDto: BlogDto): Promise<Blog> {
    return await this.blogModel.findByIdAndUpdate(_id, updateBlogDto, {
      new: true,
    });
  }

  async delete(_id: string): Promise<Blog> {
    const blog = await this.blogModel.findById(_id);

    if (!blog) {
      throw new NotFoundException('No Blog Found');
    }

    return blog.delete();
  }
}
