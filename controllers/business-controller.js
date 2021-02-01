module.exports = class BusinessContoller {

    catalogue(req, res) {
        res.json({
            message: "Successfully retrived"
        })
    }

    create(req, res){
        res.json({
            message: "Successfully created"
        })
    }

    show(req, res){
        res.json({
            message: "Successfully showed"
        })
    }

    update(req, res){
        res.json({
            message: "Successfully updated"
        })
    }

    delete(req, res){
        res.json({
            message: "Successfully deleted"
        })
    }


}