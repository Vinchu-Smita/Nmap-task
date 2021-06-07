const express = require('express')
const router= express.Router();
var CommonCtrl =require("../Controller/CommonCntrl");
 
var multer  = require('multer');

var curTimeStamp = Date.now();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/products/')
    },
    filename: function (req, file, cb) {
      cb(null,curTimeStamp+file.originalname)
    }
  })
   
var upload = multer({ storage: storage });

router.get("/",CommonCtrl.homepage)



router.get("/add-category",CommonCtrl.categorypage)
router.post("/category-action",CommonCtrl.CategoryActionPage)

router.get("/add-product",CommonCtrl.productpage)
router.post("/product-action",upload.single('prImage'),CommonCtrl.ProductActionPage)

router.get("/productuser",CommonCtrl.productshowpage);
router.get("/pagedata/:pageno",CommonCtrl.Productpaginationpage);

router.get("/delete/:showuserId",CommonCtrl.deletepageuser)

router.get("/edit/:showuserId",CommonCtrl.editpageuser)
router.post("/edit",upload.single('prImage'),CommonCtrl.editpage)
// router.put("/edit/:showuserId",CommonCtrl.editpage)
// router.put('/edit/:showuserId', function(req, res, next) {
//   productM.findByIdAndUpdate(
//   req.params.showuserId,
//   {$push: {"downvote": req.body}},
//   function(err, suggestion) {
//     res.render("editpage",suggestion);
//   })
// });

// router.get("/pagination",CommonCtrl.paginationpage);


module.exports =router;