import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

export const upload = multer({ storage: storage });

export const middleware1 = (req, res, next) => {
	let rol = req.query.rol;
	if (rol == 'admin') {
		next();
	} else [res.send('no tienes permisos')];
};

export const middleware2 = (req, res, next) => {
	console.log('el usuario es admin');
	next();
};
