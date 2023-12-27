// import { upload } from './../middleware/multer';
import express from "express";
import userController  from "../controller/userController";
import  upload  from "../middleware/multer";
import ResidentialController from "../controller/ProjectsController";

const router = express.Router();


router.post('/addImages', upload.single('file'), userController.heroImage);
router.get('/getImages',  userController.getHeroImage);
router.post('/addResidentialImages', upload.array('file',100), ResidentialController.AddProjects);
router.get('/getResidentialImages',  ResidentialController.getProjectsImages);
router.get('/getResidentialGalleryImages',  ResidentialController.getResidentialGalleryImages);
router.delete('/DeleteBannerImage',  userController.deleteBannerImage);
router.delete('/deleteProjects',  ResidentialController.deleteProjects);



export default router; 