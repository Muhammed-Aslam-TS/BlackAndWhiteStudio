import ResidentalImageModel from "../models/ResidentalImageModels";



export default {

    async ProjectsImages(image: any, body: any) {
        return new Promise(async (resoleve, reject) => {
console.log(image);

            const ImageFileName = image.map((images: any) => {
                return images
            })
            body.img = image
            const data = body
            const response = await ResidentalImageModel.create(data)
            console.log(response,'___________________________aaayehe');
            
            resoleve(response)
        })
    }
}
