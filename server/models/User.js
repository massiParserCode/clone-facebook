const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },

    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      text: true,
      unique: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },

    pictrue: {
      type: String,
      default: "http://localhots:3000/images/default_pic.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "generder is requried"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trime: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trime: true,
    },

    bDay: {
      type: Number,
      required: true,
      trime: true,
    },
    verified: {
      type: Boolean,
      required: true,
    },
    firends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },

      job: {
        type: String,
      },
      workPlace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      colleage: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometOwn: {
        type: String,
      },
      realtionShip: {
        type: String,
        enum: ["Single", "In a realtionShip", "Marrid", "Divorced"],
      },
      instagram: {
        type: String,
      },
    },
    savePosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
