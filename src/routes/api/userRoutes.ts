import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController.js';


router.route('/')
.get(getAllUsers)
.post(createUser)
;

router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)
;

router.route('/:userId/friends')
.post(addFriend)

router.route('/:userId/friends/:friendsId')
.delete(removeFriend)
;

export { router as userRouter };