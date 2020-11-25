const request = require('postman-request');

const clima= (estado, callback)=>{

    let urlLatLon= `http://api.weatherstack.com/current?access_key=d485c07c5b6d6b113d5f411b46c26638&query=${estado}`;
    request(urlLatLon,(error,response,body)=>{
        if(error){
            callback('Ocurrio algun error con la busqueda',undefined)
        }
        else{
            let data= JSON.parse(body);   

            callback(undefined,{
                clima:data.current.temperature,
                temperaturadescripcion:data.current.weather_descriptions
                /*NOMBRE PUESTO POR MI, DE DONDE PROVIENE, NOMBRE EN API*/ 
   });
}
})
}
module.exports=clima;

           