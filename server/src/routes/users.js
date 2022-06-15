import { Router } from "express";

import { postUsers, postUsersToken } from "../controllers/users.js";

const router = Router();

router.post("/", postUsers);
router.post("/token", postUsersToken);

export default router;
