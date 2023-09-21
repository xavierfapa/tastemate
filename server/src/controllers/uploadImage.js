// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: 'dtzcafuec',
//   api_key: 264927463642529,
//   api_secret: 'j68KnBHMcQrdETEjVPz2T5PQoQQ',
// });

// const opts = {
//   overwrite: true,
//   invalidate: true,
//   resource_type: "auto",
// }
   
// export function uploadImage(image) {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(image, opts, (error, result) => {
//       if (result && result.secure_url) {
//         console.log(result.secure_url);
//         return resolve(result.secure_url);
//       }
//       console.log(error.message);
//       return reject({ message: error.message });
//     });
//   });
// }