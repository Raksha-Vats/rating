import { Router } from "express";

import {
    storeCodechef,
    getAllCodechef,
    ratingByUserName,
    updateRating
} from "../controllers/codechef.controller.js";

const router = Router();

router.post('/storeCodechef', storeCodechef);
router.get('/getAllCodechef', getAllCodechef);
router.get('/ratingByUserName/:username', ratingByUserName);
router.put('/updateRating/:username', updateRating);

export default router;
