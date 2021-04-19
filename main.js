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
                urlmenulateral: "",
                ccaa: "datoccaa",
                lang: "datolang",
                rol: "datorol",
                recursostitulo: [],
                interactivas: [],
                slider: [],
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
                    en: "ºelcome",
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
                            ccaa: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"], //Cataluña no tiene este inglés
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
                            ccaa: ["9"], //Cataluña tiene este inglés
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
                            ccaa: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13", "14", "15", "17", "18", "19"], //Cataluña y Euskadi no tienen este castellano
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
                            color: "rgb(202,185,103)",
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
            if (this.datosusuario.tipoactivo && this.datosusuario.lang) {
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
                for (i = 0; i < temp1.length; i++) {
                    temp2 = this.datos[this.datosusuario.tipoactivo].hijos[temp1[i]];
                    temp3 = { customkey: temp1[i], nombre: temp2.nom, color: temp2.color, ccaa: temp2.ccaa };
                    temp0.push(temp3);
                }
                return temp0;
            }
        },
        subtipoactivotitulo() {
            if (this.datosusuario.tipoactivo && this.datosusuario.subtipoactivo && this.datosusuario.lang && this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo]) {
                return this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo].subtitulo[this.datosusuario.lang]
            } else {
                return null
            }
        },
        subtipoactivocolor() {
            if (this.datosusuario.tipoactivo && this.datosusuario.subtipoactivo && this.datosusuario.lang && this.datos[this.datosusuario.tipoactivo].hijos[this.datosusuario.subtipoactivo]) {
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
                    for (i = 0; i < temp2.length; i++) {
                        temp3 = temp2[i];
                        temp4 = { texto: temp3.texto, url: temp3.url };
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
                    for (i = 0; i < temp2.length; i++) {
                        temp3 = temp2[i];
                        temp4 = { texto: temp3.texto, url: temp3.url };
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

            // Obtenemos el dato de CCAA. Ojo, esta llamada no es relativa, sino absoluta;
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
                    if (roles.indexOf("siteadmin") == -1 && roles.indexOf("student") > -1 && roles.indexOf("editingteacher") == -1 && roles.indexOf("teacher") == -1) {
                        mountedApp.datosusuario.rol = "student";
                    }
                    if (roles.indexOf("siteadmin") == -1 && roles.indexOf("editingteacher") == -1 && roles.indexOf("teacher") > -1) {
                        mountedApp.datosusuario.rol = "teacher";
                    }
                    if (roles.indexOf("siteadmin") > -1 || roles.indexOf("editingteacher") > -1) {
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
            if (estaeditando > 0) {
                this.datosusuario.estado = 1;
                document.querySelector("#blockslider").style.display = "block"; // mostramos el div de bloques para tener a mano la bolsa de recursos
            } else {
                document.querySelector("#section-0").style.borderBottom = "none"; // Ocultamos el borde inferior de la sección 0
            }

            // sacamos la url inicial
            var urlinic = window.location.href
            if (urlinic.includes("course/view.php")) {
                while (urlinic.includes("&")) {
                    urlinic = urlinic.substr(0, urlinic.lastIndexOf("&"));
                }
            }

            // barremos el curso para sacar las secciones
            culo = document.querySelectorAll('.course-content .topics li.section');

            // barremos el curso sin sección para sacar el número de elementos y generar el menu;
            for (i = 1; i < culo.length; i++) {

                if (culo[i].querySelector('.sectionname a')) {
                    // sacamos el titulo, la descripción y la url del elemento;
                    temp1 = culo[i].querySelector('.sectionname a').href;
                    temp2 = culo[i].querySelector('.sectionname a').innerText;
                    // sacamos los elementos titulo y subtitulo si existen
                    if (temp2.split("-")[0] && temp2.split("-")[1]) {
                        temp3 = temp2.split("-")[0].toLowerCase();
                        temp4 = temp2.split("-")[1].toLowerCase();
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
                            temp6.unidades.push({ texto: temp2, url: temp1 });
                        }
                    }
                    // comparamos los datos con la estructura de datos y rellenamos sus elementos recurso
                    if (temp3.includes("rec")) {
                        $.get(temp1, function(dataInt) {
                            dtInt = dataInt;
                            eInt.id = "fooInt";
                            eInt.innerHTML = dtInt;
                            culoInt = eInt.querySelectorAll(".single-section .activity");
                            // barremos las actividades de la seccion de recursos
                            for (j = 0; j < culoInt.length; j++) {
                                if (culoInt[j].querySelector("a") && culoInt[j].querySelector("a .instancename") && culoInt[j].querySelector('.contentafterlink')) {
                                    temp1Int = culoInt[j].querySelector('a').href;
                                    temp2Int = culoInt[j].querySelector('a .instancename').innerText;
                                    if (culoInt[j].querySelector('.contentafterlink')) {
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
                                                for (k = 0; temp7Int.length > k; k++) {
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
        cargaseccion(urldestino) {
            $.get(urldestino, function(dataInt) {
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
                        tit1 = e.querySelector(".single-section ul.topics .content .summary div:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "");
                    } else {
                        tit1 = "";
                    }
                } else {
                    tit1 = "";
                }
                console.log("el nombre de la sección es ");
                console.log(tit1);
                // obtenemos el nombre de la sección
                if (e.querySelector(".single-section ul.topics h3.sectionname a:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "")) {
                    tit2 = e.querySelector(".single-section ul.topics h3.sectionname a:first-child").innerText.replace(/(\r\n|\n|\r)/gm, "");
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
                for (j = 0; j < elems.length; j++) {
                    temp1 = elems[j];
                    // sacamos los datos relevantes ´solo si cumple todas las condiciones necesarias para que funcione bien la extraccion
                    if (temp1.querySelector("a") && temp1.querySelector("a .instancename")) {
                        temp2 = temp1.querySelector('a').href;
                        temp3 = temp1.querySelector('a .instancename').innerText;
                        if (temp1.querySelector('.contentafterlink')) {
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
                                    listarec.push({ texto: temp4, url: temp2, indice: temp7, titulo: temp3 });
                                }
                                if (temp6 == "INTE") {
                                    listaint.push({ texto: temp4, url: temp2, indice: temp7, titulo: temp3 });
                                }
                                if (temp6 == "SLDR") {
                                    sldr.push({ texto: temp4, url: temp2, indice: temp7, titulo: temp3 });
                                }
                                if (temp6 == "ICON") {
                                    icn = { texto: temp4, url: temp2, indice: temp7, titulo: temp3 };
                                }
                            }
                        }
                    }
                }
                mountedApp.datosusuario.estado = 1;
                mountedApp.datosusuario.recursostitulo = listarec;
                mountedApp.datosusuario.interactivas = listaint;
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
        logotipo: {
            type: String,
            required: true,
            default: 'def',
        },
        logourl: {
            type: String,
            required: true,
            default: document.querySelector("#app").dataset.url,
        },
    },
    template:
    /*html*/
        `<div v-if="logourl" id="nca13_mnu_logo" class="row">
        <div style="width: 100%;" class="col">
          <img v-bind:src="logourl + logotipofiltrado + '.png'">
        </div>
      </div>`,
    computed: {
        logotipofiltrado() {
            if (this.logotipo == '' || !this.logotipo) {
                return 'def';
            } else {
                return this.logotipo;
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
            return this.botonessubtipos.filter(elem => (!elem.ccaa || this.botonesccaa == null || elem.ccaa.indexOf(this.botonesccaa) > -1));
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
                  <span v-bind:style="listastyleuni">{{ listaunidad.texto }}</span>
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
            return 'color: white';
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
function insertalo(val) {
    if (val) {
        console.log(val);
        // definimos las variables necesarias
        var fueralibro = document.createElement("div");
        var dt;
        var e = document.createElement("div");
        var culo;
        // accedemos al vínculo del slider / imagenalumno y extraemos su contenido
        $.get(val, function(data) {
            dt = data;
            e.id = "foo";
            e.innerHTML = dt;
            culo = e.querySelector('#region-main .box').innerHTML;
            document.querySelector('#nca13-mnu-ctrl-slider').innerHTML = culo;
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
    },
    data() {
        return {
            centralrecursosactivo: false
        }
    },
    template:
    /*html*/
        `<div id="nca13_mnu_intro" class="container" v-if="centralusuario.estado == 0">     
            <div class="centrador">
                <div class="parte1">
                    <div class="itemGroup itemGroup">
                        <div class="item">
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-1.png'" width="100" height="100" /></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-1.png'" width="100" height="100" /></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="itemGroup itemGroup">
                        <div class="item">
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-2.png'" width="100" height="100" /></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-2.png'" width="100" height="100" /></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="itemGroup itemGroup">
                        <div class="item">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-3.png'" width="100" height="100" /></p>
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-3.png'" width="100" height="100" /></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="itemGroup itemGroup">
                        <div class="item">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-4.png'" width="100" height="100" /></p>
                            <p></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-4.png'" width="100" height="100" /></p>
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
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-5.png'" width="100" height="100" /></p>
                            <p><img v-bind:src="centralusuario.urlmenulateral + 'Loader-5.png'" width="100" height="100" /></p>
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
            <img id="nca13-mnu-imagen" v-bind:src="centralurllogo" style="width:100%">
          </div>
        </div>

        <div id="nca13-mnu-ctrl-recursos" class="row justify-content-start" v-if="centralrecursosactivo">
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
            return "background-color:" + this.centralusuario.color + "; background-image:url('" + this.centralusuario.urlmenulateral + this.centralusuario.tipoactivo.toUpperCase() + ".png')";
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
                $.get(this.centralusuario.urliconoinsertado, function(data) {
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
                    return this.centralusuario.urlmenulateral + 'NCA.png';
                }
            }
        },
        centralrecursostitulofiltrado() {
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
                    for (i = 0; i < array.length; i++) {
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
            var langtrad = { es: "CAS", en: "ENG", eu: "EUS", ca: "CAT", ca_valencia: "VAL", gl: "GAL" };
            var langactivo = langtrad[this.centralusuario.lang];
            if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
                function apaño(elem, index, array) {
                    temp1 = true;
                    for (i = 0; i < array.length; i++) {
                        if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
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
        centralinteractivasfiltrado() {
            var temp0 = this.centralusuario.interactivas;
            console.log('interactivas inicial es: ');
            console.log(temp0);
            // Filtro por calificación. Si la interactiva es evaluable añade paréntesis al texto indice para resaltarla
            temp0.forEach(function(part, index) {
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
                    for (i = 0; i < array.length; i++) {
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
            var langtrad = { es: "CAS", en: "ENG", eu: "EUS", ca: "CAT", ca_valencia: "VAL", gl: "GAL" };
            var langactivo = langtrad[this.centralusuario.lang];
            if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
                function apaño(elem, index, array) {
                    temp1 = true;
                    for (i = 0; i < array.length; i++) {
                        if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
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
        centralsliderfiltrado() {
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
                    for (i = 0; i < array.length; i++) {
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
            var langtrad = { es: "CAS", en: "ENG", eu: "EUS", ca: "CAT", ca_valencia: "VAL", gl: "GAL" };
            var langactivo = langtrad[this.centralusuario.lang];
            if (this.centralusuario.lang && this.centralusuario.lang !== "" && langtrad[this.centralusuario.lang]) {
                function apaño(elem, index, array) {
                    temp1 = true;
                    for (i = 0; i < array.length; i++) {
                        if (elem.titulo.split("-")[4] == array[i].titulo.split("-")[4] &&
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
            // Fin de filtros.
            // Insertamos elementos del slider; Si no hay elemento SLDR, borramos el existente
            if (temp0[0]) {
                mountedApp.datosusuario.urlsliderfiltrado = temp0[0];
                if (temp0[0].url) {
                    insertalo(mountedApp.datosusuario.urlsliderfiltrado.url);
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
        }
    },
})

//<!-- Mount App -->

const mountedApp = app.mount('#app');
window.addEventListener('DOMContentLoaded', (event) => {
    mountedApp.cargaPrincipal();
    mountedApp.cargaUsuario();
});