import { Router } from 'express'
import * as skillsCtrl from '../controller/skills.js'

const router = Router()

// GET localhost:3000/users
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:skillId', skillsCtrl.show)
router.post('/', skillsCtrl.create)

export { router }
