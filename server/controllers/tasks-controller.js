import HttpError from "../models/http-error.js";
//import * as uuid from 'uuid';
import Inventory from "../models/postInventory.js";
//request we made, and then saving that body to somewhere
export const getitems = async (req, res, next) => {
    let items;
    try {
        items = await Inventory.find({});
    }
    catch(err){
        const error = new HttpError("Creating task failed, please try again", 500);
        return  next(error);
    }
     
    if (!items || items.length === 0){
        return next(
            new HttpError("Could not find tasks", 404)
        );
    } 
    res.json({inventory: items.map(item => item.toObject({getters: true}))});
};

export const postNewTask = async (req, res, next) => {
    const {title} = req.body;
    const createdInventory = new Inventory({title});
    try {
                await createdInventory.save(createdInventory);
    }
    catch (err){
        const error = new HttpError("Creating task failed, please try again", 500);
        return  next(error);
    }
    
    res.status(201).json({message: createdInventory});

};



