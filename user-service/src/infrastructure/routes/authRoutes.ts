import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers/index";

export const authRoutes = (dependencies: IDependencies) => {
  const { signup } = controllers(dependencies);

  const router = Router();

  router.route("/signup").post(signup);

  // router.route("login").post(login);

  // router.route("/logout").get(logout);

  return router;

};

