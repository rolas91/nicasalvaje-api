const VerifyToken = ( req, res) => {
    try {
        let accessToken = "RTWHSDREG7856S85DFGHH9090DS";
        let token = req.query["hub.verify_token"];
        let challeng = req.query["hub.challenge"];
        if(challeng != null && token != null && token === accessToken){
            res.send(challeng);
        }else{
            res.status(400).send();
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {

}

module.exports = {
    VerifyToken,
    ReceivedMessage
}