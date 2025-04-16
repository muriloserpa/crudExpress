import Express from "express";
import { MemoryCourseRepository } from "./repositories/course/memoryRepository";
import { CourseController } from "./controllers/course";

const app = Express();

const port = process.env.PORT || 3000;

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", async (req: Express.Request, res: Express.Response) => {
  const courseRepository = new MemoryCourseRepository();
  const courseController = new CourseController(courseRepository);
  const courses = await courseController.list(req.query.name as string);
  res.json(courses);
});

app.get("/courses/:id", async (req: Express.Request, res: Express.Response) => {
  const courseRepository = new MemoryCourseRepository();
  const courseController = new CourseController(courseRepository);
  const id: string = req.params.id!;
  const course = await courseController.find(id);
  res.json(course);
});

app.post("/courses", async (req: Express.Request, res: Express.Response) => {
  const courseRepository = new MemoryCourseRepository();
  const courseController = new CourseController(courseRepository);
  const course = await courseController.create(req.body);
  res.json(course);
});

app.delete(
  "/courses/:id",
  async (req: Express.Request, res: Express.Response) => {
    const courseRepository = new MemoryCourseRepository();
    const courseController = new CourseController(courseRepository);

    const id: string = req.params.id!;

    const message = await courseController.delete(id);
    res.json(message);
  }
);

app.put("/courses/:id", async (req: Express.Request, res: Express.Response) => {
  const courseRepository = new MemoryCourseRepository();
  const courseController = new CourseController(courseRepository);

  const id: string = req.params.id!;
  const course = req.body;

  const message = await courseController.update(id, course);
  res.json(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
