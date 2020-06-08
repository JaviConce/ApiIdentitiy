using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Entidades
{
    public class OrdenServicio
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string EstadoNombre { get; set; }
        public string PBINombre { get; set; }
        public string ResponsableNombre { get; set; }
        public string TipoNombre { get; set; }
	}
}
