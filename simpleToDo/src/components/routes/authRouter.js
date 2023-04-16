import express from 'express';
import { Staf } from '../../../db/models';
import checkAuth from '../../middlewares/checkAuth';
import noAuthCheck from '../../middlewares/noAuthCheck';
import checkAdmin from '../../middlewares/checkAdmi';

const authRouter = express.Router();
authRouter.get('/', (req, res) => {
  res.render('Layout');
});
authRouter.get('/signup', noAuthCheck, (req, res) => {
  res.render('Layout');
});

authRouter.get('/signin', noAuthCheck, (req, res) => {
  res.render('Layout');
});

authRouter.get('/mainpage', checkAuth, async (req, res) => {
  try {
    const allStaf = await Staf.findAll();
    const initState = { allStaf };
    res.render('Layout', initState);
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
});
authRouter.get('/addstaf', checkAdmin, (req, res) => {
  res.render('Layout');
});
export default authRouter;
