import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// 翻译： 职业

app.get("/wjl", (c) => {
  const body = { name: "wjl", age: 23, sex: "male", occupation: "Developer" };
  return c.json(body);
});
export default app;
