const express = require("express");
const router = express.Router();
const { formSubmit, getUser } = require("../controller/userController");
const { upload } = require("../middleware/multer");


router.post("/formSubmit", upload.single('file'), formSubmit);
router.get("/getUser", getUser);

/**
 * @swagger
* /api/user/formSubmit:
*   post:
*     description: Create a new user
*     tags: [User]
*     produces:
*       - application/json
*     parameters:
*       - name: name
*         description: User's name
*         in: formData
*         required: true
*         type: string
*       - name: email
*         description: User's email
*         in: formData
*         required: true
*         type: string
*       - name: uri
*         description: User's uri
*         in: formData
*         required: true
*         type: file
*     responses:
*       200:
*         description: User created successfully
*       500:
*         description: Server error
    
 */






module.exports = router;