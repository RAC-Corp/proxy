import { ChemicalServer } from "chemicaljs";
import express from "express";


const { app, listen } = new ChemicalServer({
    default: 'uv',
    uv: true,
    scramjet: false,
    meteor: false,
    rammerhead: false
})
const port = process.env.PORT || 10000;


app.use(
    express.static('src/static', {
        index: 'index.html',
        extensions: ['html']
    })
);
app.serveChemical();


listen(port, () => {
    console.log('proxy on')
})