const kayaks = require('./db.json')


let globalId = 0

module.exports = {
    
    postKayak: (req, res) => {
        let {price, website, image } = req.body

        const newKayak = {
            id: globalId,
            price: price,
            website: website,
            image: image
        }

        kayaks.push(newKayak)

        res.status(200).send(kayaks)
        
        globalId++
        
    },

    deleteKayak: (req, res) => {

        let index = kayaks.findIndex(elem => elem.id === +req.params.id)

        kayaks.splice(index, 1)

        res.status(200).send(kayaks)
    }

}
