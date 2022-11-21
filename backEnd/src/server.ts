import app from "./app";
import "./database/database";

app.listen(app.get("port"), () =>
  console.log("server started on port", app.get("port"))
);
