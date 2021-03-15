const express = require("express");
const wrap = require("../../common/errors/async-error-wrapper");
const userService = require("./user.service");
const { checkDuplicateUsernameOrEmail } = require("../../middleware/verifySignUp");

const router = express.Router();
router.use(wrap(async (req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })
);

router.post(
    "/auth/signup",
    [
        checkDuplicateUsernameOrEmail
    ],
    wrap(async (req, res) => {
        await userService.signUp(req.body.username, req.body.password);
        const data = await userService.signIn(req.body.username, req.body.password);
        res.status(200).send(data);
    })
);

router.post(
    "/auth/signin",
    wrap(async (req, res) => {
        const data = await userService.signIn(req.body.username, req.body.password)
        res.send(data);
    })
);

router.post(
    "/auth/signin",
    wrap(async (req, res) => {
        const data = await userService.signIn(req.body.username, req.body.password)
        res.send(data);
    })
);

router.post(
    "/auth/check-token-validity",
    wrap(async (req, res) => {
        const data = await userService.checkValidity(req.body.token)
        res.send(data);
    })
);

router.post(
    "/user-photo",
    wrap(async (req, res) => {
        try{
            const image = {
                data: fs.readFileSync(req.files.userPhoto.path),
                contentType: 'image/png'
            };
            await userService.uploadImage(req.body.userName, image)
        }catch{
            res.status(400).send({ message: err });
        }
    }),
);

module.exports = router;  