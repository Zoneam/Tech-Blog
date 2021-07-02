const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postsData = require("./postsData.json");
const commentData = require("./commentData.json");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postsData, {});
  await Comment.bulkCreate(commentData, {});
  process.exit(0);
};

seedDatabase();
