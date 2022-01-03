
var Db  = require('./dboperations');
var Yachta = require('./yachts');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/API', router);

router.use((request,response, next)=>{
   next()
})

router.route('/getYachts').get((request,response)=>{

    dboperations.getYachts().then(result => {
       response.json(result[0]);
    })

})

router.route('/getAllYachts').get((request,response)=>{

    dboperations.getAllYachts().then(result => {
       response.json(result[0]);
    })

})

router.route('/getYacht/:id').get((request,response)=>{

    dboperations.getYacht(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/getAllReservationByID/:id').get((request,response)=>{

    dboperations.getAllReservationByID(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/reservation').post((request,response)=>{

   let reservation = {...request.body}
   dboperations.addReservation(reservation).then(result => {
      response.status(201).json(result)
   })

})


router.route('/user').post((request,response)=>{

   let user = {...request.body}
   dboperations.addUser(user).then(result => {
       response.status(201).json(result)
   })

})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);



