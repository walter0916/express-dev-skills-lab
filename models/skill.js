import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  dateStarted: Date,
  mastery: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}