const {FlightService} = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        res.status(201).json({
            data : flight,
            success : true,
            message : "Successfully created a flight",
            err : {}
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create flight",
            err : error
        })
    }
}

module.exports = {
    create
}