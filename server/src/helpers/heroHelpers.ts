import imageModel from "../models/imageModels";
import ResidentalImageModel from "../models/ResidentalImageModels";


export default {
    async HeroImage(image: any, body: any) {
        return new Promise(async (resoleve, reject) => {

            let Imagefiles: any = image
            body.img = Imagefiles
            const data = body
            const resoponse = await imageModel.create(data)
            resoleve(resoponse)
        })
    },

    async ResidentialImage(image: any, body: any) {
        return new Promise(async (resoleve, reject) => {
            let Imagefiles: any = image.path
            const ImageFileName = Imagefiles.map((images: any) => {
                return images.filename
            })
            body.img = ImageFileName
            const data = body
            const resoponse = await ResidentalImageModel.create(data)
            resoleve(resoponse)
        })
    }
}


