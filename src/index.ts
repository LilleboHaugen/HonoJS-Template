import { Hono } from "hono"
import exampleRoutes from "./routes/exampleRute"

const app = new Hono()

app.get("/", (c) => {
  return c.json({
    status: 200,
    message: "Hello Hono!",
  })
})

app.notFound((c) => {
  return c.json({
    status: 404,
    message: "Not found",
    path: c.req.path,
  })
})

app.route("/example", exampleRoutes)

export default app
