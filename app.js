const reverseGeocode=require('./modules/geocode');
let clima=require('./modules/clima');
let coordenada ={
  lat:19.264721,
  lon:-103.713821
 }

reverseGeocode(coordenada,(error,dataResponse)=>{
  /*Traemos el pais, estado y domicilo*/ 
    if(error){
        console.log('Ocurrio un error');
    }
    else{
      console.log(`El pais en el que resides es: ${dataResponse.pais}, Tu domicio es: ${dataResponse.calle}, Tu estado es: ${dataResponse.estado}`);
             /*Traemos el pais, estado y domicilo*/ 
        clima(dataResponse.estado,(error,dataResponse)=>{
          if(error){
            console.log('Ocurrio un error');
        }
        else{
            console.log(dataResponse);
              /*Traemos la temperatura y la descripción*/
            }
        });
    }

});


