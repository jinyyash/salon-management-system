
const Post = require("../models/post");
const Appointments = require('../models/appoinment');

exports.createChart=  (req, res, next) => {
    var resultArray= [];
    Appointments.find({},function(err,appointmnt){
    var jancount=febcount=marchcount=aprilcount=maycount=junecount=julycount=augustcount=sepcount=octcount=novcount=deccount=0;
    for(let i = 0; i < appointmnt.length; i++){
      // console.log(appointmnt[i].bookingDate.getMonthName())
      if(appointmnt[i].bookingDate.getFullYear()==2019){
        if(appointmnt[i].reservedDate.getMonth()==1){
          jancount++;
        }else if(appointmnt[i].bookingDate.getMonth()==2){
          febcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==3){
          marchcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==4){
          aprilcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==5){
          maycount++;
        }else if(appointmnt[i].bookingDate.getMonth()==6){
          junecount++;
        }else if(appointmnt[i].bookingDate.getMonth()==7){
          julycount++;
        }else if(appointmnt[i].bookingDate.getMonth()==8){
          augustcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==9){
          sepcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==10){
          octcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==11){
          novcount++;
        }else if(appointmnt[i].bookingDate.getMonth()==12){
          deccount++;
        }
      }
    }
    resultArray[0]=jancount;
    resultArray[1]=febcount;
    resultArray[2]=marchcount;
    resultArray[3]=aprilcount;
    resultArray[4]=maycount;
    resultArray[5]=junecount;
    resultArray[6]=julycount;
    resultArray[7]=augustcount;
    resultArray[8]=sepcount;
    resultArray[9]=octcount;
    resultArray[10]=novcount;
    resultArray[11]=deccount;
    let sum = jancount + febcount + marchcount + aprilcount + maycount + junecount + julycount + augustcount + sepcount + octcount + novcount + deccount;
    console.log(sum);
    if(appointmnt.length==sum){
      console.log(resultArray)
      res.status(200).json(resultArray);
    }
  })
}
  