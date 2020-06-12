using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Api.AccesoDatos;
using Api.Entidades;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controller
{
    [Route("api/orden")]
    //[Authorize]
    public class OrdenServicioController : ControllerBase
    {
        private readonly OrdenServicioRepositorio ordenServicioRepositorio;
        public OrdenServicioController()
        {
            ordenServicioRepositorio = new OrdenServicioRepositorio();
        }
        // GET: api/orden
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(ordenServicioRepositorio.ObtenerTodo());
        }

        // GET api/orden/1062
        [HttpGet("{id}")]
        public IActionResult Obtener(int id)
        {
            return Ok(ordenServicioRepositorio.ObtenerPorId(id));
        }

        // POST api/orden/add   
        [HttpPost]
        public IActionResult Crear([FromBody] OrdenServicio ordenServicio)
        {
            return Ok(ordenServicioRepositorio.Agregar(ordenServicio));
        }

        // DELETE api/<OrdenServicioController>/5
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            ordenServicioRepositorio.Eliminar(id);
            return Ok();
        }
    }
}
