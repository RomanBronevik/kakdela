const typeorm = require('typeorm');
const User = require("../model/User");

exports.index = async function (req, res) {
    const userRepository = typeorm
        .getConnection()
        .getRepository(User);

    const user = new User();
    user.username = 'Guest';

    userRepository.save(user)
        .then(() => console.log('User created'))
        .catch( err => console.log(err));

    res.send('New user created.');
};