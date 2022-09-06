const mongoose = require("mongoose");

// connection creation and creation a new database
mongoose.connect("mongodb://localhost:27017/ashutosh").then( ()=> console.log("connection successfull....")).catch((err) => console.log(err));

// schema
//A mongoose schema defines the structure of the document, default values, validators,etc..

const playlistSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },  
    ctype: String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type : Date,
        default: Date.now
    }
});

// model
// A mongoose modle is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default value, validator, etc., where as a mongoose model provides an interface to the database for creating, queries, updating, deleting records, etc...
// ======== collection creation ==========
const Playlist = mongoose.model("Playlist" , playlistSchema);


// create a document and insert 
const createDocument = async () =>{
    try{
        const MongoDBPlaylist = new Playlist({
            name : "MongoDB",  
            ctype: "database",
            videos : 2,
            author : "Ashutosh",
            active : true,
        });
        const ExpressPlaylist = new Playlist({
            name : "ExpressJS",  
            ctype: "Backend",
            videos : 22,
            author : "Ashutosh",
            active : true,
        });
        const JavaScriptPlaylist = new Playlist({
            name : "JS",  
            ctype: "FrontEnd",
            videos : 50,
            author : "Ashutosh",
            active : true,
        });
        
        const result =  await Playlist.insertMany([MongoDBPlaylist,ExpressPlaylist, JavaScriptPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// createDocument();

// read documents

const getDocument  = async () =>{
//    const result = await Playlist.find({});

//    const result = await Playlist.find({ctype: "Frontend"});

//    const result = await Playlist.find({ctype: "Frontend"})
//    .select({name:1});
    try{
     const result = await Playlist.find({ctype: "Frontend"})
     .select({name:1})
     .limit(1);
     console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();
