const httpStatus = require("http-status");

const validate = (schema) => (req, res, next) => {

    const { value, error } = schema.validate(req.body);

    if (error) {
        // error.details = [{ message: '' }, { message: '' }]
        const errorMessage = error.details?.map((detail) => detail.message).join(', ');
        // errorMessage = 'message1, message2'
        res.status(httpStatus.BAD_REQUEST).json({ message: errorMessage });
        return;
    }
    Object.assign(req, value);
    return next();
}


module.exports = validate;