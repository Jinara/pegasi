import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
var cors = require("cors");

import UsersController from "./src/controllers/users-controller";

class PegasiServer extends Server {
  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());

    const usersController = new UsersController();

    super.addControllers([usersController]);

    console.log("Starting server in development mode");
    const msg = "dev mode"
    this.app.get("*", (req, res) => res.send(msg));
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log("Server started on port: ", port);
    });
  }
}

export default PegasiServer;
