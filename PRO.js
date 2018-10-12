// var ret = jQuery.Deferred();
// var pt; 

// var obv;


function onLoad() {


	// askMom();
	
	// alert("I'm here, and trying stuff");

	consumePromise();

	// doFHIR();
	
	// doStuff();
	
	
}


var myBool = true;

function getData() {
    var deferred = $.Deferred();

	if(myBool == true)
		deferred.resolve('yay');
	else
		deferred.reject('boo');
    
    return deferred.promise();
}

$.when(getData()).done(function(value) {
	
	return("Something else");

});


function consumePromise() {

	getData().then(function(value) {

		alert("Yeah, I did finish");
		
		console.log(value);
	});

};





function badness() {
	
	alert("oh no!");
	
}


function doHappy(msg) {
	
		alert("oh yeah!");
		console.log(msg)

	
}

/*
{
  "resourceType": "AllergyIntolerance",
  "category": "medication",
  "criticality": "CRITL",
  "recordedDate": "2017-02-28T15:03:00-06:00",
  "status": "active",
  "type": "allergy",
  "onset": "2015-12-15T00:00:00Z",
  "patient": {
    "reference": "Patient/1316020"
  },
  "reporter": {
    "reference": "Patient/1316020"
  },
  "recorder": {
    "reference": "Practitioner/1316007"
  },
  "reaction": [
    {
      "manifestation": [
        {
          "text": "Hives"
        }
      ]
    }
  ],
  "note": {
    "authorReference": {
      "reference": "Practitioner/41562141"
    },
    "time": "2017-02-28T09:03:00Z",
    "text": "Note 1"
  },
  "substance": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "3498"
      }
    ]
  }
}

*/



function onReady2(smart)  {
	
	// alert("onReady2");
	
	
	var patient = smart.patient;
	
	pt = patient.read();
	
	obv = smart.patient.api.fetchAll({
			type: 'Observation',
			query: {
			  code: {
				$or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
					  'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
					  'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
			  }
			}
		  });

	
	// alert(patient.promise());
	
	
	// patient.read().then(function(obj) {
		
		// alert("I'm done with reading");
		// console.log(obj);
		
		
	// });
	
	// patient
	
	
	// console.log(patient);
	
	/*
	
var testPromise = new Promise(
    function (resolve, reject) {
        // if (patient) {
        if (patient) {
            // resolve("fulfilled"); // fulfilled
	
			
            resolve(patient); // fulfilled
        } else {
            var reason = new Error('did not work');
            reject(reason); // reject
        }

    }
);
*/

// var myPromise = function () {
    // testPromise
        // .then(function (fulfilled) {
            // // yay, you got a new phone
            // alert(fulfilled);
			// console.log(fulfilled);
         // // output: { brand: 'Samsung', color: 'black' }
        // })
        // .catch(function (error) {
            // // oops, mom don't buy it
            // alert(error.message);
         // // output: 'mom is not happy'
        // });
// };


 // myPromise();
	
	
	
	// var pt = patient.read();
	
	// console.log(pt.gender);
	
	
	// var promise = new Promise(
		// function(resolve, reject)
	
	// patient.read().then(function(pt) {
		
		// alert("I'm done!");
		// console.log(patient);
		
	// });
	
	/*
	var willIGetNewPhone = new Promise(

		function (resolve, reject) {
			if (isMomHappy) {
				var phone = {
					brand: 'Samsung',
					color: 'black'
				};
				resolve(phone); // fulfilled
			} else {
				var reason = new Error('mom is not happy');
				reject(reason); // reject
			}

    }
);*/

	
	
	
}


// $.when(pt, obv).fail(onError);

// $.when(pt, obv).done(function(patient, obv) {
	
	// alert("All done!");
	// console.log(patient);
	// console.log(obv);
	
// });



// function onReady(smart)  {
	
	// // console.log(smart);
	
	
	

// // var entry = {
		// // resource: 
		
	// // {
		  // // "resourceType": "AllergyIntolerance",
		  // // "category": "medication",
		  // // "criticality": "CRITL",
		  // // "recordedDate": "2017-02-28T15:03:00-06:00",
		  // // "status": "active",
		  // // "type": "allergy",
		  // // "onset": "2015-12-15T00:00:00Z",
		  // // "patient": {
			// // "reference": "Patient/4342012"
		  // // },
		  // // "reporter": {
			// // "reference": "Patient/4342012"
		  // // },
		  // // "recorder": {
			// // "reference": "Practitioner/4342012"
		  // // },
		  // // "reaction": [
			// // {
			  // // "manifestation": [
				// // {
				  // // "text": "Food-code_lab"
				// // }
			  // // ]
			// // }
		  // // ],
		  // // "note": {
			// // "authorReference": {
			  // // "reference": "Practitioner/41562141"
			// // },
			// // "time": "2017-02-28T09:03:00Z",
			// // "text": "Note 1"
		  // // },
		  // // "substance": {
			// // "coding": [
			  // // {
				// // "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
				// // "code": "3498"
			  // // }
			// // ]
		  // // }
		// // }

	// // }
			
		
		
	
	// /*
	// smart.api.create(entry, 

		// function(e) {
			// alert("success");
			// console.log(e);
		// },
		// function(e) {

			// alert("fail");
			// console.log(e);
		
			
		// });
		
	// */
	
	// //doHappy(entry), badness());
	
	
	// // alert("Do I have it? " + smart.hasOwnProperty('patient'));
  // if (smart.hasOwnProperty('patient')) {
	// var patient = smart.patient;
	
	// // console.log(patient);
	
	
	// // var pt = patient.read();
	
	// // console.log(pt.gender);
	
	// // patient.read().promise();
	
	
	// // patient.read().then(function(pt) {
          // // alert("I finished");
		  // // console.log(pt);
        // // });
	
	// // var promise = new Promise(function(resolve, reject) {
  // // // do a thing, possibly async, then…

		// // if (/* everything turned out fine */) {
			// // resolve("Stuff worked!");
		// // }
		// // else {
			// // reject(Error("It broke"));
		// // }
	// // });
	
	// // alert(JSON.stringify(smart.patient.api));
	
	// // var obv = smart.patient.api.fetchAll({
				// // type: 'Observation',
				// // query: {
				  // // // code: {
					// // $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
						  // // 'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
						  // // 'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
				  // // }
				// // }

				
				
				// /*
	// var obv = smart.patient.api.fetchAll({
	
				// type: 'AllergyIntolerance',
				
				// query: {}
	// }, {
		// type: 'Observation',
		// query: {}
	
	// }
	
	
	// ).then(function(allergies, obs) {
		// alert("I got my obs");
		// console.log(allergies);
		// // console.log(obs);
		
		// });
  // }
  // */
  
  
  // }
