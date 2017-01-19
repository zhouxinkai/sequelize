const Seq = require('sequelize');
const db = require('./models');

const Users = db.models.Users;
const Pets = db.models.Pets;

async function test() {
  await db.sync();
  // 同步所有已定义的模型到数据库中,即建立对应的表,必须先sync完，才能往表里添加行
  
  const now = new Date();
  await Users.create({
    name: 'brucezhou1',
    phone: '18710629437',
    mis: 'zhouxinkai',
    expressCompany: 'company',
    time: now,
    pickupCode: '2',
    status: 2,
  });

  const dog = await Pets.create({
      id: 'd-' + now.getTime(),
      name: 'Odie',
      gender: false,
      birth: new Date('2008-08-08'),
      createdAt: now,
      updatedAt: now,
      version: 0
  });
  console.log('created: ' + JSON.stringify(dog, null, 2));

  const users = await Users.findAll();
  console.log(JSON.stringify(users, null, 2));
}
test().then(() => console.log('success')).catch(error => console.log(error));
