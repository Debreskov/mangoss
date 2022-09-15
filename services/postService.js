const Post = require("../models/postModel");
const PosteCreateService = (data) => {
  return Post.create(data);
};
const getPostsService = () => {
  return Post.find();
};

const getPostsByIDService = (id) => {
  return Post.findById({ _id: id }).select("postContent -_id");
};

const updatePostService = (data, id) => {
  return Post.findByIdAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  });
};

const deletePostService = (id) => {
  return Post.findByIdAndDelete({ _id: id });
};

module.exports = {
  PosteCreateService,
  getPostsByIDService,
  getPostsService,
  deletePostService,
  updatePostService,
};
