const User = require('../model/userModel')
const CustomError = require('../error/index')
const { StatusCodes } = require('http-status-codes')
const catchAsync = require('../utils/catchAsync')
exports.getAll = async (req, res) => {
    try {
        const doc = await User.find({})

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        })


    } catch (err) {
        console.log('error', err)
        res.send("error", err)
    }
}

exports.postUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        console.log(err)
        res.send('error', err)
    }
}

exports.getOneUser = catchAsync(async (req, res, next) => {

    const { id } = req.params
    const getUser = await User.findById(id)
      

    if (!getUser) {
        throw new CustomError.notFound(
            `no user with id ${id} found`
        )
    }

    res.status(200).json({ user: getUser })


})
