import express from 'express';
import { getitems, postNewTask, editTask } from '../controllers/tasks-controller.js';

const router = express.Router();

router.get('/', getitems);
router.post('/',postNewTask);
router.patch('/:id', editTask);

export default router;