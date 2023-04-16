export default function checkAdmin(req, res, next) {
  if (req.session?.user?.role) {
    return next();
  }
  return res.sendStatus(403);
}
