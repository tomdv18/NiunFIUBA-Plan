export const data = 
{
  "cuatrimestre": "2022C2", // Nombre de Cuatrimestre, para la notificación al entrar al sitio ("Actualizado al 2020C2")
  "materias": [ // Array de todas las materias de todas las carreras
    {
      "codigo": "M001", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "MICRO CATEDRA 1", // Nombre de la materia
      "cursos": [ // Array de códigos de los cursos de la materia. Este número no tiene por que ser fiel al "verdadero" código de las comisiones, con tal de que funcione como identificador (único) de cursos, ya está. Puede ser un número al azar, o algo como "7641-1","7641-2",etc.
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
      "F1",
      "G1",
      "H1"
      ]
    },
    {
      "codigo": "M002", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "MICRO CATEDRA 2", // Nombre de la materia
      "cursos": [ // Array de códigos de los cursos de la materia. Este número no tiene por que ser fiel al "verdadero" código de las comisiones, con tal de que funcione como identificador (único) de cursos, ya está. Puede ser un número al azar, o algo como "7641-1","7641-2",etc.
        "A2",
        "B2",
        "C2",
      ]
    },
    {
      "codigo": "I001", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "INMUNO CATEDRA 1", 
      "cursos": [ 
        "I-A1",
        "I-B1",
        "I-C1",
        "I-D1",

      ]
    },
    {
      "codigo": "I002", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "INMUNO CATEDRA 2", // Nombre de la materia
      "cursos": [ // Array de códigos de los cursos de la materia. Este número no tiene por que ser fiel al "verdadero" código de las comisiones, con tal de que funcione como identificador (único) de cursos, ya está. Puede ser un número al azar, o algo como "7641-1","7641-2",etc.
        "I-A2",
        "I-B2",
        "I-C2",
      ]
    },
    {
      "codigo": "F001", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "FARMACO CATEDRA 1", 
      "cursos": [ // Array de códigos de los cursos de la materia. Este número no tiene por que ser fiel al "verdadero" código de las comisiones, con tal de que funcione como identificador (único) de cursos, ya está. Puede ser un número al azar, o algo como "7641-1","7641-2",etc.
        "F-A1",
        "F-B1",
        "F-C1",
        "F-D1"
      ]
    },
    {
      "codigo": "F002", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "FARMACO CATEDRA 2", 
      "cursos": [ 
        "F-A2",
        "F-B2",
      ]
    },
    {
      "codigo": "F003", // Código de la materia, que es por el cual se la identifica para decidir qué carrera la contiene
      "nombre": "FARMACO CATEDRA 3", // Nombre de la materia
      "cursos": [ // Array de códigos de los cursos de la materia. Este número no tiene por que ser fiel al "verdadero" código de las comisiones, con tal de que funcione como identificador (único) de cursos, ya está. Puede ser un número al azar, o algo como "7641-1","7641-2",etc.
        "F-A3",
        "F-B3",
        "F-C3",
        "F-D3",
        "F-E3"
      ]
    }
  ],
  //
  //
  //
  //
  //
  //
  //
  //
  "cursos": [ // Array de todos los cursos de todas las materias de todas las carreras
    {
      "clases": [
        {
          "dia": 3,
          "fin": "13:00",
          "inicio": "11:30"
        }
      ],
      "codigo": "A1",
      "docentes": "Curso A1",
      "materia": "M001"
    },
    {
      "docentes": "Curso B1",
      "codigo": "B1", 
      "materia":"M001",
      "clases": [
        {
          "dia": 3,
          "inicio": "13:15", 
          "fin": "14:45"
        },
      ],
    },
    {
      "clases": [
        {
          "dia": 3,
          "fin": "16:30",
          "inicio": "15:00"
        }
      ],
      "codigo": "C1",
      "docentes": "Curso C1",
      "materia": "M001"
    },
    {
      "clases": [
        {
          "dia": 3,
          "fin": "18:15",
          "inicio": "16:45"
        }
      ],
      "codigo": "D1",
      "docentes": "Curso D1",
      "materia": "M001"
    },
    {
      "clases": [
        {
          "dia": 3,
          "fin": "20:00",
          "inicio": "18:30"
        }
      ],
      "codigo": "E1",
      "docentes": "Curso E1",
      "materia": "M001"
    },
    {
      "clases": [
        {
          "dia": 4,
          "fin": "13:00",
          "inicio": "11:30"
        }
      ],
      "codigo": "F1",
      "docentes": "Curso F1",
      "materia": "M001"
    },
    {
      "clases": [
        {
          "dia": 4,
          "fin": "14:45",
          "inicio": "13:15"
        }
      ],
      "codigo": "G1",
      "docentes": "Curso G1",
      "materia": "M001"
    },
    {
      "clases": [
        {
          "dia": 4,
          "fin": "16:30",
          "inicio": "15:00"
        }
      ],
      "codigo": "H1",
      "docentes": "Curso H1",
      "materia": "M001"
    },
    {
      "docentes": "Curso A2",
      "codigo": "A2", 
      "materia":"M002",
      "clases": [
        {
          "dia": 3,
          "inicio": "13:15", 
          "fin": "14:45"
        },
        {
          "dia": 5,
          "inicio": "13:15", 
          "fin": "14:45"
        },
      ],
    },
    {
      "docentes": "Curso B2",
      "codigo": "B2", 
      "materia":"M002",
      "clases": [
        {
          "dia": 3,
          "inicio": "16:00", 
          "fin": "18:30"
        },
        {
          "dia": 5,
          "inicio": "16:00", 
          "fin": "18:30"
        },
      ],
    },
    {
      "docentes": "Curso C2",
      "codigo": "C2", 
      "materia":"M001",
      "clases": [
        {
          "dia": 3,
          "inicio": "18:45", 
          "fin": "21:15"
        },
        {
          "dia": 5,
          "inicio": "18:45", 
          "fin": "21:15"
        },
      ],
    },
    {       
      "codigo": "I-A1",
      "docentes": "Curso A1",
      "materia": "I001",
      "clases": [
        {
          "dia": 1,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "I-B1",
      "docentes": "Curso B1",
      "materia": "I001",
      "clases": [
        {
          "dia": 1,
          "inicio": "18:00",
          "fin": "22:00"
        }
      ]
    },
    {       
      "codigo": "I-C1",
      "docentes": "Curso C1",
      "materia": "I001",
      "clases": [
        {
          "dia": 2,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "I-D1",
      "docentes": "Curso D1",
      "materia": "I001",
      "clases": [
        {
          "dia": 2,
          "inicio": "18:00",
          "fin": "22:00"
        }
      ]
    },
    {       
      "codigo": "I-A2",
      "docentes": "Curso A2",
      "materia": "I002",
      "clases": [
        {
          "dia": 1,
          "inicio": "13:15",
          "fin": "15:45"
        }
      ]
    },
    {       
      "codigo": "I-B2",
      "docentes": "Curso B2",
      "materia": "I002",
      "clases": [
        {
          "dia": 1,
          "inicio": "16:00",
          "fin": "18:30"
        }
      ]
    },
    {       
      "codigo": "I-C2",
      "docentes": "Curso C2",
      "materia": "I002",
      "clases": [
        {
          "dia": 1,
          "inicio": "18:45",
          "fin": "21:15"
        }
      ]
    },
    {       
      "codigo": "F-A1",
      "docentes": "Curso A1",
      "materia": "F001",
      "clases": [
        {
          "dia": 1,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-B1",
      "docentes": "Curso B1",
      "materia": "F001",
      "clases": [
        {
          "dia": 2,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-C1",
      "docentes": "Curso C1",
      "materia": "F001",
      "clases": [
        {
          "dia": 5,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-D1",
      "docentes": "Curso D1",
      "materia": "F001",
      "clases": [
        {
          "dia": 4,
          "inicio": "17:00",
          "fin": "22:00"
        }
      ]
    },
    {       
      "codigo": "F-A2",
      "docentes": "Curso A2 - Politi",
      "materia": "F002",
      "clases": [
        {
          "dia": 2,
          "inicio": "12:30",
          "fin": "16:00"
        }
      ]
    },
    {       
      "codigo": "F-B2",
      "docentes": "Curso B2 - Bignone",
      "materia": "F002",
      "clases": [
        {
          "dia": 4,
          "inicio": "15:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-A3",
      "docentes": "Curso A3",
      "materia": "F003",
      "clases": [
        {
          "dia": 1,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-B3",
      "docentes": "Curso B3",
      "materia": "F003",
      "clases": [
        {
          "dia": 2,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-C3",
      "docentes": "Curso C3",
      "materia": "F003",
      "clases": [
        {
          "dia": 3,
          "inicio": "14:00",
          "fin": "18:00"
        }
      ]
    },
    {       
      "codigo": "F-D3",
      "docentes": "Curso D3",
      "materia": "F003",
      "clases": [
        {
          "dia": 4,
          "inicio": "13:00",
          "fin": "17:00"
        }
      ]
    },
    {       
      "codigo": "F-E3",
      "docentes": "Curso E3",
      "materia": "F003",
      "clases": [
        {
          "dia": 5,
          "inicio": "17:00",
          "fin": "21:00"
        }
      ]
    }
  ],
  "timestamp": "18/02/2022 12:05:25", 
}