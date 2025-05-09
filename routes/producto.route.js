

function productoRouter(express){
    
    const router = express.Router()
    const { getAll, getById, create, update, remove } = require('../controllers/producto.controller.js')

    router.get('/', getAll)
    router.get('/:id', getById)
    router.post('/', create)
    router.put('/:id', update)
    router.delete('/:id', remove)

    return router
}


module.exports = productoRouter