const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newPost = await Post.create({
      user_id: req.session.user_id,
      title: req.body.title,
      post: req.body.content,
    });
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postUdate = await Post.update(
      {
        title: req.body.title,
        post: req.body.content,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(postUdate);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
