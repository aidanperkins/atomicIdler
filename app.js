var express = require("express");
var fs = require('fs').promises;
const err = "oopsy woopsy"


const server = express();
server.set("view engine", "ejs");
server.set("views", __dirname+"/views/")
server.engine("html", require("ejs").renderFile);
server.use(express.static(__dirname+"/public/"))
server.get("/", (req,res) => {





    res.render(__dirname+"/public/myhtmlstuff.ejs");
})
server.listen(1337, () => {
    console.log("Server is running at http://localhost:1337");
});

class Universe {
    universe_cap = Number.MAX_SAFE_INTEGER
    photons = 9000000000000000;
    quarks = 0;
    nuetrons = 0;
    protons = 0;
    electrons = 0;
    hydrogen = 0;
    constructor() {
        console.log("uuuuh");
        // Click event for the button
        document.getElementById('accelerateBtn').addEventListener('click', () => this.earnResource());
        // Auto-earning resources every 10 seconds
        setInterval(() => this.passiveEarning, 100);
    }
    
    updateResources() {
        document.getElementById('photons').innerText = this.photons;
        document.getElementById('quarks').innerText = this.quarks.toFixed(2);
        document.getElementById('nuetrons').innerText = this.nuetrons.toFixed(2);
        document.getElementById('protons').innerText = this.protons.toFixed(2);
        document.getElementById('electrons').innerText = this.electrons.toFixed(2);
        document.getElementById('hydrogen').innerText = this.hydrogen.toFixed(2);
    }
    earnResource() {
        this.photons -= 100
        this.quarks += 1
        this.updateResources();
    }
    passiveEarning() {
        if (this.photons >= 1) {
            this.photons -= 1
            this.quarks += 0.01
        }
        this.updateResources();
    }
}

