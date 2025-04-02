import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const schedule = [
  {
    day: "Lunes 31 marzo",
    activities: [
      {
        time: "08:00",
        type: "Cartas 📬",
        medium: "Zoom 💻",
        conductor: "Raúl Aliaga"
      },
      {
        time: "10:00",
        type: "Casa en casa 🏡",
        details: "Territorio 28, Los Dominicos #7757, Hna Marta Vera",
        conductor: "Luciano Ramírez"
      },
      {
        time: "18:00",
        type: "Telefónica 📞",
        medium: "Zoom 💻",
        conductor: "Daniel Madrid"
      }
    ]
  },
  {
    day: "Martes 1 abril",
    activities: [
      {
        time: "08:00",
        type: "Cartas 📬",
        medium: "Zoom 💻",
        conductor: "Raúl Aliaga"
      },
      {
        time: "10:00",
        type: "Casa en casa 🏡",
        details: "Territorio 7, Salón del Reino",
        conductor: "Aarón Rojas"
      },
      {
        time: "18:00",
        type: "Telefónica 📞",
        medium: "Zoom 💻",
        conductor: "Daniel Madrid"
      }
    ]
  },
  {
    day: "Miércoles 2 abril",
    activities: [
      {
        time: "10:00",
        type: "Casa en casa 🏡",
        details: "Alonso de Camargo / Visviri",
        conductor: "Francisco Mayne"
      }
    ]
  },
  {
    day: "Jueves 3 abril",
    activities: [
      {
        time: "10:00",
        type: "Casa en casa 🏡",
        details: "Territorio 14, Pehuén #7272 dpto 201, Hna Paquita",
        conductor: "Raúl Aliaga"
      },
      {
        time: "18:00",
        type: "Accesos 🟩",
        details: "Territorio Inacap",
        conductor: "Raúl Aliaga"
      }
    ]
  },
  {
    day: "Viernes 4 abril",
    activities: [
      {
        time: "08:00",
        type: "Cartas 📬",
        medium: "Zoom 💻",
        conductor: "Nicolás Delgado"
      },
      {
        time: "10:00",
        type: "Casa en casa 🏡",
        details: "Territorio 16, Tomás Moro / Monroe",
        conductor: "Nicolás Delgado"
      },
      {
        time: "18:00",
        type: "Accesos 🟩",
        details: "Territorio Mall Los Dominicos",
        conductor: "Diego Ramírez"
      }
    ]
  },
  {
    day: "Sábado 5 abril",
    activities: [
      {
        time: "09:00",
        type: "Calles 🚶",
        details: "Los Bomberos",
        conductor: "Luciano Ramírez"
      },
      {
        time: "17:00",
        type: "Casa en casa 🏡",
        details: "Territorio 5, Padre Hurtado Central #1091, Hna Susana Valenzuela",
        conductor: "Nélson Poblete"
      }
    ]
  },
  {
    day: "Domingo 6 abril",
    activities: [
      {
        time: "09:00",
        type: "Calles 🚶",
        details: "Padre Hurtado Central / Camino del Alba",
        conductor: "Raúl Aliaga"
      },
      {
        time: "10:30",
        type: "Casa en casa 🏡",
        details: "Territorio 21, Río Sena #8773 piso 2, Hno Aarón Rojas",
        conductor: "Daniel Madrid"
      }
    ]
  }
];

export default function CronogramaPredicacion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {schedule.map((dayBlock) => (
        <Card key={dayBlock.day} className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">📅 {dayBlock.day}</h2>
            <ul className="space-y-2">
              {dayBlock.activities.map((act, i) => (
                <li key={i} className="bg-blue-50 p-3 rounded-xl">
                  <div className="font-semibold">🕒 {act.time} - {act.type}</div>
                  {act.medium && <div><Badge>{act.medium}</Badge></div>}
                  {act.details && <div className="text-sm text-gray-700">📍 {act.details}</div>}
                  <div className="text-sm">👤 {act.conductor}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
