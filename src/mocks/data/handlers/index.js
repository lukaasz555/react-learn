import { rest } from "msw";
import { students } from "../students";
import { groups } from "../groups";

export const handlers = [
  rest.get("/groups", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.post("/students/search", (req, res, ctx) => {
    const matchingStudents = req.text().searchPhrase
      ? students.filter((student) =>
          student.name
            .toLowerCase()
            .includes(req.text().searchPhrase.toLowerCase())
        )
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        // students,
        students: matchingStudents,
      })
    );
  }),

  rest.get("/students/:group", (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
