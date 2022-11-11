const router = require('express').Router();
const ProductController = require('../controllers/productController');
const CategoryController = require('../controllers/categoryController');


router.get('/products',ProductController.getProducts);
router.get('/categories',CategoryController.getCategories);
router.get('/productsByCategory/:id',ProductController.getProductsByCategory);
router.get('/productsBySearch/:name',ProductController.getProductsBySearch);


module.exports = router;