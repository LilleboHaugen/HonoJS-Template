import { Hono } from "hono"
import { exampleController } from "../controllers/exampleController"

const exampleRoutes = new Hono()

exampleRoutes.get("/", exampleController)

export default exampleRoutes
