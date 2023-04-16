import { Staf } from '../../db/models';

const checkPrivMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundStaf = await Staf.findOne({ where: { id } });
    if (foundStaf?.userId === req?.session?.user?.id) {
      return next();
    }
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
  return res.sendStatus(401);
};

export default checkPrivMiddleware;
