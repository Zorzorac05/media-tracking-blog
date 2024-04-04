const sequelize = require('../config/connection');
const seedUsers = require('./usersData');
const seedPost = require('./postData');
const seedComments = require('./commentData');
const seedSeen = require('./seenData');
const seedWish = require('./wishData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPost();

  await seedComments();

  await seedSeen();

  await seedWish();

  process.exit(0);
};

seedAll();
