module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/portal',
  secretOrKey: process.env.SECRET_OR_KEY || 's3cr3t'
};

// export const PORT = process.env.PORT || 3000;
// export const SECRET = process.env.SECRET || 'ey-secret';
// mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });



