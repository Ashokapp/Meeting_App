const mongoose = require("mongoose")

const meetingSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    invitations: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: ["accept", "reject", "pending"],
            default: "pending"
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
module.exports = new mongoose.model("Meeting", meetingSchema)