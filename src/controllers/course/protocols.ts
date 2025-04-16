import type { Course } from "../../models/course";
import type { HttpResponse } from "../protocols";

export interface ICourseController {
  list: (name?: string) => Promise<HttpResponse<Course[]>>;
  create: (course: CreateCourseDto) => Promise<HttpResponse<Course>>;
  delete: (id: string) => Promise<HttpResponse<string>>;
  update: (id: string, course: updateUserDto) => Promise<HttpResponse<string>>;
  find: (id: string) => Promise<HttpResponse<Course | null>>;
}

export interface ICourseRepository {
  list: (name?: string) => Promise<Course[]>;
  create: (course: CreateCourseDto) => Promise<Course>;
  delete: (id: number) => Promise<string>;
  update: (id: number, course: updateUserDto) => Promise<string>;
  find: (id: number) => Promise<Course | null>;
}

export interface CreateCourseDto {
  name: string;
  period: number;
  required: boolean;
}

export interface updateUserDto {
  name?: string;
  period?: number;
  required?: boolean;
}
