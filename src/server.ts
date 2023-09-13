import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Server is running");
    app.listen(3000, () => {
      console.log("Servidor executando");
    });
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization", err);
  });
