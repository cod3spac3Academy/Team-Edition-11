const User = require("../models/register.model");

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Create new user
// @route POST /signup
// @access Private

const createNewUser = asyncHandler(async (req, res) => {
    const { email, password, role, userName } = req.body;
    try {
        const newUser = new User ({
          email,
          password: await bcrypt.hash(password, 10),
          role,
          userName,
          registerAt: new Date(),
          lastLogin: new Date(),
        });
        newUser
          .save()
          .then((newUser) =>
            res.status(201).json({
              status: "User created successfully",
              newUser:{
                email: newUser.email,
                role: newUser.role,
              },
              error: null,
            })
          )
          .catch((error) => {
            if (error.code == 11000) {
               return res.status(409).json({
                status: "failed",
                data: null,
                error:
                  "This email is already registered"
              });
            }
            return res
              .status(400)
              .json({ status: "failed", data: null, error: error.message });
          });
      } catch (error) {
        if (error.message == "data and salt arguments required") {
          res.status(422).json({
            status: "failed",
            data: null,
            error:
              "Password is required, please insert a valid password and try again",
          });
        }
      }
});



module.exports = { createNewUser };
