import { Request, Response } from "express";
import ProjectsHelpers from "../helpers/ProjectsHelpers";
import ResidentalImageModel from "../models/ResidentalImageModels";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";



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

    async AddProjects(req: Request, res: Response) {
        // try {

        const files: File[] = req.files as unknown as File[];            // console.log(req.files[0]);
        const downloadURLs: string[] = [];
        const uploadPromises = files.map(async (file: any) => {
            // console.log(file, "get one image");
            const { originalname, buffer } = file;

            const storageRef = ref(storage, `ProjectsImages/${originalname}`);
            const snapshot = await uploadBytes(storageRef, buffer);
            const downloadURL = await getDownloadURL(snapshot.ref);
            downloadURLs.push(downloadURL);
            console.log(`Image '${originalname}' uploaded successfully.`);


            // uploadBytes(storageRef, file.buffer as Buffer).then(async (snapshort) => {
            //     await getDownloadURL(snapshort.ref)


            //     const body = req.body
            //     // await ProjectsHelpers.ProjectsImages(imageUrl, body);
            //     // res.status(200).json({ message: "Course data received successfully" });

            // })

        })


        Promise.all(uploadPromises)
            .then(async() => {
                console.log("All images uploaded successfully.");
                console.log(downloadURLs);

                const body = req.body;
                await ProjectsHelpers.ProjectsImages(downloadURLs, body);
                res.status(200).json({ message: "Course data received successfully" });
            })
            .catch((error) => {
                console.error("Error uploading files:", error);
            });








        // const storageRef = ref(storage, `ProjectsImages/${req.file}`);
        // uploadBytes(storageRef, img.buffer as Buffer).then(async (snapshort) => {
        //     const imageUrl = await getDownloadURL(snapshort.ref);
        //     console.log('__________________________________');
        //     console.log(imageUrl);
        //     console.log('__________________________________');
        //     const body = req.body
        //     await ProjectsHelpers.ProjectsImages(imageUrl, body);
        //     res.status(200).json({ message: "Course data received successfully" });
        // });

        //     const data = req.files
        //     console.log(data);

        //     const body = req.body
        //     await ProjectsHelpers.ProjectsImages(data, body);
        //     res.json('ResidentailImage uploaded');
        // } catch (error) {
        //     res.status(500).json({ error: 'Image upload failed' });
        // }




    },


    async getProjectsImages(req: Request, res: Response) {
        try {
            // const id = '6535e5c2a6fd5d891e80fc4d' as unknown as ObjectId
            const response = await ResidentalImageModel.find({})
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve residential images' });
        }
    },


    async getResidentialGalleryImages(req: Request, res: Response) {
        try {
            const imageId = req.query.imageId
            const response = await ResidentalImageModel.findOne({ _id: imageId })
            console.log(response, 'residential___________________');
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve residential images' });
        }
    },
    async deleteProjects(req: Request, res: Response) {
        try {
            const imageId = req.query.imageId as string
            console.log(imageId);
            await ResidentalImageModel.findOneAndDelete({_id:imageId})
            res.json('Delete project');
        } catch (error) {
            res.status(500).json({ error: 'projects Delete failed' });
        }
    },



}


