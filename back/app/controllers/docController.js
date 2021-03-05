const { Doc } = require('../models');

module.exports = {

    getAllDocs: async (req, res) => {

        try{
            const docs = await Doc.findAll({
                include: ['picture','clients','themes']
              });
            console.log('docs', docs);
            return res.status(200).json(
            docs
            );
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

    getAllDocsPublished: async (req, res) => {

        try{
            const docs = await Doc.findAll({    
            where: {
                published: true
              },
                include: ['picture','clients','themes']
              });
            console.log('docs', docs);
            return res.status(200).json(
            docs
            );
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

    getOneDoc: async (req, res, next) => {

        try{
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const doc = await Doc.findByPk(id, {
                include: ['picture','clients','themes']
              });
            console.log('doc', doc);
            return res.status(200).json(
                doc
                );
        } catch(error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteOneDoc: async (req, res, next) => {
        
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const doc = await Doc.findByPk(id);
            
            if (!doc) {
                console.log('miss doc');
                return res.status(404).json({
                  errorType: 404,
                  message: 'miss doc'
                });
            }
        
            await doc.destroy();
            return res.json('doc delete');
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

}