import { Schema, model } from "mongoose";


const ImageSchema = new Schema({
    img: {
        type:String
    },
    name:{
        type:String
    }
})

const imageModel = model('heroImg', ImageSchema)
export default imageModel