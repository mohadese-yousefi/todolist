class statuscontroller {

    success(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    notFindError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }
}

module.exports = statuscontroller;
