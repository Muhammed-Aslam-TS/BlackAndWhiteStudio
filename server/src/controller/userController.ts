import { Request, Response } from "express";
import imageModel from "../models/imageModels";
import heroHelpers from "../helpers/heroHelpers";
import ResidentialHelpers from "../helpers/ProjectsHelpers";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBW6nKABbPUr6XVE0yFWc3sZqdMhvcuJuc",
    authDomain: "black-and-white-file-store.firebaseapp.com",
    projectId: "black-and-white-file-store",
    storageBucket: "black-and-white-file-store.appspot.com",
    messagingSenderId: "348453775435",
    appId: "1:348453775435:web:6523015a164c3173e405ce",
    measurementId: "G-8PRYFRY2FT"
};

initializeApp(firebaseConfig);
const storage = getStorage();



export default {
    async heroImage(req: Request, res: Response) {
        try {
            const storageRef = ref(storage, `black-and-white-files/${req.file?.originalname}`);
            uploadBytes(storageRef, req.file?.buffer as Buffer).then(async (snapshort) => {
                const imageUrl = await getDownloadURL(snapshort.ref);
                console.log('__________________________________');
                console.log(imageUrl);
                console.log('__________________________________');
                const body = req.body
                await heroHelpers.HeroImage(imageUrl, body);
                res.status(200).json({ message: "Course data received successfully" });
            });
        } catch (error) {
            res.status(500).json({ error: 'Image upload failed' });
        }
    },


    async getHeroImage(req: Request, res: Response) {
        try {
            const images = await imageModel.find({}).sort({ _id: -1 });
            res.json(images);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve images' });
        }
    },



    async AddResidentialImage(req: Request, res: Response) {
        try {
            const data = req.files
            const body = req.body
            await ResidentialHelpers.ProjectsImages(data, body);
            res.json('ResidentailImage uploaded');
        } catch (error) {
            res.status(500).json({ error: 'Image upload failed' });
        }
    },



    async deleteBannerImage(req: Request, res: Response) {
        try {
            const imageId = req.query.imageId as string
            console.log(imageId);
            await imageModel.findOneAndDelete({_id:imageId})
            res.json('Delete Banner Image');
        } catch (error) {
            res.status(500).json({ error: 'Image Delete failed' });
        }
    },


    
}



