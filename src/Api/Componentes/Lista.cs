using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Componentes
{
    public class Lista
    {
		#region Prodpiedades
		public int Id;
		public string Nombre;
		public string EstadoNombre;
		public string PBINombre;
		public string ResponsableNombre;
		public string TipoNombre;
		#endregion

		#region Constructor y desconstructor
		public Lista() { }
		~Lista() { }
		#endregion

		#region Metodos de acceso a datos para web

		public List<Lista> cargarLista()
		{
			try
			{
				return JsonConvert.DeserializeObject<List<Lista>>(obtenerJsonDeLista());
			}
			catch (Exception e)
			{
				throw e;
			}
		}
		private string obtenerJsonDeLista()
		{
			string jsonConListadoDeTareas = @"[{
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

			return jsonConListadoDeTareas;
		}
		#endregion


	
	}
}
