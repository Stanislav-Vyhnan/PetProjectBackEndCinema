import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: async (req, file, cb) => {
    const folder = 'images/';
    console.log(req.body);
    fs.readdir(folder, (err, files) => {
      const format = file.originalname.split('.')[1];
      const lastIndex = files.reduce((result, nextVal) => {
        const index = +nextVal.replace(/[^0-9]/g, '');
        return index > result ? index : result;
      }, -1);
      const name = `poster${lastIndex + 1}.${format}`;
      cb(null, name);
    });
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default multer({ storage, fileFilter });
