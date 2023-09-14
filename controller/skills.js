import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then (skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
    })
}
function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.mastery = false 
  Skill.create(req.body)
  .then(skills => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
    })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
    })
}
export {
  index,
  newSkill as new,
  create,
  show
}