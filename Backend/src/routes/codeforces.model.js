import { Router } from "express";
import {
  storeCodeforces,
  getAllCodeforces,
  ratingByUserName,
  updateRating,
} from "../controllers/codeforces.controller.js";


const router = Router();

router.post("/storeCodeforces", storeCodeforces);
router.get("/getAllCodeforces", getAllCodeforces);
router.get("/ratingByUserName/:username", ratingByUserName);
router.put("/updateRating/:username", updateRating);

export default router;


