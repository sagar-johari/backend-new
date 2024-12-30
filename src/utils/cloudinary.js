import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function(localFilePath) {
    try {
        // Configuration
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        
        // Upload the image
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log(uploadResult);
        fs.unlinkSync(localFilePath);
        
    } catch (error) {
        // Log the error
        console.log('Upload failed:', error);

        // Delete the file only if there's an error
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
    }
})(process.argv[2]); // Pass the localFilePath from command line argument
