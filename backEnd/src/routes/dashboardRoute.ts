import { Router } from "express";
import * as reqControler from "./dashboardControllers";
import app from "../app";
const router = Router();

// LastFetch
router.get("/get-lastFetch", reqControler.getLastFetch);
router.post("/update-lastFetch", reqControler.updateLastFetch);

// Receive Hihlights from Readwise
router.post("/receive-highlights", reqControler.receiveHL);
// router.get('/highlights/:id', reqControler.fetchHL) //requiere id
// router.put('/highlights/:id', )

// router.post('/highlights', reqControler.createHL)
// router.delete('/highlights', reqControler.deleteHL)
// router.put('/highlights/:id', reqControler.updateHL) //actualizar
export default router;
