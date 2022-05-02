const { Schema, model } = require("mongoose");
const moment = require("moment");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    len: [1, 280],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
  username: {
    type: String,
    required: true,
    ref: "user"
  },
  reactions: [{ type: Schema.Types.ObjectId, ref: "reaction" }],
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
