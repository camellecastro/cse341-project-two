const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Laptop and Smartphone API",
    description: "Laptops and Smartphones API",
  },
  host: "cse341-project-two.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
