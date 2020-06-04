using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Api.Componentes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controller
{
    [Route("api/orden")]
    [Authorize]
    public class OrdenServicioController : ControllerBase
    {
        // GET: api/orden
        [HttpGet]
        public string Get()
        {
           Lista lista = new Lista();

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(lista.cargarLista(), Newtonsoft.Json.Formatting.Indented);

            return json;


        }

        // GET api/orden/1062
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Lista lista = new Lista();
            string json="";


            foreach (Lista _lista in lista.cargarLista())
            {
                if (_lista.Id.Equals(id))
                {
                   json = Newtonsoft.Json.JsonConvert.SerializeObject(_lista, Newtonsoft.Json.Formatting.Indented);
                }
            }
            return json ;
            
            
        }

        // POST api/orden/add

    
        [HttpPost("add")]
        public void Post([FromBody] string value)
        {
            List<Lista> lista = new List<Lista>();
            Lista response = JsonConvert.DeserializeObject<Lista>(value);
            lista.Add(response);

        }

        

        // DELETE api/<OrdenServicioController>/5
        [HttpDelete("delete/{id}")]
      
        public string Delete(int id)
        {
            Lista lista = new Lista();
            List<Lista> tdlis = new List<Lista>();
            string json = "";



            foreach (Lista _lista in lista.cargarLista())
            {
                if (_lista.Id!=id)
                {
                    tdlis.Add(_lista);
                }
            }

            json = Newtonsoft.Json.JsonConvert.SerializeObject(tdlis, Newtonsoft.Json.Formatting.Indented);

            return json;


        }
    }
}
