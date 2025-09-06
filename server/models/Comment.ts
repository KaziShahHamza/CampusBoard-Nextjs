// models/Comment.js
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        content: {
            type: String,
            required: true,
        },
        isAnonymous: {
            type: Boolean,
            default: false,
        },
        upvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        downvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    },
    {timestamps: true}
);

export default mongoose.model("Comment", commentSchema);