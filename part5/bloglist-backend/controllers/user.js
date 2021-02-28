const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
	const { body } = request

	if (!body.password) {
		return next({ name: 'ValidationError', message: 'Password is required' })
	}
	if (body.password && body.password.length < 3) {
		return next({ name: 'ValidationError', message: 'Password has to be at least 3 characters long' })
	}

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(body.password, saltRounds)

	const user = new User({
		username: body.username,
		name: body.name,
		passwordHash,
	})

	const savedUser = await user.save()

	response.json(savedUser)
})

usersRouter.get('/', async (request, response) => {
	const users = await User.find({}).populate('blogs')
	response.json(users)
})

module.exports = usersRouter