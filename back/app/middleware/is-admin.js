const isAdmin = (req, res, next) => {
    const role = req.user.clientRole
    if(role !== 'admin'){
        return res.status(400).json({
            error: `access only by admin`
        });
    }
    next();
}
  
module.exports = isAdmin;