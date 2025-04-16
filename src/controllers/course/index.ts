import type {
  ICourseController,
  ICourseRepository,
  CreateCourseDto,
} from "./protocols";
export class CourseController implements ICourseController {
  constructor(private courseRepository: ICourseRepository) {}

  async list(name?: string) {
    const courses = await this.courseRepository.list(name);
    return {
      statusCode: 200,
      body: courses,
    };
  }

  async create(course: CreateCourseDto) {
    const newCourse = await this.courseRepository.create(course);
    return {
      statusCode: 201,
      body: newCourse,
    };
  }

  async delete(id: string) {
    const idNumber = Number(id);
    const message = await this.courseRepository.delete(idNumber);
    return {
      statusCode: 200,
      body: message,
    };
  }
}
