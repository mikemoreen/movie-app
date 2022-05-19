import jwt from "jsonwebtoken";

const secret = 'secret';

const auth = async (req, res, next) => {
  console.log("token")
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    let decodedData;
    decodedData = jwt.verify(token, secret);
    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log('i mistake')
    console.log(error);
  }
};

export default auth;