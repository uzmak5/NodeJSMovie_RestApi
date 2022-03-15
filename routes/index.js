import express from 'express';
const router = express.Router();
import { registerController, loginController, userController, refreshController, movieController } from '../controllers';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);


router.post('/movies/items', movieController.getMovies);

router.post('/movies', [auth, admin], movieController.store);
router.put('/movies/:id', [auth, admin], movieController.update);
router.delete('/movies/:id', [auth, admin], movieController.destroy);
router.get('/movies', movieController.index);
router.get('/movies/:id', movieController.show);



export default router;