const is_admin = (res, req, next) => {
    if (req.user.is_admin) {
        next()
    }
    else {
        res.status(400).send({ "error": "You are not authorized" })
    }
}

module.exports = is_admin