import type { Course } from "../../models/course";
import type { HttpResponse } from "../protocols";

export interface ICourseController {
  list: (name?: string) => Promise<HttpResponse<Course[]>>;
  create: (course: CreateCourseDto) => Promise<HttpResponse<Course>>;
  delete: (id: string) => Promise<HttpResponse<string>>;
}

export interface ICourseRepository {
  list: (name?: string) => Promise<Course[]>;
  create: (course: CreateCourseDto) => Promise<Course>;
  delete: (id: number) => Promise<string>;
}

export interface CreateCourseDto {
  name: string;
  period: number;
  required: boolean;
}
