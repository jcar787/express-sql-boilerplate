import { Router } from 'express';
import { getAllTests, getTest } from './test.controller';

const router = Router();

router.get('/', getAllTests);
router.get('/:id', getTest);

export default router;
