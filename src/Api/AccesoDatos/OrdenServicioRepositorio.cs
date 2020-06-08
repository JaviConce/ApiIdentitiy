using Api.Entidades;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.AccesoDatos
{
    public class OrdenServicioRepositorio
    {
		private string jsonConListadoDeTareas;

        public OrdenServicioRepositorio()
        {
			jsonConListadoDeTareas = @"[{
								'Id': 1062,
								'Nombre': '1062 - (Desestimado) Archivos duplicados',
								'EstadoNombre': 'Resolved',
								'PBINombre': 'MC3dulo de Adjuntos implementado en submodulos (hijos)',
								'ResponsableNombre': 'Vaca Matias',
								'TipoNombre': 'Bug'
							},
							{
								'Id': 1146,
								'Nombre': '1146 - Procesos de Egreso',
								'EstadoNombre': 'Closed',
								'PBINombre': 'OSA_Motivo: informe de entrega/retiro',
								'ResponsableNombre': 'Del Cerro David',
								'TipoNombre': 'Bug'
							},
							{
								'Id': 1357,
								'Nombre': '1357 - Filtro por sitios activos o inactivos',
								'EstadoNombre': 'Closed',
								'PBINombre': 'OSX_Bandeja de entrada sitios',
								'ResponsableNombre': 'Vaca Matias',
								'TipoNombre': 'Bug'
							},
							{
								'Id': 1741,
								'Nombre': '1741 - (BE y Ver) - Rulo de cargando',
								'EstadoNombre': 'Closed',
								'PBINombre': 'CreaciC3n de ABM de Sitios con nuevas funcinalidades',
								'ResponsableNombre': 'Arguello Roman',
								'TipoNombre': 'Bug'
							},
							{
								'Id': 2046,
								'Nombre': '2046 -  RevisiC3n de pantallas Ingles',
								'EstadoNombre': 'Closed',
								'PBINombre': 'Ciena_Emplazamiento Multilenguaje_BE',
								'ResponsableNombre': 'Arguello Roman',
								'TipoNombre': 'Tarea'
							},
							{
								'Id': 2169,
								'Nombre': '2169 -  CreaciC3n de campos en SQL para el estado Derivado a Especialista',
								'EstadoNombre': 'Closed',
								'PBINombre': 'Modificaciones del Workflow Eventos-En producciC3n',
								'ResponsableNombre': 'Arguello Roman',
								'TipoNombre': 'Tarea'
							}
						]";
        }

        public void Eliminar(int id)
        {
			var item = ObtenerPorId(id);

			if (item != null)
			{
				var lista = ObtenerTodo().ToList();
				lista.Remove(item);

				jsonConListadoDeTareas = JsonConvert.SerializeObject(lista);
			}
        }

        //trae todas las tareas, es como un select * from tabla
        public IEnumerable<OrdenServicio> ObtenerTodo()
		{
			try
			{
				return JsonConvert.DeserializeObject<IEnumerable<OrdenServicio>>(jsonConListadoDeTareas);
			}
			catch (Exception e)
			{
				throw e;
			}
		}
        public int Agregar(OrdenServicio ordenServicio)
        {
			var lista = ObtenerTodo().ToList();
			var ultimoElemento = lista.Last();
			ordenServicio.Id = ultimoElemento.Id +1;

			lista.Add(ordenServicio);

			jsonConListadoDeTareas = JsonConvert.SerializeObject(lista);

			return ordenServicio.Id;
		}

        public OrdenServicio ObtenerPorId(int id)
        {
            return ObtenerTodo().FirstOrDefault(x=> x.Id == id);
        }
    }
}
