using System;

namespace EF_Core
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    class OrdenServicio
    {
         
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string EstadoNombre { get; set; }
        public string PBINombre { get; set; }
        public string ResponsableNombre { get; set; }
        public string TipoNombre { get; set; }
    }
}

