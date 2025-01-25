import type { Context } from "hono"

export const exampleController = (c: Context) => {
  try {
    return c.json({ status: 200, message: "Example endpoint" })
  } catch (error) {
    console.log(error)
    return c.json({ status: 500, message: "Internal Server Error" })
  }
}
