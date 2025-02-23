const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Movies', moviesSchema)
