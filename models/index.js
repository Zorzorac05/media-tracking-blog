const Users = require('./Users');
const Post = require('./Post');
const Comments = require('./Comments');
const Movies_seen = require('./Movies_seen');
const Movies_wishlist = require('./Movies_wishlist');

Comments.belongsTo(Post);
Comments.belongsTo(Users);
Post.belongsTo(Users);

Post.hasMany(Comments);
Users.hasMany(Comments);
Users.hasMany(Post);

Movies_seen.belongsTo(Post);
Post.hasOne(Movies_seen);

Movies_wishlist.belongsTo(Post);
Post.hasOne(Movies_wishlist);

module.exports = { Users, Post, Comments, Movies_seen, Movies_wishlist };