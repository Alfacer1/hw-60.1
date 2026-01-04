exports.getAllUsers = (req, res) => res.send("Get users route");
exports.createUser = (req, res) => res.send("Post users route");
exports.getUserById = (req, res) => res.send(`Get user by Id route: ${req.params.userId}`);
exports.updateUser = (req, res) => res.send(`Put user by Id route: ${req.params.userId}`);
exports.deleteUser = (req, res) => res.send(`Delete user by Id route: ${req.params.userId}`);