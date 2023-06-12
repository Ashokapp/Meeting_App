const ErrorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode;
    const errMsg = err.message;

    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg
    })
}

module.exports = ErrorHandler