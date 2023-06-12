const user = require("../services/user")

let userData = function (data, message) {
  return {
    success: true,
    message: message,
    data: data
  }
}

module.exports = {
  userRegister: async (req, res, next) => {
    try {
      const params = { ...req.body, ...req.params }
      const userdata = await user.userRegister(params)
      res.send(userData(userdata, "User Registered"))
    } catch (error) {
      next(error)
    }
  },

  userLogin: async (req, res, next) => {
    try {
      const params = { ...req.body, ...req.params }
      const userToken = await user.userLogin(params)
      res.send(userData(userToken, "User Login"))
    } catch (error) {
      next(error)
    }
  },
  viewAllUser: async (req, res, next) => {
    try {
      const userAll = await user.viewAllUser()
      res.send(userData(userAll, "Show All User"))
    } catch (error) {
      next(error)
    }
  }
}
