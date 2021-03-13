const {
    Picture
} = require('../models');

module.exports = {
    changeImageAlt: async (req, res, next) => {
        try {
            const imgAlt = req.body.alternative;
            const role = req.user.clientRole
            if (role !== 'admin') {
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const id = Number(req.params.imageId);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }

            const status = await Picture.update(
                { alternative: imgAlt },
                { where: { id: id } },
            );

            console.log(status);
            res.status(200).json({
                message: "updated",
            })
        }
        catch(err) {
            console.error(err);
            return res.status(500);
        }
    }
};