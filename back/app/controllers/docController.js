const { Doc, Client } = require('../models');

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
            let myClient = null;
            if(req.user){
                myClient = req.user.clientId
            }
            const docs = await Doc.findAll({    
            where: {
                published: true
              },
                include: [
                    'picture',
                    'themes',
                    {model:Client, as:'clients',where:{id: myClient},required:false}
            ]
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
              res.status(400).json({
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
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
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

    newDoc: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            if ((req.body.title || req.body.brief || req.body.slug || req.body.content || req.body.published) === null) {
                return res.status(411).json({
                    error: `some case is empty`
                });
            }
            if(req.body.picture_id === "") {
                req.body.picture_id = null
            }
            if(req.body.published === "") {
                req.body.published = false
            }
            const newDoc = new Doc({
                title: req.body.title,
                brief: req.body.brief,
                slug: req.body.slug,
                content: req.body.content,
                published: req.body.published,
                picture_id: req.body.picture_id,
            });
            await newDoc.save();
            console.log('200 ok', newDoc);
            return res.status(200).json(newDoc);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    changeOneDoc: async (req, res, next) => {
        try {
            const role = req.user.clientRole
            if(role !== 'admin'){
                return res.status(400).json({
                    error: `access only by admin`
                });
            }
            const data = req.body;
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            const result = await Doc.findByPk(id);
            if(typeof data.picture_id !== Number) {
                data.picture_id = result.picture_id;
                // insomnia return always a string??
                // data.picture_id = Number(data.picture_id);
            }
            if(typeof data.published !== Boolean) {
                data.published = result.published;
            }
            for (const properties in data) {
                if (typeof result[properties] !== 'undefined') {
                    result[properties] = data[properties];
                }
            }
            await result.save();
            console.log('200 ok', result);
            return res.status(200).json(result);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    
    addDocToClient: async (req, res, next) => {
        try {
            const client_id = req.user.clientId
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            let doc = await Doc.findByPk(id, {
                include: 'clients'
            });
        
            let client = await Client.findByPk(client_id, {
                include: 'docs'
            })
            await client.addDoc(doc);
            doc = await Doc.findByPk(id, {
                include: 'clients'
            })
            console.log('200 ok', doc);
            return res.status(200).json(doc);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },

    deleteDocToClient: async (req, res, next) => {
        try {
            const client_id = req.user.clientId
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: `the provided id must be a number`
                });
            }
            let doc = await Doc.findByPk(id, {
                include: 'clients'
            });
            let client = await Client.findByPk(client_id, {
                include: 'docs'
            })
            await client.removeDoc(doc);
            doc = await Doc.findByPk(id, {
                include: 'clients'
            })
            console.log('200 ok', doc);
            return res.status(200).json(doc);
        
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
}