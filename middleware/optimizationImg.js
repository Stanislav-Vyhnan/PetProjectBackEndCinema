import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const optimizationImg = async (req, file, cb) => {
  const img = req.file.filename;

  await imagemin([`images/${img}`], {
    destination: 'images',
    plugins: [
      imageminMozjpeg({
        quality: [70],
      }),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });
  cb(null);
};

export default optimizationImg;
