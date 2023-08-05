import { login, register, logout } from "../controllers/auth/auth.controller";

export const routes = (router) => {
  router.post("/auth/login", login),
    router.post("/auth/register", register),
    router.post("/auth/logout", logout);
};
