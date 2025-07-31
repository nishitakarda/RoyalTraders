const allowedOrigins = [
  'http://localhost:5173', // student site
  'http://localhost:5174', // admin site
  process.env.FRONTEND_URL, //  for production
  process.env.ADMIN_URL     // for production
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
