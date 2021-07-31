const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.get('/:id', (req, res) => { 
  res.json({
    message: 'Welcome to the API!',
    id: req.params.id,  });
});
module.exports = router;
