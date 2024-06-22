


export const signup=async(req,res,next)=>{
const {username,email,password}=req.body

if(!username||!email||!password){
    return next(errorHandler(404,'required all fields'))
}

}