// }
 
 
 // function onError() {
  // // console.log('Loading error', arguments);
  // // ret.reject();

  
 // }
 
 
 // function doStuff() {
	 
	 // var ret = $.Deferred();

    // function onError() {
      // console.log('Loading error', arguments);
      // ret.reject();
    // }

    // function onReady(smart)  {
      // if (smart.hasOwnProperty('patient')) {
        // var patient = smart.patient;
        // var pt = patient.read();
        // var obv = smart.patient.api.fetchAll({
                    // type: 'Observation',
                    // query: {
                      // code: {
                        // $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                              // 'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                              // 'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
                      // }
                    // }
                  // });

        // $.when(pt, obv).fail(onError);

        // $.when(pt, obv).done(function(patient, obv) {
			
			// alert("I'm done");


          // ret.resolve();
        // });
      // } else {
        // onError();
      // }
    // }

    // FHIR.oauth2.ready(onReady, onError);
    // return ret.promise();
	 
	 
	 
 // }
 
 function doFHIR() {
 
	// FHIR.oauth2.ready(onReady, onError);
	FHIR.oauth2.ready(onReady2, onError);
	
	
	// console.log(smart);
	
	
	// alert(FHIR);
	
	// alert("FHIR FIRE!");
	
	
 }


 /*
 
 var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);


// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};


 */
 

/*
(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }

    function onReady(smart)  {
      if (smart.hasOwnProperty('patient')) {
        var patient = smart.patient;
        var pt = patient.read();
        var obv = smart.patient.api.fetchAll({
                    type: 'Observation',
                    query: {
                      code: {
                        $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                              'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                              'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
                      }
                    }
                  });

        $.when(pt, obv).fail(onError);

        $.when(pt, obv).done(function(patient, obv) {
          var byCodes = smart.byCodes(obv, 'code');
          var gender = patient.gender;

          var fname = '';
          var lname = '';

          if (typeof patient.name[0] !== 'undefined') {
            fname = patient.name[0].given.join(' ');
            lname = patient.name[0].family.join(' ');
          }

          var height = byCodes('8302-2');
          var systolicbp = getBloodPressureValue(byCodes('55284-4'),'8480-6');
          var diastolicbp = getBloodPressureValue(byCodes('55284-4'),'8462-4');
          var hdl = byCodes('2085-9');
          var ldl = byCodes('2089-1');

          var p = defaultPatient();
          p.birthdate = patient.birthDate;
          p.gender = gender;
          p.fname = fname;
          p.lname = lname;
          p.height = getQuantityValueAndUnit(height[0]);

          if (typeof systolicbp != 'undefined')  {
            p.systolicbp = systolicbp;
          }

          if (typeof diastolicbp != 'undefined') {
            p.diastolicbp = diastolicbp;
          }

          p.hdl = getQuantityValueAndUnit(hdl[0]);
          p.ldl = getQuantityValueAndUnit(ldl[0]);

          ret.resolve(p);
        });
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  function defaultPatient(){
    return {
      fname: {value: ''},
      lname: {value: ''},
      gender: {value: ''},
      birthdate: {value: ''},
      height: {value: ''},
      systolicbp: {value: ''},
      diastolicbp: {value: ''},
      ldl: {value: ''},
      hdl: {value: ''},
    };
  }

  function getBloodPressureValue(BPObservations, typeOfPressure) {
    var formattedBPObservations = [];
    BPObservations.forEach(function(observation){
      var BP = observation.component.find(function(component){
        return component.code.coding.find(function(coding) {
          return coding.code == typeOfPressure;
        });
      });
      if (BP) {
        observation.valueQuantity = BP.valueQuantity;
        formattedBPObservations.push(observation);
      }
    });

    return getQuantityValueAndUnit(formattedBPObservations[0]);
  }

  function getQuantityValueAndUnit(ob) {
    if (typeof ob != 'undefined' &&
        typeof ob.valueQuantity != 'undefined' &&
        typeof ob.valueQuantity.value != 'undefined' &&
        typeof ob.valueQuantity.unit != 'undefined') {
          return ob.valueQuantity.value + ' ' + ob.valueQuantity.unit;
    } else {
      return undefined;
    }
  }

  window.drawVisualization = function(p) {
    $('#holder').show();
    $('#loading').hide();
    $('#fname').html(p.fname);
    $('#lname').html(p.lname);
    $('#gender').html(p.gender);
    $('#birthdate').html(p.birthdate);
    $('#height').html(p.height);
    $('#systolicbp').html(p.systolicbp);
    $('#diastolicbp').html(p.diastolicbp);
    $('#ldl').html(p.ldl);
    $('#hdl').html(p.hdl);
  };

})(window);
*/