import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const optimizationImg = async () => {
  await imagemin(['images/*.{jpg,png}'], {
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

  console.log('Images optimized');
  return;
};

export default optimizationImg;
