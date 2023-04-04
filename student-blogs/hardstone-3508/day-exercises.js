import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // import global del plugin relativeTime
import { constant } from "lodash";

await import("dayjs/locale/es-us.js"); // cargar la localizacion en español
dayjs.locale("es-us"); // activar la localizacion en español

dayjs.extend(relativeTime) // activar el 

//var nowN = dayjs();

function humanizate (date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurerentYear = wrappedDate.year() === new Date().getFullYear();
    if (!isCurerentYear) {
        return wrappedDate.format("MMMM DD YYYY");
    }
    else if(daysDiff <= 30) {
        return wrappedDate.fromNow();
    }
    else {
        return wrappedDate.format("MMMM DD")
    }
}
var nowN = humanizate(Date.now());
var now5 = humanizate(dayjs().subtract(5, 'days'));
var now60 = humanizate(dayjs().subtract(60, 'days'));
var now580 = humanizate(dayjs().subtract(580, 'days'));
var nowAdd = humanizate(dayjs().add(300, 'days'));

document.getElementById("code2").innerHTML = `Tiempo Ahora: ${nowN}<br>
Tiempo - 5 dias: ${now5}<br>
Tiempo - 60 dias: ${now60}<br>
Tiempo - 580 dias: ${now580}<br>
Tiempo + 300 dias: ${nowAdd}<br>
`;
//HumanizarFecha(2023-03-28)