import type {
  ICourseController,
  ICourseRepository,
  CreateCourseDto,
  updateUserDto,
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

  async find(id: string) {
    const idNumber = Number(id);
    const course = await this.courseRepository.find(idNumber);
    if (!course) {
      return {
        statusCode: 404,
        body: "Course not found",
      };
    }
    return {
      statusCode: 200,
      body: course,
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

  async update(id: string, course: updateUserDto) {
    const idNumber = Number(id);
    const message = await this.courseRepository.update(idNumber, course);
    return {
      statusCode: 200,
      body: message,
    };
  }
}
