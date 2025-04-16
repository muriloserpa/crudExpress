import type {
  ICourseRepository,
  CreateCourseDto,
  updateUserDto,
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

  async find(id: number): Promise<Course | null> {
    return coursers.find((course) => course.id === id) || null;
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

  async update(id: number, course: updateUserDto): Promise<string> {
    const courseIndex = coursers.findIndex(
      ({ id: courseId }) => courseId === id
    );
    if (courseIndex === -1) {
      return "Course not found";
    }
    const currentCourse = coursers[courseIndex];
    if (!currentCourse) {
      return "Course not found"; // or throw an error
    }
    Object.assign(currentCourse, course);
    return "Course updated";
  }
}
