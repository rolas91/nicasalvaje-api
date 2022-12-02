const VerifyToken = ( req, res) => {
    try {
        let accessToken = "sadf65s4df56s4df54sdggd4asg54ads5g4dsg45ds4g56s";
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