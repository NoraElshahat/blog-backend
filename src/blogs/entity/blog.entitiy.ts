import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BlogDocument = Document & Blog;

@Schema({ id: true, timestamps: true })
export class Blog {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  body: string;
}

export const BlogEntity = SchemaFactory.createForClass(Blog);
