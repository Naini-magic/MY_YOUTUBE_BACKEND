class ApiError extends Error {
    constructor(
        statusCode,
        messages= "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = messages
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
} 
export {ApiError}