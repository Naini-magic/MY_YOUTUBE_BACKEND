import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";





const videoScheam = new Schema(
    {
       videoFile :{
        type : String, //cloudinary url
        required: true
       },
       thumbnail: {
        type : String, //cloudinary url
        required :true
       },
       title: {
        type : String, 
        required: ture
       },
       description:{
        type : String , 
        required : true
       },
       duration: {
        type : Number,
        required: true 
       },
       views: {
        type : Number,
        default: 0
       },
       isPublished : {
        type : Boolean,
        dafault: true
       },
       owner: {
        type : Schema.Type.ObjectId,
        ref : "User"
       }
}, 
{timestamps: true})

videoScheam.plugin(mongooseAggregatePaginate)

export const Video =  mongoose.model("Video" , videoScheam)