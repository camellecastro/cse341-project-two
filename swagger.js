const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Laptop and Smartphone API",
    description: "Laptops and Smartphones API",
  },
  host: "localhost:8000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
