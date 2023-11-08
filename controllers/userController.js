const CustomError = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermissions,
} = require("../utils");

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).select("-password");

  if (!user) {
    throw new CustomError.BadRequestError(`User with id: ${id} not found!`);
  }
  checkPermissions(req.user, user._id);

  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new CustomError.BadRequestError(
      "Please, provide both name and email!"
    );
  }
  console.log();

  const user = await User.findByIdAndUpdate(
    { _id: req.user.userId },
    { name, email },
    {
      new: true,
      runValidators: true,
    }
  );
  // user.email = email;
  // user.name = name;

  // await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res
    .status(StatusCodes.OK)
    .json({ msg: "User details updated successfully!" });
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("Please, provide both values!");
  }

  const user = await User.findOne({ _id: req.user.userId });

  const passwordMatched = user.comparePassword(oldPassword);

  if (!passwordMatched) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials!");
  }

  user.password = newPassword;

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Password changed successfully!" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
