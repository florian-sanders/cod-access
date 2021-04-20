const { Picture } = require('../models');
const path = require('path');
const fs = require('fs');

/**
 * @module imageController
 */
module.exports = {
    changeImageAlt: async (req, res, next) => {
        try {
            const imgAlt = req.body.alternative;
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
        catch (err) {
            console.error(err);
            return res.status(500);
        }
    },

    deleteOneImage: async (req, res, next) => {
        try {
            const id = Number(req.params.imageId);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }

            const image = await Picture.findByPk(id);
            if (!image) {
                console.log('miss image');
                return res.status(404).json({
                    errorType: 404,
                    message: 'miss image'
                });
            }

            await image.destroy();
            console.log();
            fs.unlink(path.join(__dirname, `../../upload/${image.path}`), (err) => {
                if (err) {
                    return res.status(500).json({
                        error: err,
                        message: 'error deleting file'
                    });
                }
                
                res.status(200).json({
                    status: "200",
                    response: "success"
                });
            });

        }
        catch (error) {
            console.error(err);
            return res.status(500);
        }
    }
};