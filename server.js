// import npm packages
import "dotenv/config.js"
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import methodOverride from 'method-override'
import './config/database.js'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter } from './routes/skills.js'

// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')

// basic middleware
app.use(function(req, res, next) {
  req.time = new Date().toLocaleTimeString()
  next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(methodOverride('_method'))

// mount imported routes
app.use('/', indexRouter)
app.use('/skills', skillsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
