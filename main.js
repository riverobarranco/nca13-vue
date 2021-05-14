//<!-- Elementos Vue nivel jerarquico 1 -->

const app = Vue.createApp({
  data() {
      return {
        datosusuario: {
          tipoactivo: "",
          subtipoactivo: "",
          subtipoactivorotulo: "",
          subtipoactivoimagen: "",
          subtipoactivorotulito: "",
          sliderjsonvisible: false,  // esto es para marcar si se inyecta el slider desde html o desde el json. hay que añadir esa consulta a la orden.
          slideractivactivo: 0, // esto es la actividad activa en el slider
          urlmenulateral: "",
          urlseccionactiva:"",
          ccaa: "datoccaa",
          lang: "datolang",
          rol: "datorol",
          recursostitulo: [],
          interactivas: [],
          slider: [],
          evaluaciones: [],
          urliconoinsertado: "",
          urlsliderfiltrado: "",
          color: "lightgray",
          estado: 0,
          introbienvenida: {
              es: "Bienvenido",
              eu: "Ongietorri",
              ca: "Benvingut",
              gl: "Benvido",
              ca_valencia: "Benvingut",
              en: "Welcome",                  
          },
          intromensaje: {
              es: "Pulse sobre un tipo de contenido para comenzar",
              eu: "Egin klik hasteko eduki mota batean",
              ca: "Premi sobre un tipus de contingut per començar",
              gl: "Fai clic nun tipo de contido para comezar",
              ca_valencia: "Premi sobre un tipus de contingut per començar",
              en: "Click on any content type to begin", 
          },
        },
        sliderjson : {  // esto es para el slider dinámico
        },
        datos: {
          acg: {
              nom: "ACG",
              titulo: {
                  es: "Acogidas",
                  eu: "Harrera",
                  ca: "Acollides",
                  gl: "Acollidas",
                  ca_valencia: "Acollides",
                  en: "Welcome",
              },
              hijos: {
                  acg: {
                      nom: "ACG",
                      color: "rgb(166,202,236)",
                      subtitulo: {
                          es: "REC. ACOGIDAS",
                          eu: "HARRERA",
                          ca: "ACOLLIDA",
                          gl: "ACOLLIDA",
                          ca_valencia: "ACOLLIDA",
                          en: "WELCOME",
                      },
                      unidades: [],
                      recursos: [],
                  }
              }
          },
          pro: {
              nom: "PRO",
              titulo: {
                  es: "Proyectos",
                  eu: "Proiektua",
                  ca: "Projectes",
                  gl: "Proxectos",
                  ca_valencia: "Projectes",
                  en: "Projects",
              },
              hijos: {
                  p01: {
                      nom: "01",
                      color: "rgb(231,18,124)",
                      subtitulo: {
                          es: "PROYECTO 01",
                          eu: "01 PROIEKTUA",
                          ca: "PROJECTE 01",
                          gl: "PROXECTO 01",
                          ca_valencia: "PROJECTE 01",
                          en: "PROJECT 01",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p02: {
                      nom: "02",
                      color: "rgb(81,175,65)",
                      subtitulo: {
                          es: "PROYECTO 02",
                          eu: "02 PROIEKTUA",
                          ca: "PROJECTE 02",
                          gl: "PROXECTO 02",
                          ca_valencia: "PROJECTE 02",
                          en: "PROJECT 02",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p03: {
                      nom: "03",
                      color: "rgb(241,133,28)",
                      subtitulo: {
                          es: "PROYECTO 03",
                          eu: "03 PROIEKTUA",
                          ca: "PROJECTE 03",
                          gl: "PROXECTO 03",
                          ca_valencia: "PROJECTE 03",
                          en: "PROJECT 03",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p04: {
                      nom: "04",
                      color: "rgb(110,67,35)",
                      subtitulo: {
                          es: "PROYECTO 04",
                          eu: "04 PROIEKTUA",
                          ca: "PROJECTE 04",
                          gl: "PROXECTO 04",
                          ca_valencia: "PROJECTE 04",
                          en: "PROJECT 04",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p05: {
                      nom: "05",
                      color: "rgb(90,43,134)",
                      subtitulo: {
                          es: "PROYECTO 05",
                          eu: "05 PROIEKTUA",
                          ca: "PROJECTE 05",
                          gl: "PROXECTO 05",
                          ca_valencia: "PROJECTE 05",
                          en: "PROJECT 05",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p06: {
                      nom: "06",
                      color: "rgb(143,146,144)",
                      subtitulo: {
                          es: "PROYECTO 06",
                          eu: "06 PROIEKTUA",
                          ca: "PROJECTE 06",
                          gl: "PROXECTO 06",
                          ca_valencia: "PROJECTE 06",
                          en: "PROJECT 06",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p07: {
                      nom: "07",
                      color: "rgb(192,211,80)",
                      subtitulo: {
                          es: "PROYECTO 07",
                          eu: "07 PROIEKTUA",
                          ca: "PROJECTE 07",
                          gl: "PROXECTO 07",
                          ca_valencia: "PROJECTE 07",
                          en: "PROJECT 07",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p08: {
                      nom: "08",
                      color: "rgb(32,103,54)",
                      subtitulo: {
                          es: "PROYECTO 08",
                          eu: "08 PROIEKTUA",
                          ca: "PROJECTE 08",
                          gl: "PROXECTO 08",
                          ca_valencia: "PROJECTE 08",
                          en: "PROJECT 08",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p09: {
                      nom: "09",
                      color: "rgb(194,27,45)",
                      subtitulo: {
                          es: "PROYECTO 09",
                          eu: "09 PROIEKTUA",
                          ca: "PROJECTE 09",
                          gl: "PROXECTO 09",
                          ca_valencia: "PROJECTE 09",
                          en: "PROJECT 09",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p10: {
                      nom: "10",
                      color: "rgb(183,158,203)",
                      subtitulo: {
                          es: "PROYECTO 10",
                          eu: "10 PROIEKTUA",
                          ca: "PROJECTE 10",
                          gl: "PROXECTO 10",
                          ca_valencia: "PROJECTE 10",
                          en: "PROJECT 10",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p11: {
                      nom: "11",
                      color: "rgb(74,157,215)",
                      subtitulo: {
                          es: "PROYECTO 11",
                          eu: "11 PROIEKTUA",
                          ca: "PROJECTE 11",
                          gl: "PROXECTO 11",
                          ca_valencia: "PROJECTE 11",
                          en: "PROJECT 11",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  p12: {
                      nom: "12",
                      color: "rgb(43,58,140)",
                      subtitulo: {
                          es: "PROYECTO 12",
                          eu: "12 PROIEKTUA",
                          ca: "PROJECTE 12",
                          gl: "PROXECTO 12",
                          ca_valencia: "PROJECTE 12",
                          en: "PROJECT 12",
                      },
                      unidades: [],
                      recursos: [],
                  },
              }
          },
          sem: {
              nom: "SEM",
              titulo: {
                  es: "Seminarios",
                  eu: "Mintegia",
                  ca: "Seminaris",
                  gl: "Seminarios",
                  ca_valencia: "Seminaris",
                  en: "Seminars",
              },
              hijos: {
                  mat: {
                      nom: "MAT",
                      color: "rgb(243,146,0)",
                      subtitulo: {
                          es: "MATEMÁTICAS",
                          eu: "MATEMATIKA",
                          ca: "MATEMÀTIQUES",
                          gl: "MATEMÁTICAS",
                          ca_valencia: "MATEMÀTIQUES",
                          en: "MATHS",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  soc: {
                      nom: "SOC",
                      color: "rgb(40,53,131)",
                      subtitulo: {
                          es: "C. SOCIALES",
                          eu: "GIZARTE ZIENTZIAK",
                          ca: "C.S.C.M. SOCIAL",
                          gl: "CIENCIAS SOCIAIS",
                          ca_valencia: "CIÈNCIES SOCIALS",
                          en: "SOCIAL SCIENCE",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  nat: {
                      nom: "NAT",
                      color: "rgb(63,165,53)",
                      subtitulo: {
                          es: "C. NATURALES",
                          eu: "NATUR ZIENTZIAK",
                          ca: "C.N.C.M. NATURAL",
                          gl: "CIENCIAS NATURAIS",
                          ca_valencia: "CIÈNCIES NATURALS",
                          en: "NATURAL SCIENCE",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Inglés para toda España salvo para Cataluña
                  eng: {
                      nom: "ENG",
                      color: "rgb(183,20,82)",
                      ccaa: ["1","2","3","4","5","6","7","8","10","11","12","13","14","15","16","17","18","19"],  //Cataluña no tiene este inglés
                      subtitulo: {
                          es: "ENGLISH LANGUAGE",
                          eu: "ENGLISH LANGUAGE",
                          ca: "ENGLISH LANGUAGE",
                          gl: "ENGLISH LANGUAGE",
                          ca_valencia: "ENGLISH LANGUAGE",
                          en: "ENGLISH LANGUAGE",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Inglés para Cataluña
                  enc: {
                      nom: "ENG",
                      color: "rgb(183,20,82)",
                      ccaa: ["9"],  //Cataluña tiene este inglés
                      subtitulo: {
                          es: "ENGLISH LANGUAGE CAT",
                          eu: "ENGLISH LANGUAGE CAT",
                          ca: "ENGLISH LANGUAGE CAT",
                          gl: "ENGLISH LANGUAGE CAT",
                          ca_valencia: "ENGLISH LANGUAGE CAT",
                          en: "ENGLISH LANGUAGE CAT",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Castellano en general, salvo Cataluña y Euskadi
                  cas: {
                      nom: "CAS",
                      color: "rgb(236,179,127)",
                      ccaa: ["1","2","3","4","5","6","7","8","10","11","12","13","14","15","17","18","19"], //Cataluña y Euskadi no tienen este castellano
                      subtitulo: {
                          es: "LENGUA CASTELLANA",
                          eu: "LENGUA CASTELLANA",
                          ca: "LENGUA CASTELLANA",
                          gl: "LENGUA CASTELLANA",
                          ca_valencia: "LENGUA CASTELLANA",
                          en: "LENGUA CASTELLANA",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Castellano de Euskadi
                  cse: {
                      nom: "CAS",
                      color: "rgb(236,179,127)",
                      ccaa: ["16"], 
                      subtitulo: {
                          es: "LENGUA CASTELLANA EUS",
                          eu: "LENGUA CASTELLANA EUS",
                          ca: "LENGUA CASTELLANA EUS",
                          gl: "LENGUA CASTELLANA EUS",
                          ca_valencia: "LENGUA CASTELLANA EUS",
                          en: "LENGUA CASTELLANA EUS",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Castellano de Cataluña
                  csc: {
                      nom: "CAS",
                      color: "rgb(236,179,127)",
                      ccaa: ["9"], 
                      subtitulo: {
                          es: "LENGUA CASTELLANA CAT",
                          eu: "LENGUA CASTELLANA CAT",
                          ca: "LENGUA CASTELLANA CAT",
                          gl: "LENGUA CASTELLANA CAT",
                          ca_valencia: "LENGUA CASTELLANA CAT",
                          en: "LENGUA CASTELLANA CAT",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  eus: {
                      nom: "EUS",
                      color: "rgb(202,158,103)",
                      ccaa: ["16"],
                      subtitulo: {
                          es: "EUSKARA",
                          eu: "EUSKARA",
                          ca: "EUSKARA",
                          gl: "EUSKARA",
                          ca_valencia: "EUSKARA",
                          en: "EUSKARA",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // catalán en Baleares
                  cat: {
                      nom: "CAT",
                      color: "rgb(202,158,103)",
                      ccaa: ["4"],
                      subtitulo: {
                          es: "LLENGUA CATALANA (BAL)",
                          eu: "LLENGUA CATALANA (BAL)",
                          ca: "LLENGUA CATALANA (BAL)",
                          gl: "LLENGUA CATALANA (BAL)",
                          ca_valencia: "LLENGUA CATALANA (BAL)",
                          en: "LLENGUA CATALANA (BAL)",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Catalán en Cataluña
                  ctc: {
                      nom: "CAT",
                      color: "rgb(202,158,103)",
                      ccaa: ["9"],
                      subtitulo: {
                          es: "LLENGUA CATALANA",
                          eu: "LLENGUA CATALANA",
                          ca: "LLENGUA CATALANA",
                          gl: "LLENGUA CATALANA",
                          ca_valencia: "LLENGUA CATALANA",
                          en: "LLENGUA CATALANA",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  gal: {
                      nom: "GAL",
                      color: "rgb(202,158,103)",
                      ccaa: ["12"],
                      subtitulo: {
                          es: "LINGUA GALEGA",
                          eu: "LINGUA GALEGA",
                          ca: "LINGUA GALEGA",
                          gl: "LINGUA GALEGA",
                          ca_valencia: "LINGUA GALEGA",
                          en: "LINGUA GALEGA",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  val: {
                      nom: "VAL",
                      color: "rgb(202,158,103)",
                      ccaa: ["10"],
                      subtitulo: {
                          es: "VALENCIÀ",
                          eu: "VALENCIÀ",
                          ca: "VALENCIÀ",
                          gl: "VALENCIÀ",
                          ca_valencia: "VALENCIÀ",
                          en: "VALENCIÀ",
                      },
                      unidades: [],
                      recursos: [],
                  },
              }
          },
          tll: {
              nom: "TLL",
              titulo: {
                  es: "Talleres",
                  eu: "Tailerra",
                  ca: "Tallers",
                  gl: "Obradoiros",
                  ca_valencia: "Tallers",
                  en: "Workshops",
              },
              hijos: {
                  // Educación Religiosa Escolar
                  ere: {
                      nom: "ERE",
                      color: "rgb(239,179,175)",
                      subtitulo: {
                          es: "ERE",
                          eu: "ERLIJIOA",
                          ca: "ERE",
                          gl: "ERE",
                          ca_valencia: "ERE",
                          en: "ERE",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  // Educación en valores, visible en Andalucía
                  evl: {
                      nom: "EVL",
                      color: "rgb(117,97,87)",
                      ccaa: ["1"],
                      subtitulo: {
                          es: "EDUC. VALORES",
                          eu: "EDUC. VALORES",
                          ca: "EDUC. VALORES",
                          gl: "EDUC. VALORES",
                          ca_valencia: "EDUC. VALORES",
                          en: "EDUC. VALORES",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  efe: {
                      nom: "EF",
                      color: "rgb(0,159,227)",
                      subtitulo: {
                          es: "EDUCACIÓN FÍSICA",
                          eu: "GORPUTZ HEZKUNTZA",
                          ca: "EDUCACIÓ FÍSICA",
                          gl: "EDUCACIÓN FÍSICA",
                          ca_valencia: "EDUCACIÓ FÍSICA",
                          en: "PHYSICAL EDUCATION",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  pla: {
                      nom: "PLA",
                      color: "rgb(250,186,74)",
                      subtitulo: {
                          es: "PLÁSTICA",
                          eu: "PLASTIKA",
                          ca: "PLÀSTICA",
                          gl: "PLÁSTICA",
                          ca_valencia: "PLÀSTICA",
                          en: "ARTS AND CRAFTS",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  mus: {
                      nom: "MUS",
                      color: "rgb(120,62,144)",
                      subtitulo: {
                          es: "MÚSICA",
                          eu: "MUSIKA",
                          ca: "MÚSICA",
                          gl: "MÚSICA",
                          ca_valencia: "MÚSICA",
                          en: "MUSIC",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  wkp: {
                      nom: "WKP",
                      color: "rgb(83,165,73)",
                      subtitulo: {
                          es: "WAKE UP",
                          eu: "WAKE UP",
                          ca: "WAKE UP",
                          gl: "WAKE UP",
                          ca_valencia: "WAKE UP",
                          en: "WAKE UP",
                      },
                      unidades: [],
                      recursos: [],
                  },
                  int: {
                      nom: "INT",
                      color: "rgb(202,23,23)",
                      subtitulo: {
                          es: "T. INTERDISCIPLINARES",
                          eu: "DIZIPLINARTEKO T.",
                          ca: "T. INTERDISCIPLINARIS",
                          gl: "O. INTERDISCIPLINARES",
                          ca_valencia: "T. INTERDISCIPLINARIS",
                          en: "INTERDISCIPLINARY W.",
                      },
                      unidades: [],
                      recursos: [],
                  },
              },
          },
          crr: {
              nom: "CRR",
              titulo: {
                  es: "Cierres",
                  eu: "Itxiera",
                  ca: "Tancaments",
                  gl: "Peches",
                  ca_valencia: "Tancaments",
                  en: "Enclosures",
              },
              hijos: {
                  crr: {
                      nom: "CRR",
                      color: "rgb(0,161,154)",
                      subtitulo: {
                          es: "REC. CIERRES",
                          eu: "ITXIERA",
                          ca: "TANCAMENTS",
                          gl: "PECHES",
                          ca_valencia: "TANCAMENTS",
                          en: "ENCLOSURE RES.",
                      },
                      unidades: [],
                      recursos: [],
                  }
              }
          },
        }
      }
  },
  computed: {
    tipos() {
      return Object.keys(this.datos);
    },
    subtipos() {
      if (this.datosusuario.tipoactivo && this.tipos) {
        if (this.tipos.indexOf(this.datosusuario.tipoactivo) > -1) {
          temp1 = this.datosusuario.tipoactivo;
          temp2 = this.datos[temp1];
          temp3 = temp2.hijos;
          temp4 = Object.keys(temp3);
          return temp4;
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    tipoactivotitulo() {
      if(this.datosusuario.tipoactivo && this.datosusuario.lang) {
          if (this.datos[this.datosusuario.tipoactivo].titulo[this.datosusuario.lang]) {
              return this.datos[this.datosusuario.tipoactivo].titulo[this.datosusuario.lang]
          } else {
              return 'null'
          }
      } else {
        return 'null'
      }
    },
    tipoactivosubtipos() {
      if (this.tipos && this.datosusuario.tipoactivo) {
        var temp0 = [];
        var temp1 = Object.keys(this.datos[this.datosusuario.tipoactivo].hijos);
        for (i=0; i < temp1.length; i++) {
          temp2 = this.datos[this.datosusuario.tipoactivo].hijos[temp1[i]];
          temp3 = {customkey: temp1[i], nombre: temp2.nom, color: temp2.color, ccaa: temp2.ccaa};
          temp0.push(temp3);
        }
        return temp0;
      }
    },
    subtipoactivotitulo() {
      if(this.datosusuario.tipoactivo && this.datosusuario.subtipoactivo && this.datosusuario.lang && this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo]) {
        return this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo].subtitulo[this.datosusuario.lang]
      } else {
        return null
      }
    },
    subtipoactivocolor() {
      if(this.datosusuario.tipoactivo && this.datosusuario.subtipoactivo && this.datosusuario.lang && this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo]) {
          if (this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo].color) {
              return this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo].color;
          } else {
              return 'null'
          }
      } else {
        return 'null'
      }
    },
    subtipoactivorecursos() {
      if (this.subtipos && this.datosusuario.subtipoactivo) {
        var temp0 = [];
        var temp1 = this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo];
        if (temp1) {
          var temp2 = temp1.recursos;
          for (i=0; i < temp2.length; i++) {
            temp3 = temp2[i];
            temp4 = {texto: temp3.texto, url: temp3.url};
            temp0.push(temp4);
          }
          return temp0;
        }
      }
    },
    subtipoactivounidades() {
      if (this.tipoactivosubtipos && this.datosusuario.subtipoactivo) {
        var temp0 = [];
        var temp1 = this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo];
        if (temp1) {
          var temp2 = temp1.unidades;
          for (i=0; i < temp2.length; i++) {
            temp3 = temp2[i];
            temp4 = {texto: temp3.texto, url: temp3.url, orden: temp3.orden};
            temp0.push(temp4);
          }
          return temp0;
        }
      }
    },
  },
  methods: {
      cargaUsuario() {
        // Obtenemos la url base para las imagenes;
        if (document.querySelector("#app")) {
          var rutaImagen1 = document.querySelector("#app").dataset.url;
          this.datosusuario.urlmenulateral = rutaImagen1;
        }
        
        // Obtenemos el dato de CCAA. Ojo, esta llamada no es relativa, sino absoluta al estar dentro el htmlrequest;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            mountedApp.datosusuario.ccaa = datos.id_ccaa;
            }
        }
        xhttp.open("GET", "../filter/hidestudent/getIdCCAA.php", false);
        xhttp.send();

        // Obtenemos el dato de idioma.;
        if (document.querySelector('[lang]').getAttribute('lang')) {
          this.datosusuario.lang = document.querySelector('[lang]').getAttribute('lang');
        }

        // Obtenemos el rol del usuario;
        //hacemos la consulta y obtenemos los roles del usuario
        var url = window.location.origin;
        //console.log(window.location);
        url = url.indexOf(".dev.") > -1 ? url + "/lsms" : url
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            sessionStorage.rolesUsuario = this.responseText
            roles = JSON.parse(sessionStorage.getItem("rolesUsuario"));
            if (roles.indexOf( "siteadmin" ) == -1 && roles.indexOf( "student" ) > -1 && roles.indexOf( "editingteacher" ) == -1 && roles.indexOf( "teacher" ) == -1 ){
                mountedApp.datosusuario.rol = "student";
            }
            if (roles.indexOf( "siteadmin" ) == -1 && roles.indexOf( "editingteacher" ) == -1 && roles.indexOf( "teacher" ) > -1 ){
                mountedApp.datosusuario.rol = "teacher";
            }
            if (roles.indexOf( "siteadmin" ) > -1 || roles.indexOf( "editingteacher" ) > -1){
                mountedApp.datosusuario.rol = "editingteacher";
            }
          }
        }
        xhttp.open("GET", url + "/theme/sallenetfordson/getRoles.php", !1);
        xhttp.send();
      },
      cargaPrincipal() {
          // Tras el page load;
          var culo;
          var temp1;
          var temp2;
          var temp3;
          var temp4;
          var temp5;
          var temp6;

          var eInt = document.createElement("div");
          var dtInt;
          var culoInt;
          var temp1Int;
          var temp2Int;
          var temp3Int;
          var temp4Int;
          var temp5Int;
          var temp6Int;
          var temp7Int;

          // Oculta la intro si la edición está desactivada. Modificaciones de estilo en función de si está o no la edición activa.
          var estaeditando = document.querySelectorAll('.editing_move').length;
          if (estaeditando > 0 && document.querySelector("#blockslider")) {
              this.datosusuario.estado = 1;
              document.querySelector("#blockslider").style.display = "block";  // mostramos el div de bloques para tener a mano la bolsa de recursos
          } else {
              document.querySelector("#section-0").style.borderBottom = "none"; // Ocultamos el borde inferior de la sección 0
              document.querySelectorAll('.topics li[id^=section-]').forEach((elem) => elem.style.display = "none"); // Ocultamos las unidades si no está editando
              document.querySelector("#section-0").style.display = "block";
          }

          // sacamos la url inicial
          var urlinic = window.location.href
          if (urlinic.includes("course/view.php")) {
            while ( urlinic.includes("&")) {
              urlinic = urlinic.substr( 0, urlinic.lastIndexOf( "&" ) );
            }
          }
            
          // barremos el curso para sacar las secciones
          culo = document.querySelectorAll('.course-content .topics li.section');

          // barremos el curso sin sección para sacar el número de elementos y generar el menu;
          for (i=1; i<culo.length; i++) {
                
            if (culo[i].querySelector('.section-title a')) {
              // sacamos el titulo, la descripción y la url del elemento;
              temp1 = culo[i].querySelector('.section-title a').href;
              temp2 = culo[i].querySelector('.section-title a').innerText;
              temp2 = temp2.split(" ")[0]; // por si acaso eliminamos texto tras el espacio
              // sacamos los elementos titulo y subtitulo si existen
              if (temp2.split("-")[0] && temp2.split("-")[1]) {
                temp3 = temp2.split("-")[0].toLowerCase();
                temp4 = temp2.split("-")[1].toLowerCase();
                tempIndex = temp2.split("-")[2];
                tempIndex = tempIndex.substring(0, 2); // dejamos sólo los dos primeros caracteres
              } else {
                continue;
              }
              console.log(temp1 + ' ' + temp2 + ' ' + temp3 + ' ' + temp4)
              // sacamos el nombre convencional si existe en la descripción
              if (culo[i].querySelector('.summary div')) {
                temp2 = culo[i].querySelector('.summary div').innerText;
              }
              if (culo[i].querySelector('.summarytext div.no-overflow')) {
                if (culo[i].querySelector('.summarytext div.no-overflow').innerText !== "") {
                  temp2 = culo[i].querySelector('.summarytext div.no-overflow').innerText;
                }
              }
              // comparamos los datos con la estructura de datos y rellenamos sus elementos unidad
              if (temp3 && Object.keys(this.datos).indexOf(temp3) !== -1) {
                temp5 = this.datos[temp3];
                if (temp4 && Object.keys(temp5.hijos).indexOf(temp4) !== -1) {
                temp6 = temp5.hijos[temp4];
                temp6.unidades.push({ texto: temp2, url: temp1, orden: tempIndex });
                }
              }
              // comparamos los datos con la estructura de datos y rellenamos sus elementos recurso
              if (temp3.includes("rec")) {
                  $.get(temp1, function (dataInt) {
                  dtInt = dataInt;
                  eInt.id = "fooInt";
                  eInt.innerHTML = dtInt;
                  culoInt = eInt.querySelectorAll(".single-section .activity");
                  // barremos las actividades de la seccion de recursos
                  for (j=0; j<culoInt.length; j++) {
                    if (culoInt[j].querySelector("a") && culoInt[j].querySelector("a .instancename") && culoInt[j].querySelector('.contentafterlink') ) {
                      temp1Int = culoInt[j].querySelector('a').href;
                      temp2Int = culoInt[j].querySelector('a .instancename').innerText;
                      if (culoInt[j].querySelector('.contentafterlink')){
                        temp3Int = culoInt[j].querySelector('.contentafterlink').innerText;
                      } else {
                        temp3Int = temp2Int;
                      }
                      console.log(temp1Int + ' ' + temp2Int + ' ' + temp3Int);
                      if (temp2Int.split("-").length > 1) { 
                          temp4Int = temp2Int.split("-")[0].split(".")[1].toLowerCase();
                          // comparamos los datos con la estructura de datos y rellenamos sus elementos unidad
                          if (temp2Int.split("-")[0].split(".").length == 3) {
                              temp5Int = temp2Int.split("-")[0].split(".")[2].toLowerCase();
                              if (temp4Int && Object.keys(mountedApp.datos).indexOf(temp4Int) !== -1) {
                                  temp6Int = mountedApp.datos[temp4Int];
                                  if (temp5Int && Object.keys(temp6Int.hijos).indexOf(temp5Int) !== -1) {
                                  temp7Int = temp6Int.hijos[temp5Int];
                                  temp7Int.recursos.push({ texto: temp3Int, url: temp1Int });
                                  }
                              }
                          }
                          // en el caso de que ese nivel de jerarquía sólo tenga 2 elems, los guarda en todos los elems hijos de ese
                          if (temp2Int.split("-")[0].split(".").length == 2) {
                              console.log('temp4Int es ' + temp4Int);
                              if (temp4Int && Object.keys(mountedApp.datos).indexOf(temp4Int) !== -1) {
                                  temp6Int = mountedApp.datos[temp4Int];
                                  temp7Int = Object.keys(temp6Int.hijos);
                                  for (k=0; temp7Int.length > k; k++) {
                                      temp6Int.hijos[temp7Int[k]].recursos.push({ texto: temp3Int, url: temp1Int });
                                  }
                              }
                          }
                      }
                    }
                  }
                });
              }
            }
          }
      },
      cargaseccion (urldestino) {
          // Actualizamos el valor de la sección activa para permitir el aceso si es profesor
          this.datosusuario.urlseccionactiva = urldestino;
          // Hacemos la consulta y cargamos los datos
          $.get(urldestino, function (dataInt) {
              var e = document.createElement("div");
              var dt;
              var culo;
              var tit1;
              var tit2;
              var tit3;
              var temp1;
              var temp2;
              var temp3;
              var temp4;
              var temp5;
              var temp6;
              var temp7;
              var elems = [];
              var listarec = [];
              var listaint = [];
              var listaeval = [];
              var sldr = [];
              var icn = null;
              var recursos;
              // montamos el resultante de la consulta en un div no visible llamado "e"
              dt = dataInt;
              e.id = "fooInt";
              e.innerHTML = dt;
              // obtenemos la descripción de la sección
              if (e.querySelector(".single-section ul.topics .content .summary div:first-child")) {
                  if (e.querySelector(".single-section ul.topics .content .summary div:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "")) {
                      tit1 =  e.querySelector(".single-section ul.topics .content .summary div:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "");
                  } else {
                      tit1 = "";
                  }
              } else {
                  tit1 = "";
              }
              console.log("el nombre de la sección es ");
              console.log(tit1);
              // obtenemos el nombre de la sección
              if (e.querySelector(".single-section ul.topics h3.sectionname a:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "")){
                  tit2 =  e.querySelector(".single-section ul.topics h3.sectionname a:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "");
                  mountedApp.datosusuario.subtipoactivoimagen = tit2.split("-")[0].toLowerCase() + "-" + tit2.split("-")[1].toLowerCase() + "-" + tit2.split("-")[2] + ".png";
              } else {
                  tit2 = "";
              }
              // Asignamos el valor del título en función de si existe o no descripción y nombre
              if (tit1 !== "") {
                  tit3 = tit1;
              } else {
                  tit3 = tit2;
              }
              console.log("el título de la sección es ");
              console.log(tit3);
              // barremos las actividades de la seccion de recursos sacamos sus datos relevantes
              elems = e.querySelectorAll(".single-section .activity");
              for (j=0; j<elems.length; j++) {
                  temp1 = elems[j];
                  // sacamos los datos relevantes ´solo si cumple todas las condiciones necesarias para que funcione bien la extraccion
                  if (temp1.querySelector("a") && temp1.querySelector("a .instancename") ) {
                      temp2 = temp1.querySelector('a').href;
                      temp3 = temp1.querySelector('a .instancename').innerText;
                      if (temp1.querySelector('.contentafterlink')){
                          temp4 = temp1.querySelector('.contentafterlink').innerText;
                      } else {
                          temp4 = temp3;
                      }
                      console.log("los datos del elemento son ");
                      console.log(temp2);
                      console.log(temp3);
                      console.log(temp4);
                      // filtramos el elemento si es recurso, interactiva o slider-alumno, pero antes comprobamos la sintaxis
                      if (temp3.split("-").length > 4) {
                          temp5 = temp3.split("-")[4];
                          if (temp5.split(".").length > 1) {
                              temp6 = temp5.split(".")[0];
                              temp7 = temp5.split(".")[1];
                              console.log(temp5);
                              if (temp6 == "RECU") {
                                  listarec.push({texto: temp4, url: temp2, indice: temp7, titulo: temp3});
                              }
                              if (temp6 == "INTE") {
                                  listaint.push({texto: temp4, url: temp2, indice: temp7, titulo: temp3});
                              }
                              if (temp6 == "SLDR") {
                                  sldr.push({texto: temp4, url: temp2, indice: temp7, titulo: temp3});
                              }
                              if (temp6 == "ICON") {
                                  icn = {texto: temp4, url: temp2, indice: temp7, titulo: temp3};
                              }
                              if (temp6 == "EVAL") {
                                  listaeval.push({texto: temp4, url: temp2, indice: temp7, titulo: temp3});
                              }
                          }
                      }
                  }
              }
              mountedApp.datosusuario.estado = 1;
              mountedApp.datosusuario.recursostitulo = listarec;
              mountedApp.datosusuario.interactivas = listaint;
              mountedApp.datosusuario.evaluaciones = listaeval;
              mountedApp.datosusuario.slider = sldr;
              mountedApp.datosusuario.subtipoactivorotulo = tit3;
              mountedApp.datosusuario.subtipoactivorotulito = mountedApp.subtipoactivotitulo;
              mountedApp.datosusuario.color = mountedApp.subtipoactivocolor;
              if (icn) {
                  mountedApp.datosusuario.urliconoinsertado = icn.url;
              } else {
                  mountedApp.datosusuario.urliconoinsertado = null;
              }
          });
      },
      activatipo(tip) {
          if (this.tipos.indexOf(tip) > -1) {
            this.datosusuario.tipoactivo = tip
          }
      },
      activasubtipo(subtip) {
          if (this.subtipos.indexOf(subtip) > -1) {
            this.datosusuario.subtipoactivo = subtip
          } 
      },
  },
})


//<!-- Componente logo -->

app.component('logo', {
  props: {
      logousuario: {
        type: Object,
        default: {},
      },
  },
  template: 
    /*html*/
    `<div v-if="logourl" id="nca13_mnu_logo" class="row">
      <div v-if="this.rol == 'student' || this.rol == 'teacher'" style="width: 100%;" class="col">
        <img v-bind:src="logourl + logotipofiltrado + '.png'">
      </div>
      <div v-if="this.rol !== 'student' && this.rol !== 'teacher'" style="width: 100%;" class="col">
        <a v-bind:href="seccion"> 
          <img v-bind:src="logourl + logotipofiltrado + '.png'">
        </a>
      </div>
    </div>`,
  computed: {
    logotipo() {
      return this.logousuario.tipoactivo;
    },
    logourl() {
      return this.logousuario.urlmenulateral;
    },
    idioma() {
      return this.logousuario.lang;
    },
    seccion() {
      if (window.location.href.indexOf('section=') > -1 && M.cfg.sesskey && window.location.href.split('&')) {
        let urlSinSeccion = window.location.href.split('&')[0] + '&sesskey=' + M.cfg.sesskey + '&edit=off';
        return urlSinSeccion;
      } else {
        return this.logousuario.urlseccionactiva + '&sesskey=' + M.cfg.sesskey + '&edit=on';
      }
    },
    rol() {
      return this.logousuario.rol
    },
    logotipofiltrado() {
      if (this.logotipo == '' || !this.logotipo) {
        return 'def';
      } else {
        if (this.idioma == 'eu') {
          return this.logotipo + '-eu';
        } else {
          return this.logotipo
        }
      }
    },
  },
})


//<!-- Componente iconos-boton -->

app.component('iconos', {
    props: {
      iconostipos: {
        type: Array,
        required: true,
        default: [],
      },
      iconosurl: {
        type: String,
        required: true,
        default: document.querySelector("#app").dataset.url,
      }
    },
    template: 
      /*html*/
      `<div v-if="iconosurl" id="nca13_mnu_icon" class="row">
        <div v-for="tip in iconostipos" v-bind:style="iconosWidth" class="col nca13_mnu_icon_btn"  v-on:click="iconosactivatipo(tip)">
          <a><img v-bind:src="iconosurl + 'icono' + tip + '.png'" style="width:100%"></a>
        </div>
      </div>`,
    computed: {
      iconosWidth() {
        if (this.iconostipos.length > 0) {
          return 'width: ' + (100 / this.iconostipos.length) + '%';
        } else {
          return 'width: 20%';
        }
      },
    },
    methods: {
      iconosactivatipo(item) {
        this.$emit('activa-tipo', item)
      }
    }
})

//<!-- Componente botones -->

app.component('botones', {
    props: {
      botonestipo: {
        type: String,
        default: 'null',
      },
      botonessubtipos: {
        type: Array,
        required: true,
        default: [],
      },
      botonestitulo: {
        type: String,
        required: true,
        default: 'null',
      },
      botonesccaa: {
        type: String,
        default: '',
      },
    },
    template: 
      /*html*/
      `<div v-if="botonestipo !== ''" id="nca13_mnu_tit" class="row">
        <div class="nca13_mnu_tit_text col">
          <h4>{{ botonestitulo }}</h4>
        </div>
      </div>
      <div id="nca13_mnu_btn" class="row">
        <div class="col nca13_mnu_btn_elem" v-for="subtip in botonessubtiposfiltrados" v-bind:style="botonesstyle + subtip.color" v-on:click="botonesactivasubtipo(subtip)">
          <a>{{ subtip.nombre }}</a>
        </div>
      </div>`,
    computed: {
      botonesstyle() {
        if (this.botonessubtipos.length > 0) {
          return 'width: ' + (100 / this.botonessubtipos.length) + '%' + '; background-color: ';
        } else {
          return 'background-color: ';
        }
      },
      botonessubtiposfiltrados() {
        // Mostrará la subcategoría si: 1- La categoría no tiene definida ccaas.  2- El sitio no tiene ccaa definida   3- La ccaa del sitio y una de las de categoría coinciden
        return this.botonessubtipos.filter( elem => ( !elem.ccaa || this.botonesccaa == null || elem.ccaa.indexOf(this.botonesccaa) > -1 ) );
      },
    },
    methods: {
      botonesactivasubtipo(item) {
        this.$emit('activa-subtipo', item.customkey);
        console.log(item + ' ' + item.customkey);
      }
    },
})


//<!-- Componente lista -->

app.component('lista', {
    props: {
      listasubtipo: {
        type: String,
        default: '',
      },
      listarecursos: {
        type: Array,
        required: true,
        default: [],
      },
      listaunidades: {
        type: Array,
        required: true,
        default: [],
      },
      listacolor: {
        type: String,
        default: 'red',
      },
      listatitulo: {
        type: String,
        default: 'titulo default',
      },
    },
    template: 
      /*html*/
      `<div id="nca13_mnu_list" class="row" v-if="listasubtipo !== ''">
        <div class="col nca13_mnu_list_tit">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-if="listaunidades.length > 0" v-bind:style="listastyletit">
              {{ listatitulo }}
            </li>
          </ul>
          <ul class="nca13_mnu_list_rec list-group list-group-flush">
            <li class="list-group-item" v-bind:style="listastylerec" v-for="listarecurso in listarecursos">
              <a target="_blank" v-bind:href="listarecurso.url" v-bind:style="listastylerecuni">{{ listarecurso.texto }}</a>
            </li>               
            <li class="list-group-item" v-for="listaunidad in listaunidades" v-on:click="listaactivasseccion(listaunidad.url)">
              <span class="badge rounded-pill" v-bind:style="listastyleuni">{{ listaunidad.orden }}</span>
              {{ listaunidad.texto }}
            </li>	
          </ul>
        </div>
      </div>`,
    computed: {
      listastyletit() {
        return 'font-weight: bold; border: none; background-color: ' + this.listacolor;
      },
      listastylerec() {
        //return 'border: none; background-color: rgba(' + this.listacolor.slice(4,this.listacolor.length-1) + ',0.2)';
        return 'border: none; background-color: rgba(255,255,255,0.5)';
      },
      listastylerecuni() {
        return 'color: ' + this.listacolor;
      },
      listastyleuni() {
        //return 'color: ' + this.listacolor;
        return 'border-radius:5px;margin-right:10px;background-color:rgba(255,255,255,0.5);color:' + this.listacolor + ';min-width:2em;';
      },
    },
    methods: {
        listaactivasseccion(item) {
            this.$emit('activa-seccion', item);
            console.log(item);
        }
    },
})

//<!-- Componente menucentral -->


// esta función no se puede meter dentro del componente por un tema de scope
function insertalo(val,insertausuario) {
  if (val) {
      console.log(val);
      // definimos las variables necesarias
      var fueralibro = document.createElement("div");
      var dt;
      var e = document.createElement("div");
      var culo;
      // accedemos al vínculo del slider / imagenalumno y extraemos su contenido
      $.get(val, function (data) {
          dt = data;
          e.id = "foo";
          e.innerHTML = dt;
          culo = e.querySelector('#region-main .box').innerHTML;
          document.querySelector('#nca13-mnu-ctrl-slider').innerHTML = culo;
          // Unimos las listas de recursos
          var arrayunida = [];
          arrayunida = arrayunida.concat(insertausuario.interactivas,insertausuario.recursostitulo,insertausuario.evaluaciones)
          //Aquí realizaremos el reemplazo dinámico de urls. por ahora definimos la función
          function textfinder (searchingtext, array) {
            for (var i = 0; i < array.length; i++) {
              if (array[i].titulo.split(" ")[0] == searchingtext) {
              //console.log (array[i]);
              return array[i];
              break;
              } else {
              //console.log (array[i].titulo.split(" ")[0] + '-------------' + searchingtext)
              }
            }
            return false;
          }
          // Sacamos todos los elementos con href del documento
          var vinculoslista = document.querySelectorAll('#nca13-mnu-ctrl-slider .nca_book_titulo a[href], #nca13-mnu-ctrl-slider .nca_book_recursos a[href]');
          for (var j = 0; j < vinculoslista.length; j++) {
              var vinculoinic = vinculoslista[j].getAttribute("href");
              //console.log(vinculoinic);
              var vinculohref = vinculoinic
              //console.log(vinculohref);
              if (textfinder(vinculohref,arrayunida)) {
                  var vinculonuevo = textfinder(vinculohref,arrayunida).url;
                  //console.log(vinculonuevo);
                  if (vinculonuevo) {
                      vinculoslista[j].setAttribute("href",vinculonuevo);
                  }
              }
          }
          // cargamos el filtro multimedia de nuevo para mostrar los videos de youtube
          require(["media_videojs/loader"], function(loader) {
              loader.setUp(function(videojs) {});
          });
      });
  } 
}

app.component('menucentral', {
    props: {
      centralusuario: {
        type: Object,
        default: {},
      },
      centralslider: {
        type: Object,
        default: {},       
      },
    },
    data() {
      return {
        centralrecursosactivo: false,
        guiatraducida: {
          es: "Guía de actividades",
          eu: "Guía actividades euskera",
          ca: "Guía actividades catalá",
          gl: "Guía activdiades galego",
          ca_valencia: "Guía actividades valenciá",
          en: "Guía de actividades english",
        },
        tipoactivoFijo : this.centralusuario.tipoactivo,
      }
    },
    updated() {
      this.tipoactivoFijo = this.centralusuario.tipoactivo;
    },
    template: 
      /*html*/
      `<div id="nca13_mnu_intro" class="container" v-if="centralusuario.estado == 0">     
          <div class="centrador">
              <div class="parte1">
                  <div class="itemGroup itemGroup">
                      <div class="item">
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-1.png'" width="100" height="100" /></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-1.png'" width="100" height="100" /></p>
                          <p></p>
                      </div>
                  </div>
                  <div class="itemGroup itemGroup">
                      <div class="item">
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-2.png'" width="100" height="100" /></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-2.png'" width="100" height="100" /></p>
                          <p></p>
                      </div>
                  </div>
                  <div class="itemGroup itemGroup">
                      <div class="item">
                          <p></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-3.png'" width="100" height="100" /></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-3.png'" width="100" height="100" /></p>
                          <p></p>
                      </div>
                  </div>
                  <div class="itemGroup itemGroup">
                      <div class="item">
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-4.png'" width="100" height="100" /></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-4.png'" width="100" height="100" /></p>
                          <p></p>
                      </div>
                  </div>
                  <div class="itemGroup itemGroup">
                      <div class="item">
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-5.png'" width="100" height="100" /></p>
                          <p><img v-if="centralusuario.urlmenulateral !== ''" v-bind:src="centralusuario.urlmenulateral + 'Loader-5.png'" width="100" height="100" /></p>
                          <p></p>
                      </div>
                  </div>
              </div>
              <div class="parte2">
                  <h1>
                      {{ centralusuario.introbienvenida[centralusuario.lang] }}
                  </h1>
                  <p>
                      {{ centralusuario.intromensaje[centralusuario.lang] }}
                  </p>
              </div>
          </div>
      </div>

      <div id="nca13_mnu_ctrl" class="container">

      <div class="row">
        <div class="col nca13-mnu-ctrl-mas" v-bind:style="centralstylemas" v-on:click="actualizarecursoactivo">
          <h2>+</h2>
        </div>
        <div class="col nca13-mnu-ctrl-tit">
          <div class="titulo">
            <p id="nca13-mnu-subtitulo">{{ centralusuario.subtipoactivorotulito }}</p>
            <p id="nca13-mnu-titulo">{{ centralusuario.subtipoactivorotulo }}</p>
          </div>
        </div>
        <div class="col nca13-mnu-ctrl-icon">
          <img v-if="centralurllogo !== 'vacio'" id="nca13-mnu-imagen" v-bind:src="centralurllogo" style="width:100%">
        </div>
      </div>

      <div id="nca13-mnu-ctrl-recursos" class="row justify-content-start" v-if="centralrecursosactivo">
        <div class="col-auto">
            <div v-bind:style="centralstylerec" style="cursor:pointer;" class="nca13-mnu-ctrl-recursos-elem" v-on:click="generapdf">{{ guiatraducida[centralusuario.lang] }}</div>
        </div>
        <div class="col-auto" v-for="recurso in centralrecursostitulofiltrado">
          <a target="_blank" v-bind:href="recurso.url" v-bind:style="centralstylerec">
            <div class="nca13-mnu-ctrl-recursos-elem">{{ recurso.texto }}</div>
          </a>
        </div>
      </div>

      <div id="nca13-mnu-ctrl-interactivas" class="row justify-content-end" v-bind:data-slider="centralsliderfiltrado">
        <a target="_blank" v-for="interactiva in centralinteractivasfiltrado" v-bind:href="interactiva.url">
          <div class="col-auto" v-bind:style="centralstyleint">
            {{ interactiva.indice }}
          </div>
        </a>
      </div>



      </div>`,
    computed: {
      centralstyleint() {
        return "background-color:" + this.centralusuario.color + "; background-image:url('" + this.centralusuario.urlmenulateral + this.tipoactivoFijo.toUpperCase() + ".png')";
      },
      centralstylemas() {
        return 'background-color: ' + this.centralusuario.color;
      },
      centralstylerec() {
        return 'font-weight: bold; color: ' + this.centralusuario.color;
      },
      centralurllogo() {
          // Este es el caso de que se haya metido un recurso tipo "ICON" en la sección, que reemplaza al icono por defecto del menú.
          if (this.centralusuario.urliconoinsertado) {
              // definimos las variables necesarias
              var fueralibro = document.createElement("div");
              var dt;
              var e = document.createElement("div");
              var culo;
              // accedemos al vínculo del recurso página y extraemos su contenido
              $.get(this.centralusuario.urliconoinsertado, function (data) {
                  dt = data;
                  e.id = "foo";
                  e.innerHTML = dt;
                  culo = e.querySelector('#region-main .box img');
                  // tenemos que cambiar la imagen accediendo al DOM porque Vue no lo cambia
                  document.querySelector("#nca13-mnu-imagen").src = culo.getAttribute("src");
                  return culo.getAttribute("src");
              });
          } else {
              if (this.centralusuario.subtipoactivoimagen !== "") {
                  return this.centralusuario.urlmenulateral + this.centralusuario.subtipoactivoimagen;
              } else {
                  return 'vacio';
              }  
          }
      },
      centralrecursostitulofiltrado () {
        var temp0 = this.centralusuario.recursostitulo;
        console.log('recursos inicial es: ' + temp0);
        // Filtro por rol. Ocultamos los recursos didacticos si el rol es student;
        if (this.centralusuario.rol == "student") {
            temp0 = temp0.filter(elem => elem.indice !== "RD")
            console.log('recursos filtro por rol queda: ');
            console.log(temp0);
        }
        // Filtro por ccaa 1. Eliminamos los elementos de ccaa ajenas al usuario;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
            temp0 = temp0.filter(elem => elem.titulo.split("-")[2] == "0" || elem.titulo.split("-")[2] == this.centralusuario.ccaa);
            console.log('recursos filtro por ccaa-1 queda: ');
            console.log(temp0);
        }
        // Filtro por ccaa 2. Si hay dos elementos de igual indice e idioma pero ccaa estatal y autonomica eliminamos la estatal;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
            function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] && elem.titulo.split("-")[1] == array[i].titulo.split("-")[1] && elem.titulo.split("-")[2] == "0" && i !== index) {
                        temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('recursos filtro por ccaa-2 queda: ');
            console.log(temp0);
        }
        // Filtro por idioma. Si hay dos elementos de igual indice y ccaa pero idioma distinto eliminamos la que tiene idioma distinto al usuario;
        var langtrad = {es: "CAS", en:"ENG", eu:"EUS", ca:"CAT", ca_valencia:"VAL", gl:"GAL"};
        var langactivo = langtrad[this.centralusuario.lang];
        if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
          function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (  elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
                          elem.titulo.split("-")[2] == array[i].titulo.split("-")[2] && 
                          elem.titulo.split("-")[1] !== array[i].titulo.split("-")[1] &&
                          elem.titulo.split("-")[1] !== langactivo &&
                          i !== index
                        ) {
                          temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('recursos filtro por idioma queda: ');
            console.log(temp0);
        }
        // Fin de filtros. 
        return temp0;
      },
      centralinteractivasfiltrado () {
        var temp0 = this.centralusuario.interactivas;
        console.log('interactivas inicial es: ');
        console.log(temp0);
        // Filtro por calificación. Si la interactiva es evaluable añade paréntesis al texto indice para resaltarla
        temp0.forEach(function(part,index) {
            if (this[index].titulo.split("-")[3] == "SI") {
                this[index].indice = '(' + this[index].indice + ')';
            }
        }, temp0);
        // Filtro por rol. Ninguno; Si se quiere una interactiva oculta al alumno hacer el elemento moodle oculto.
        // Filtro por ccaa 1. Eliminamos los elementos de ccaa ajenas al usuario;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
            temp0 = temp0.filter(elem => elem.titulo.split("-")[2] == "0" || elem.titulo.split("-")[2] == this.centralusuario.ccaa);
            console.log('interactivas filtro por ccaa-1 queda: ');
            console.log(temp0);
        }
        // Filtro por ccaa 2. Si hay dos elementos de igual indice e idioma pero ccaa estatal y autonomica eliminamos la estatal;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
          function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] && elem.titulo.split("-")[1] == array[i].titulo.split("-")[1] && elem.titulo.split("-")[2] == "0" && i !== index) {
                        temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('interactivas filtro por ccaa-2 queda: ');
            console.log(temp0);
        }
        // Filtro por idioma. Si hay dos elementos de igual indice y ccaa pero idioma distinto eliminamos la que tiene idioma distinto al usuario;
        var langtrad = {es: "CAS", en:"ENG", eu:"EUS", ca:"CAT", ca_valencia:"VAL", gl:"GAL"};
        var langactivo = langtrad[this.centralusuario.lang];
        if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
          function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (  elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
                          elem.titulo.split("-")[2] == array[i].titulo.split("-")[2] && 
                          elem.titulo.split("-")[1] !== array[i].titulo.split("-")[1] &&
                          elem.titulo.split("-")[1] !== langactivo &&
                          i !== index
                        ) {
                          temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('interactivas filtro por idioma queda: ')
            console.log(temp0);
        }
        // Fin de filtros. 
        return temp0;
      },
      centralsliderfiltrado () {
        var temp0 = this.centralusuario.slider;
        console.log('slider inicial es: ' + temp0);
        // Filtro por rol. Ocultamos los slider de profesor;
        if (this.centralusuario.rol == "student") {
            temp0 = temp0.filter(elem => elem.indice !== "PF")
        } else {
            temp0 = temp0.filter(elem => elem.indice !== "AL")
        }
        console.log('slider filtro por rol queda: ' + temp0);
        // Filtro por ccaa 1. Eliminamos los elementos de ccaa ajenas al usuario;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
            temp0 = temp0.filter(elem => elem.titulo.split("-")[2] == "0" || elem.titulo.split("-")[2] == this.centralusuario.ccaa);
        }
        console.log('slider filtro por ccaa-1 queda: ');
        console.log(temp0);
        // Filtro por ccaa 2. Si hay dos elementos de igual indice e idioma pero ccaa estatal y autonomica eliminamos la estatal;
        if (this.centralusuario.ccaa && this.centralusuario.ccaa !== "") {
            function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] && elem.titulo.split("-")[1] == array[i].titulo.split("-")[1] && elem.titulo.split("-")[2] == "0" && i !== index) {
                        temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('slider filtro por ccaa-2 queda: ');
            console.log(temp0);
        }
        // Filtro por idioma. Si hay dos elementos de igual indice y ccaa pero idioma distinto eliminamos la que tiene idioma distinto al usuario;
        var langtrad = {es: "CAS", en:"ENG", eu:"EUS", ca:"CAT", ca_valencia:"VAL", gl:"GAL"};
        var langactivo = langtrad[this.centralusuario.lang];
        if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
          function apaño(elem, index, array) {
                temp1 = true;
                for (i=0; i < array.length; i++) {
                    if (  elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
                          elem.titulo.split("-")[2] == array[i].titulo.split("-")[2] && 
                          elem.titulo.split("-")[1] !== array[i].titulo.split("-")[1] &&
                          elem.titulo.split("-")[1] !== langactivo &&
                          i !== index
                        ) {
                          temp1 = false;
                    }
                }
                return temp1;
            }
            temp0 = temp0.filter(apaño, temp0);
            console.log('slider filtro por idioma queda: ');
            console.log(temp0);
        }
        // Filtro por origen de datos. Si existe un slider SLDR.JS, deja únicamente ese.
        let temp2 = temp0.filter(elem => elem.indice !== "JS")
        if (temp2.length > 0) {
            temp0 = temp2
        }
        console.log('slider filtro por origen de datos queda: ' + temp0);
        // Fin de filtros.
        // Insertamos elementos del slider; Si no hay elemento SLDR, borramos el existente.
        // Si existe elemento SLDR.JS cargará los datos JSON de base de datos y borrará el slider previo. Si no, cargara HTML desde SLDR.PF
        if (temp0[0]) {
            mountedApp.datosusuario.urlsliderfiltrado = temp0[0];
            if (temp0[0].url && temp0[0].indice !== "JS") {
                mountedApp.datosusuario.sliderjsonvisible = false;
                insertalo(mountedApp.datosusuario.urlsliderfiltrado.url,mountedApp.datosusuario);
            } else {
                // Meter aquí la función que hace la consulta y carga el JSON de la base de datos
                axios.get('https://moodle.vetorius.tk/local/slider/getslider.php?slidername=02.1.MAT-MUL-0-NO-SLDR.JS.')
                .then(function (response) {
                  // handle success
                    mountedApp.sliderjson = response;
                    document.querySelector('#nca13-mnu-ctrl-slider').innerHTML = "";
                    mountedApp.datosusuario.sliderjsonvisible = true;
                  console.log(response);
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
                .then(function () {
                  // always executed
              });
            }
        } else {
            document.querySelector('#nca13-mnu-ctrl-slider').innerHTML = "";
        }
        return temp0;
      },
    },
    methods: {
      actualizarecursoactivo() {
        this.centralrecursosactivo = !this.centralrecursosactivo;
      },
      generapdf () {
        // Creamos el objeto que contiene los textos traducidos
        let textos = [];
        textos.push({id: 'tablaContenidos', textos: {es:'TABLA DE CONTENIDOS', en:'TABLE OF CONTENTS', eu:'EDUKIEN TAULA', ca:'TAULA DE CONTINGUTS', ca_valencia:'TAULA DE CONTINGUTS', gl:'TÁBOA DE CONTIDOS'}});
        textos.push({id: 'sesion', textos: {es:'Sesión', en:'Session', eu:'Saioa', ca:'Sessió', ca_valencia:'Sessió', gl:'Sesión'}});
        textos.push({id: 'actividad', textos: {es:'Actividad', en:'Activity', eu:'Jarduera', ca:'Activitat', ca_valencia:'Activitat', gl:'Actividade'}});
        textos.push({id: 'secuenciaDeActividades', textos: {es:'SECUENCIA DE ACTIVIDADES', en:'SEQUENCE OF ACTIVITIES', eu:'JARDUEREN HURRENKERA', ca:'SEQÜÈNCIA D\'ACTIVITATS', ca_valencia:'SEQÜÈNCIA D\'ACTIVITATS', gl:'SECUENCIA DE ACTIVIDADES'}});
        textos.push({id: 'de', textos: {es:'de', en:'of', eu:'/', ca:'de', ca_valencia:'de', gl:'de'}});
        textos.push({id: 'descripcion', textos: {es:'Descripción', en:'Description', eu:'Deskribapena', ca:'Descripció', ca_valencia:'Descripció', gl:'Descrición'}});
        textos.push({id: 'recursos', textos: {es:'Recursos', en:'Resources', eu:'Baliabideak', ca:'Recursos', ca_valencia:'Recursos', gl:'Recursos'}});
        // Creamos la función extractora de textos
        function textoMul(id,lang) {
          let textoTraducido = 'identificador no encontrado'
          for (i=0; i<textos.length; i++) {
            let textoActual = textos[i];
            if (textoActual.id == id) {
              if (textoActual.textos[lang] && textoActual.textos[lang] !== '') {
                textoTraducido = textoActual.textos[lang];
                return textoTraducido;
              } else {
                textoTraducido = 'traduccion no encontrada'
                return textoTraducido;
              }
            }
          }
        }
        // Iniciamos el contenedor del pdf
        var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
        // Ponemos el título
        let titulo = document.querySelector('#nca13-mnu-titulo').textContent
        doc.setFontSize(20)
        doc.setTextColor(40)
        doc.text(titulo, 14, 22)
        doc.setFontSize(15)
        // Obtenemos los datos para la tabla de contenidos
        var finalY = 10
        doc.text(textoMul('tablaContenidos',this.centralusuario.lang), 14, finalY + 25)
        let numactividad = 0;
        let tablaactividad = [];
        for (let i = 0; i < this.centralslider.sesiones.length; i++) {
            let sesion = '00' + (i + 1);
            sesion = sesion.substring(sesion.length-2,sesion.length);
            let numactividades = this.centralslider.sesiones[i].numactividades;
            let actividades = ""
            for (let j = 0; j < numactividades; j++) {
                actividades = actividades + this.centralslider.actividades[numactividad].titulo + '\n';
                numactividad++;
            }
            tablaactividad.push([ textoMul('sesion',this.centralusuario.lang) + ' ' + sesion, actividades])
        }
        // Insertamos la tabla de contenidos
        doc.autoTable({
          startY: finalY + 30,
          head: [[textoMul('sesion',this.centralusuario.lang), textoMul('actividad',this.centralusuario.lang)]],
          body: tablaactividad,
          headStyles: {
              fillColor: [200, 200, 200],
              fontSize: 15,
          },
          bodyStyles: {
              fillColor: [245, 245, 245],
              textColor: 50,
          },
            alternateRowStyles: {
              fillColor: [245, 245, 245],
              textColor: 50,
          },
        })
        doc.addPage();
        // titulo de lista de actividades
        var finalY = 10
        doc.text(textoMul('secuenciaDeActividades',this.centralusuario.lang), 14, 20)
        // Recorremos el documento entero para generar las tablas de actividades
        let actividadprimera = 31;
        numactividad = 0;
        for (let i = 0; i < this.centralslider.sesiones.length; i++) {
            // Añadimos el número de sesion
            let sesion = '00' + (i + 1);
            sesion = sesion.substring(sesion.length-2,sesion.length);
            // Por cada actividad en esta sesión metemos su tabla de actividad
            let numactividades = this.centralslider.sesiones[i].numactividades;
            for (let j = 0; j < numactividades; j++) {
              // Para configurar la altura del autotable, vemos si es la primera del grupo
              if (j == 0) {
                actividadprimera = 31
              } else {
                acticidadprimera = null;
              }
              // Definimos el contenido de la tabla
              let temp1 = this.centralslider.actividades[numactividad]
              let temp2 = '00' + (numactividad + 1);
              temp2 = temp2.substring(temp2.length-2,temp2.length);
              // Metemos el titulo
              doc.text(textoMul('sesion',this.centralusuario.lang) + ' ' + sesion + '   '+ textoMul('actividad',this.centralusuario.lang) + ' ' + (j + 1) + ' ' + textoMul('de',this.centralusuario.lang) + ' ' + numactividades, 14, 28)
              let temp3 = temp1.titulo;
              let temp4 = '\n' + temp1.descripcion;
                  // Limpiamos el html del string de la descripcion
                  temp4 = temp4.replace(/<style([\s\S]*?)<\/style>/gi, '');
                  temp4 = temp4.replace(/<script([\s\S]*?)<\/script>/gi, '');
                  temp4 = temp4.replace(/<\/div>/ig, '\n\n');
                  temp4 = temp4.replace(/<\/li>/ig, '\n\n');
                  temp4 = temp4.replace(/<li>/ig, '  *  ');
                  temp4 = temp4.replace(/<\/ul>/ig, '\n\n');
                  temp4 = temp4.replace(/<\/p>/ig, '\n\n');
                  temp4 = temp4.replace(/<br\s*[\/]?>/gi, "\n\n");
                  temp4 = temp4.replace(/<[^>]+>/ig, '');
              let recursos = "\n"
              temp1.recursos.forEach((element) => recursos = recursos + element.titulo + '\n\n' )
              doc.autoTable({
                startY: actividadprimera,
                head: [[temp2, temp3]],
                body: [
                    ['\n' + textoMul('descripcion',this.centralusuario.lang), temp4],
                    ['\n' + textoMul('recursos',this.centralusuario.lang), recursos],
                ],
                headStyles: {
                    fillColor: [200, 200, 200],
                    fontSize: 15,
                },
                bodyStyles: {
                    fillColor: [245, 245, 245],
                    textColor: 50,
                },
                  alternateRowStyles: {
                    fillColor: [245, 245, 245],
                    textColor: 50,
                },
              })
              doc.addPage();
              // actualizamos el numero de actividad
              numactividad++;
            };
            
        }
        doc.save();
      },
    },  
})

//<!-- Componente slider desde json -->

app.component('slider', {
  props: {
      sliderusuario: {
          type: Object,
          required: true,
          default: {},
      },
      sliderjson: {
          type: Object,
          required: true,
          default: {},
      },
      slidercolor: { // TODO: Eliminar esta vinculacion porque no es necesaria
          type: String,
          required: false,
          default: 'red',
      },
  },
  data() {
    return {
      activactivo: this.sliderusuario.slideractivactivo,
      slidercolorFijo: this.sliderusuario.color,
    }
  },
  updated() {
    // Aquí están los elementos que se llaman cuando el componente se ha actualizado
    this.slidercolorFijo = this.sliderusuario.color;
    // Unimos las listas de recursos
    var arrayunida = [];
    arrayunida = arrayunida.concat(this.sliderusuario.interactivas,this.sliderusuario.recursostitulo,this.sliderusuario.evaluaciones);
    //Aquí realizaremos el reemplazo dinámico de urls. por ahora definimos la función
    function textfinder (searchingtext, array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].titulo.split(" ")[0] == searchingtext) {
        //console.log (array[i]);
        return array[i];
        break;
        } else {
        //console.log (array[i].titulo.split(" ")[0] + '-------------' + searchingtext)
        }
      }
      return false;
    }
    // Sacamos todos los elementos con href del slider (no del json)
    var vinculoslista = document.querySelectorAll('.nca_book_recursos_col_short a[href]');
    for (var j = 0; j < vinculoslista.length; j++) {
        var vinculoinic = vinculoslista[j].getAttribute("href");
        //console.log(vinculoinic);
        var vinculohref = vinculoinic
        //console.log(vinculohref);
        if (textfinder(vinculohref,arrayunida)) {
            var vinculonuevo = textfinder(vinculohref,arrayunida).url;
            //console.log(vinculonuevo);
            if (vinculonuevo) {
                vinculoslista[j].setAttribute("href",vinculonuevo);
            }
        }
    }
    // cargamos el filtro multimedia de nuevo para mostrar los videos de youtube
    require(["media_videojs/loader"], function(loader) {
        loader.setUp(function(videojs) {});
    });
  },
  template: 
    /*html*/
    `<div v-if="sliderusuario.sliderjsonvisible" class="carousel slide carousel-fade">

        <div class="carousel-sesiones row" style="position:relative">
            <div v-for="(sesion, index) in sliderjson.sesiones" class="nca_carousel_sesiones_hija col" v-bind:style="stylesesion(sesion.numactividades)">
                S-{{ index + 1 }}
            </div>
        </div>

        <div style="position:relative" class="carousel-indicators row">
            <div v-for="(activ, index) in sliderjson.actividades" v-bind:style="styleactividad(index)" v-bind:class="classactividad(index)" v-on:click="actualizarslider(index)">
                {{ contentactividad(index) }}
            </div>
        </div>

        <div class="carousel-inner">
            <div class="slider-vue carousel-item row">

                <div class="nca_book_slide_vue row">
                    <div class="col-md-1 title nca_book_orden" v-bind:style="styleorden()">
                        <div class="row align-items-center" style="text-align:center;">
                            <div class="col-md-3"><span class="carousel-control-prev-icon" aria-hidden="true" v-on:click="actualizarslider(activatras())"></span></div>
                            <div class="col-md-6"><h2>{{ contentactividad(activactivo) }}</h2></div>
                            <div class="col-md-3"><span class="carousel-control-next-icon" aria-hidden="true" v-on:click="actualizarslider(activdelante())"></span></div>
                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="col-md-12 nca_book_titulo">
                            <h2>{{ sliderjson.actividades[activactivo].titulo }}</h2>
                        </div>
                        <div class="col-md-12 left nca_book_descripcion" v-html="sliderjson.actividades[activactivo].descripcion"></div>
                    </div>

                    <div class="col-md-4">
                        <div class="nca_book_recursos" v-bind:style="'background-color:' + slidercolorAclarado(slidercolorFijo)">
                            <div class="row" v-for="(recur, index) in sliderjson.actividades[activactivo].recursos">
                                <div class="nca_book_recursos_col_long">
                                    {{ sliderjson.actividades[activactivo].recursos[index].titulo }}
                                </div>
                                <div v-if="(sliderjson.actividades[activactivo].recursos[index].tipo !== 'mat')" class="nca_book_recursos_col_short">
                                    <a class="nca_book_recursos_icon" v-bind:href="sliderjson.actividades[activactivo].recursos[index].url" target="_blank">
                                        <i v-bind:class="classicono(index)" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div v-if="sliderjson.actividades[activactivo].recursos[index].tipo == 'vid' && recursourlvideo(sliderjson.actividades[activactivo].recursos[index].url) == ''" class="nca_book_recursos_col_long" style="width:100%; margin-top:10px;">
                                    <a v-bind:href="sliderjson.actividades[activactivo].recursos[index].url" target="_blank">
                                        Content Link
                                    </a>
                                </div>
                                <div v-if="sliderjson.actividades[activactivo].recursos[index].tipo == 'vid' && recursourlvideo(sliderjson.actividades[activactivo].recursos[index].url) !== ''" class="nca_book_recursos_col_long" style="height:0; width:100%; margin-top:20px; position:relative; padding-bottom:56.25%">
                                    <iframe v-bind:src="recursourlvideo(sliderjson.actividades[activactivo].recursos[index].url)" style="position: absolute; top: 0; left: 0; height:100%; width: 100%; padding-left: 20px; padding-right:20px; padding-bottom:20px; border: 0;"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`,
  computed: {
  },
  methods: {
    slidercolorAclarado(color) {
      if (color.split("(").length > 1) {
        let valoresColor = color.split("(")[1].split(")")[0];
        valoresColor = 'rgba(' + valoresColor + ',.5)'
        return valoresColor;
      } else {
        return 'red'
      }
    },
    classactividad(index) {
      let temp1 = '';
      let temp2 = '';
      if (this.sliderusuario.slideractivactivo == index) {
        temp1 = ' active';
      };
      if (this.sliderjson.actividades[index].evaluable == true) {
        temp2 = ' nca_book_activ_eval';
      };
      return 'col' + temp1 + temp2;
    },
    classicono(index) {
      let temp1 = '';
      let temp2 = this.sliderjson.actividades[this.activactivo].recursos[index].tipo
      if (temp2 == 'rec') {temp1 = "fa fa-briefcase"};
      if (temp2 == 'cua') {temp1 = "fa fa-book"};
      if (temp2 == 'int') {temp1 = "fa fa-laptop"};
      if (temp2 == 'ext') {temp1 = "fa fa-external-link"};
      if (temp2 == 'eva') {temp1 = "fa fa-edit"};
      if (temp2 == 'ral') {temp1 = "fa fa-address-card"};
      if (temp2 == 'vid') {temp1 = "fa fa-film"};
      return temp1;
    },
    styleorden() {
      return 'background-color:' + this.slidercolorFijo + ';';
    },
    styleactividad(index) {
      let temp1 = '';
      let temp2 = 'background-color:' + this.slidercolorFijo + '; color:white;';
      if (this.sliderusuario.slideractivactivo == index) {
        return temp2;
      } else {
        return temp1;
      }
    },
    stylesesion(elems) {
      let temp1;
      temp1 = ( elems / this.sliderjson.actividades.length) * 100;
      return 'width:' + temp1 + '%;';
    },
    contentactividad(index) {
      let temp1 = '00' + (index+1);
      let temp2 = temp1.substring(temp1.length-2,temp1.length);
      return temp2;
    },
    actualizarslider(index) {
      this.sliderusuario.slideractivactivo = index;
      this.activactivo = this.sliderusuario.slideractivactivo;
    },
    activatras() {
      let temp1 = this.activactivo - 1;
      if (this.activactivo == 0) {
        return 0
      } else {
        return temp1;
      }
    },
    activdelante() {
      let temp1 = this.activactivo + 1;
      if (this.activactivo == (this.sliderjson.actividades.length - 1) ) {
        return this.activactivo;
      } else {
        return temp1;
      }
    },
    recursourlvideo(url) {
      let temp1 = '';
      if (url && url.indexOf('www.yout') > -1 && url.split('v=')[1]) {
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
        temp1 = 'https://www.youtube.com/embed/' + video_id
      }
      return temp1
    },
  },
});


//<!-- Carga de App -->

const mountedApp = app.mount('#app');
window.addEventListener('DOMContentLoaded', (event) => {
    mountedApp.cargaPrincipal();
    mountedApp.cargaUsuario();
});
