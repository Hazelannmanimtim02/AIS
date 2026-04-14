// import express from "express";
// import 'dotenv/config.js';
// import bookRoutes from "./routers/BookRoutes.js";
// import cors from "cors";

// //create express app
// const app = express();


// //enable cors tp fronted
// let corsOptions = {
//     origin: process.env.ORIGIN
// }

// //middleware
// app.use(express.json());
// app.use(cors(corsOptions));





// //middleware
// app.use(express.json());

// //this is use to log the request on the console
// app.use((req, res, next)=>{
//     console.log(req.path, req.method);
//     next();
// })

// const port = 5000;

// app.use('/book',bookRoutes);

// try{
//     app.listen(process.env.PORT|| 3000, ()=>{
//         console.log(`Listening to port ${process.env.PORT || 3000}...`);
//     });
// }catch(e){
//     console.log(e);
// }*/






// import express from "express";
// import 'dotenv/config.js';
// import studentRoutes from "./routers/studentRoutes.js";
// import cors from "cors";
// import bookRoutes from "./routers/BookRoutes.js";
// import UserRoutes from "./routers/UserRoutes.js";

// //create express app
// const app = express();

// //enable cors to fronted
// let corsOptions = {
//     origin: process.env.ORIGIN
// }

// //middleware
// app.use(express.json());
// app.use(cors(corsOptions));


// //middleware
// app.use(express.json());

// const port = 5000;
// app.use('/student',studentRoutes);
// app.use('/book', bookRoutes);
// app.use('/user', UserRoutes);


// try{
//     app.listen(process.env.PORT|| 3000, ()=>{
//         console.log(`Listening to port ${process.env.PORT || 3000}...`);
//     });
// }catch(e){
//     console.log(e);
// }


import express from "express";
import cors from "cors";
import "dotenv/config.js";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", UserRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});








// import express from "express";
// import 'dotenv/config.js';
// import userRoutes from './routes/UserRoutes.js'; 
// import studentRoutes from "./routes/UserRoutes.js";
// import userRoutes from "./routes/UserRoutes.js";
// import cors from "cors";



// // Create express app
// const app = express();

// // CORS options
// const corsOptions = {
//   origin: process.env.ORIGIN || "*" // fallback to allow all if ORIGIN not set
// };

// // Middleware
// app.use(express.json());
// app.use(cors(corsOptions));

// // Logger middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });

// // Routes
//  app.use('/book', bookRoutes);
//  app.use('/student', studentRoutes);
// app.use('/user', userRoutes);

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });











