const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("+++++++++++++++++hit\n");
  console.log(req.body);
  console.log(req.session);
  try {
    const newComment = await Comment.create({
      comment: req.body.commentary,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    res.redirect(req.header("Referrer"));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
