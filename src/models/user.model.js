const mongoose = require("mongoose");
const { USER_TYPE_ADMIN, USER_TYPE_USER } = require("../constant/enum");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require:false,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },
     userType: {
      type: String,
      required: true,
      enum:[USER_TYPE_ADMIN,USER_TYPE_USER],
      default: USER_TYPE_USER
    },

    referralCode: {
      type: String,
      unique: true,
      // required: true,
    },

    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Device level tracking (fraud control)
    deviceId: {
      type: String,
      default: null,
    },

    // User ban / fraud detection
    isBlocked: {
      type: Boolean,
      default: false,
    },

    // For analytics
    lastLogin: {
      type: Date,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
