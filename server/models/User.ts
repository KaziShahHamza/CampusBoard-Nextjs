import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String
        },
        universityId: {
            type: String,
            unique: true,
            required: true
        },
        department: {
            type: String,
        },
        batch: {
            type: number,
        },
        isAlumni: {
            type: boolean,
        },
    },
    {timestamps: true}
);

export default mongoose.model("User", userSchema);
