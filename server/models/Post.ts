

const postSchema = new mongoose.Schema(
    {
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        isAnonymous: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["COMPLAINT", "REQUEST", "EVENT"],
            reuired: true,
        },
        category: {
            type: String,
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
        comments: [commentSchema],
        isSolved: {
            type: Boolean,
            default: false,
        },
        detectedSlang: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Post", postSchema);
