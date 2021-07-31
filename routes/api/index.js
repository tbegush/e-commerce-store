const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.get('/', (req, res) => { 
   res.send("hello!!!!") 
});
router.post('/', (req,res) => {
    // res.status(201).send("Hello " + req.body.name )
res.status(201).json({status: 201, message: "we are cool"});
} );
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
