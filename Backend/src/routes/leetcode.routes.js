import { storeLeetcode, getAllLeetcode, ratingByUserName, updateRating } from "../controllers/leetcode.controller.js";
import { Router } from "express";

const router = Router();

router.post('/storeLeetcode', storeLeetcode);
router.get('/getAllLeetcode', getAllLeetcode);
router.get('/ratingByUserName/:username', ratingByUserName);
router.put('/updateRating/:username', updateRating);

export default router;