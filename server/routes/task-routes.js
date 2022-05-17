import express from 'express';
import { getitems, postNewTask } from '../controllers/tasks-controller.js';

const router = express.Router();

router.get('/', getitems);
router.post('/',postNewTask);

export default router;