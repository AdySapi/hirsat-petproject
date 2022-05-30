import { createServer } from "miragejs";

function mockServer() {
  let server = createServer({
    routes() {
      this.urlPrefix = "http://www.testdomain.com";
      this.namespace = "/v1/api";
      this.timing = 2000;

      this.get("/teamdata", () => {
        return [
            {
                name: "Bence Priczel",
                dob: "27.07.1993",
                pob: "Veszprém",
                height: "186cm",
                weight: "92kg",
                shoes: 46,
                number: 8,
                position: "Defender"
            },
            {
                name: "Patrik Vizes",
                dob: "01.13.1994",
                pob: "Eger",
                height: "198cm",
                weight: "102kg",
                shoes: 48,
                number: 7,
                position: "Libero"
            },
            {
                name: "Bence Zakics",
                dob: "01.08.1994",
                pob: "Veszprém",
                height: "187cm",
                weight: "84kg",
                shoes: 44,
                number: 11,
                position: "Left Wing"
            },
            {
                name: "Balázs Nagy",
                dob: "18.02.2003",
                pob: "Budapest",
                height: "207cm",
                weight: "94kg",
                shoes: 48.5,
                number: 32,
                position: "Goalkeeper"
            },
            {
                name: "Adorján Sápi",
                dob: "10.07.1993",
                pob: "Veszprém",
                height: "189cm",
                weight: "86kg",
                shoes: 43,
                number: 2,
                position: "Defender"
            },
            {
                name: "Ádám Balogh",
                dob: "06.11.1997",
                pob: "Budapest",
                height: "184cm",
                weight: "83kg",
                shoes: 46,
                number: 97,
                position: "Goalkeeper"
            },
            {
                name: "Norbert Gyene",
                dob: "18.04.1994",
                pob: "Veszprém",
                height: "187cm",
                weight: "81kg",
                shoes: 44,
                number: 15,
                position: "Right Wing"
            },
            {
                name: "András John",
                dob: "16.08.1990",
                pob: "Tapolca",
                height: "196cm",
                weight: "86kg",
                shoes: 44,
                number: 23,
                position: "Left Wing"
            },
            {
                name: "Botond Csákay",
                dob: "19.04.2003",
                pob: "Budapest",
                height: "185cm",
                weight: "81kg",
                shoes: 45,
                number: 10,
                position: "Pivot/Wings"
            },
            {
                name: "Ádám Fekete",
                dob: "17.07.2003",
                pob: "Budapest",
                height: "185cm",
                weight: "81kg",
                shoes: 44,
                number: 1,
                position: "Left Wing"
            },
            {
                name: "Attila Kun",
                dob: "12.05.1994",
                pob: "Graz",
                height: "195cm",
                weight: "98kg",
                shoes: 49,
                number: 24,
                position: "Pivot"
            },
            {
                name: "Bence Kiss",
                dob: "13.04.1994",
                pob: "Budapest",
                height: "187cm",
                weight: "85kg",
                shoes: 44,
                number: 13,
                position: "Defender"
            },
            {
                name: "Viktor Melnicsuk",
                dob: "31.08.2001",
                pob: "Dobrjani",
                height: "188cm",
                weight: "82kg",
                shoes: 46,
                number: 6,
                position: "Libero"
            },
            {
                name: "Tibor Somogyi",
                position: "Assistant Coach"
            },
            {
                name: "Péter Somogyi",
                position: "Coach"
            },
            {
                name: "Viktória Holló",
                position: "Team Leader"
            },
            {
                name: "József Venczel",
                position: "Physiotherapist"
            }
        ];
      });
    },
  });

  return server;
}

export default mockServer;