import fs from "fs";

export function importPizza(src){
    try{
        let pizza = fs.readFileSync(src);
        pizza = JSON.parse(pizza);
        return pizza;
    }catch (err){
        return 0;
    }
}