const productModel=require('../modules/productModule')
exports.getProducts=async (req, res, next)=>{

    const product=await productModel.find({})
    res.json({
        success: true,
        product
    })

}

exports.getSingleProducts=async (req, res, next)=>{


    try {
        const product = await productModel.findById(req.params.id)
        res.json({
        success: true,
        product
    })
    } catch (error) {
        res.status(404).json({
            success: false,
            message:'This Id not found'
        })
        
    }
    

}