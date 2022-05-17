import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {type: String, required: true}
});

const Inventory = mongoose.model('Inventory', postSchema);

export default Inventory;