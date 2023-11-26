import { Schema, model } from "mongoose";




const ImgResidentialSchema = new Schema({
    img: {
        type: [String],
    },
    category: {
        type: String
    },
    hedding: {
        type: String
    },
    description: {
        type: String
    }
})

const ResidentalImageModel = model('ResidentialImg', ImgResidentialSchema)
export default ResidentalImageModel