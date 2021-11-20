import { randomBytes } from 'crypto';
import { resolve } from 'path';
import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = randomBytes(10).toString('hex');
      const fileName = `${fileHash} - ${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
