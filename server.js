const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//AuthRouting
const AuthRouting = require('./Routes/AuthRoutes');
const ProductRoutes = require('./Routes/AdminRoutes/ProductRoutes');
const dotenv = require('dotenv')
dotenv.config();

const UserProductsRoutes = require('./Routes/UserRoutes/ProductRoutes');
const UserCartRoutes = require("./Routes/UserRoutes/CartRoutes");
const UserCheckoutRoutes = require("./Routes/UserRoutes/CheckoutRoutes");
console.log('MONGOOSE_URL:', process.env.MONGOOSE_URL);
console.log('PORT:', process.env.PORT);
console.log('CLOUD_NAME:', process.env.CLOUD_NAME);
console.log('API_KEY:', process.env.API_KEY);
console.log('API_SECRET_KEY:', process.env.API_SECRET_KEY);


//Mongo Connection
mongoose.connect(process.env.MONGOOSE_URL)
.then(() => console.log("mongoConnected Successfully"))
.catch((e) => console.log(`Error: ${e}`));

//Initalize express in variable and Also Port;
const app = express();
const port = process.env.PORT || 5000;

//intialize CORS
app.use(cors({
    origin: "https://frontend-for-ecommerce.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}));

//Cookie Parser
app.use(cookieParser());

//Transfer data from backend to front end in json format
app.use(express.json());

//AuthRouting
app.use('/api/auth', AuthRouting);
app.use('/products', ProductRoutes);
app.use('/user/products', UserProductsRoutes);
app.use('/user/cart', UserCartRoutes);
app.use("/user/checkout", UserCheckoutRoutes);
// /api/auth/register

//Listen server on Port
app.listen(port,() => console.log(`Server listen on ${port}`));