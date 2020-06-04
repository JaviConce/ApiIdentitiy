using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Api.Componentes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controller
{
    [Route("api/orden")]
    [Authorize]
    public class OrdenServicioController : ControllerBase
    {
        // GET: api/<OrdenServicioController>
        [HttpGet]
        public string Get()
        {
           Lista lista = new Lista();

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(lista.cargarLista(), Newtonsoft.Json.Formatting.Indented);

            return json;


        }

        // GET api/<OrdenServicioController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Lista lista = new Lista();
            string json="";


            foreach (Lista _lista in lista.cargarLista())
            {
                if (_lista.Id.Equals(id))
                {
                   json = Newtonsoft.Json.JsonConvert.SerializeObject(_lista.cargarLista(), Newtonsoft.Json.Formatting.Indented);
                }

            }
            return json ;
            
            
        }

        // POST api/<OrdenServicioController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<OrdenServicioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OrdenServicioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
