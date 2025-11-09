// const {model} = require("mongoose");
// const {PositionsSchema} = require("../schemas/PositionsSchema");
// const  {PositionsModel} = model("position",PositionsSchema);
// module.exports={PositionsModel};
const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// Define the model class (without `new`)
const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };
