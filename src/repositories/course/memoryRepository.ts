import type {
  ICourseRepository,
  CreateCourseDto,
} from "../../controllers/course/protocols";
import type { Course } from "../../models/course";

const coursers: Course[] = [];

export class MemoryCourseRepository implements ICourseRepository {
  async list(name?: string): Promise<Course[]> {
    if (name) {
      return coursers.filter((course) => course.name === name);
    }
    return coursers;
  }

  async create(course: CreateCourseDto): Promise<Course> {
    const newCourse = { id: coursers.length + 1, ...course };
    coursers.push(newCourse);
    return newCourse;
  }

  async delete(id: number): Promise<string> {
    const course = coursers.find((course) => course.id === id);
    if (!course) {
      return "Course not found";
    }
    coursers.splice(coursers.indexOf(course), 1);
    return "Course deleted";
  }
}
