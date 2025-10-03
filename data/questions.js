const questions = 
[
    {
        "question": "Qué identifica una dirección de Dominio?",
        "options": [
            "Identifica una dirección IP",
            "Identifica una dirección MAC",
            "Identifica un país",
            "DNS Raíz"
        ],
        "answer": "Identifica una dirección IP"
    },
    {
        "question": "Cuales son los pasos para contratar un Dominio?",
        "options": [
            "Elegir los nombres de dominio según los caracteres permitidos",
            "Registración DNS",
            "Elegir Dominio- Configurar- Delegar- Renovar",
            "Delegación de Dominio"
        ],
        "answer": "Elegir Dominio- Configurar- Delegar- Renovar"
    },
    {
        "question": "Quien es el máximo responsable en autorizar un dominio .com.ar en nuestro país?",
        "options": [
            "Ministerio de relaciones Exteriores y Culto",
            "LACNIC",
            "NIC AR",
            "La secretaria Legal y Técnica de la Nación"
        ],
        "answer": "La secretaria Legal y Técnica de la Nación"
    },
    {
        "question": "Qué tipo de Dominios existen?",
        "options": [
            "Dominios Personales",
            "Dominios Genéricos / Territoriales",
            "Root Servers",
            "DNS",
            "Ninguna de as anteriores es verdadera"
        ],
        "answer": "Dominios Genéricos / Territoriales"
    },
    {
        "question": "Quién gestiona los DNS a nivel Internacional?",
        "options": [
            "APNIC",
            "El responsable es el ICANN",
            "AFRINIC",
            "ARIN"
        ],
        "answer": "El responsable es el ICANN"
    },
    {
        "question": "De quien autorizar un dominio .com.ar en Argentina?",
        "options": [
            "IANNA",
            "ICAN",
            "LACNIC",
            "IEEE",
            "IRAM",
            "Ninguna de las anteriores es correcta"
        ],
        "answer": "Ninguna de las anteriores es correcta"
    },
    {
        "question": "Cuales de las siguientes son Tipos de Nube?",
        "options": [
            "Nube propia",
            "Nube Popular - Nube Híbrida - Nube Pública - Nube Privada",
            "Nube Híbrida - Nube Pública - Nube Privada",
            "Nube IaaS, PaaS, SaaS",
            "Multicloud"
        ],
        "answer": "Nube Híbrida - Nube Pública - Nube Privada"
    },
    {
        "question": "Cuales son Modelos de Cloud Computing?",
        "options": [
            "IaaSS",
            "Infraestructura como Servicio",
            "PaaP",
            "ChaaP",
            "SasZ",
            "Mead"
        ],
        "answer": "Infraestructura como Servicio"
    },
    {
        "question": "La virtualización permite que múltiples instancias de los recursos de la infraestructura se ejecuten en el mismo hardware, Cuál de las siguientes opciones es correcta?",
        "options": [
            "La virtualización permite que múltiples instancias, con el uso de OS Hipervisor",
            "La virtualización permite que múltiples instancias, con el uso de un Hipervisor",
            "Plataforma propia de Sistema Operativo",
            "Todas las anteriores son falsas"
        ],
        "answer": "La virtualización permite que múltiples instancias, con el uso de un Hipervisor"
    },
    {
        "question": "Qué es la computación en la Nube?",
        "options": [
            "Es un conjunto de nodos activos",
            "Es un modelo para habilitar un conjunto de recursos computacionales ( redes, servidores, almacenamiento, aplicaciones, servicios)",
            "Es un modelo de Capas",
            "Todas las anteriores son verdaderas",
            "Ninguna de las anteriores es verdadera"
        ],
        "answer": "Es un modelo para habilitar un conjunto de recursos computacionales ( redes, servidores, almacenamiento, aplicaciones, servicios)"
    },
    {
        "question": "Cuáles son las diferencias entre el Modelo tradicional y el Modelo de Computación en la Nube?",
        "options": [
            "Compra de activos propios versus Compra de Servicios.",
            "Modelo Inflexible - Modelo Empresarial",
            "Recursos lógicos propios - Datos Almacenados",
            "Modelo escalable",
            "Arquitectura Multicloud"
        ],
        "answer": "Compra de activos propios versus Compra de Servicios."
    },
    {
        "question": "Modelo de Referencia del NIST",
        "options": [
            "El modelo conceptual muestra una arquitectura PUBLICA-HIBRIDA de alto nivel con la intención de facilitar la comprensión de los requerimientos, usos, características y estándares de la computación en nube",
            "El modelo OBLIGATORIO impuesto, muestra una arquitectura de alto nivel de la nube PRIVADA.",
            "El modelo conceptual muestra una arquitectura de alto nivel con la intención de facilitar la comprensión de los requerimientos, usos, características y estándares de la computación en nube.",
            "Todas las Anteriores son verdaderas",
            "Ninguna de las Anteriores es verdadera."
        ],
        "answer": "El modelo conceptual muestra una arquitectura de alto nivel con la intención de facilitar la comprensión de los requerimientos, usos, características y estándares de la computación en nube."
    },
    {
        "question": "Cómo puede ser el Alojamiento WEB? Indicar cuál de las siguientes opciones es correcta.",
        "options": [
            "Administrado - No Administrado HOST",
            "Correcto y Compatible",
            "Administrado según el Modelo OSI/NIST",
            "Administrado - No Administrado / Pago - Gratuito",
            "Todas las anteriores son correctas"
        ],
        "answer": "Administrado - No Administrado / Pago - Gratuito"
    },
    {
        "question": "En referencia a los Servidores de Alojamiento en la Nube, cuál de las siguientes opciones es verdadera?",
        "options": [
            "Servidores de Alojamiento en la Nube, para el almacenamiento de clientes",
            "Se puede definir como un lugar para el alojamiento de una página Web (hosting), o un espacio en internet para el almacenamiento de cualquier tipo de información sea archivos, correos, videos, etc..",
            "Se puede definir como un lugar para el alojamiento FTP/TELNET, o un espacio en internet para el almacenamiento de cualquier tipo de información sea archivos, correos, videos, etc..",
            "Servidores de Alojamiento PROXI/FIREWAL, para el almacenamiento de clientes"
        ],
        "answer": "Se puede definir como un lugar para el alojamiento de una página Web (hosting), o un espacio en internet para el almacenamiento de cualquier tipo de información sea archivos, correos, videos, etc.."
    },
    {
        "question": "En referencia a la calidad y disponibilidad de un servicio de alojamiento web. Cuál de las siguientes opciones es correcta?",
        "options": [
            "El servicio de web hosting GARANTIZA el 100% de la disponibilidad del tiempo",
            "El servicio de web hosting es prácticamente imposible garantizar el 100% de la disponibilidad del tiempo.",
            "La cantidad de tiempo de caída del sistema por mes, semana, día, hora es de un máximo del 85%",
            "Ninguna de las anteriores es verdadera."
        ],
        "answer": "El servicio de web hosting es prácticamente imposible garantizar el 100% de la disponibilidad del tiempo."
    },
    {
        "question": "En referencia a los tipos de alojamiento. Cuál de las siguientes opciones es correcta?",
        "options": [
            "Alojamiento gratuito, alojamiento compartido, alojamiento revendedor, alojamientos virtuales, alojamientos de imágenes",
            "Alojamiento pago - impago",
            "Alojamiento de hosting para revendedores no pago",
            "Todas las anteriores son falsas"
        ],
        "answer": "Alojamiento gratuito, alojamiento compartido, alojamiento revendedor, alojamientos virtuales, alojamientos de imágenes"
    },
    {
        "question": "Tipos de Servidores, identificar cuál de las siguientes opciones son correctas?",
        "options": [
            "Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - Proxy Servers",
            "Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - HOST",
            "Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - INTERFACE Servers",
            "Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - ROUTER"
        ],
        "answer": "Chat Servers- Application Servers- FTP Servers - IRC Servers - Web Servers - Proxy Servers"
    },
    {
        "question": "Cuál de los siguientes servicios es más ventajoso para un uso profesional",
        "options": [
            "Servicios de hosting Pago",
            "Servicios de hosting no pago",
            "Servicios de hosting compartido",
            "Servicio de hosting híbrido"
        ],
        "answer": "Servicios de hosting Pago"
    },
    {
        "question": "Indicar cual de las siguientes definiciones es correcta?",
        "options": [
            "Servidor no dedicado: dedican toda su potencia a los clientes y usuarios locales",
            "Servidor no dedicado: dedican toda su potencia a los clientes.",
            "Servidor Dedicado: dedica toda su potencia a administrar los recursos de la red, atender solicitudes de procesamiento de los clientes.",
            "Servidor Dedicado: dedica toda su potencia a los clientes y a usuarios locales"
        ],
        "answer": "Servidor Dedicado: dedica toda su potencia a administrar los recursos de la red, atender solicitudes de procesamiento de los clientes."
    },
    {
        "question": "En referencia a los tipos de alojamiento: El alojamiento compartido es menos costoso que un servidor dedicado?",
        "options": [
            "Falso",
            "Verdadero"
        ],
        "answer": "Verdadero"
    },
    {
        "question": "Concepto de Servidor, indicar la respuesta correcta",
        "options": [
            "Un servidor es una computadora que forma parte de una red y provee servicios a centrales telefónicas PABX de clientes",
            "Un servidor es una computadora que forma parte de una NUBE PUBLICA.",
            "Un servidor es una computadora que forma parte de una red y provee servicios a otras computadoras denominadas clientes",
            "todas las anteriores son verdaderas"
        ],
        "answer": "Un servidor es una computadora que forma parte de una red y provee servicios a otras computadoras denominadas clientes"
    },
    {
        "question": "Cuál de las opciones indicadas corresponde a Sistemas Operativos en la Nube?",
        "options": [
            "AWS-UNIX",
            "OpenStack",
            "DDOS",
            "IOS - Androide",
            "Windows - IOS"
        ],
        "answer": "OpenStack"
    },
    {
        "question": "Indicar Cual de las siguientes opciones es verdadera en referencia a los Modelos de Servicio y Referencia?",
        "options": [
            "Software de Servidor",
            "IAAS, PAAS, SAAS",
            "IAAS, Soporte como Servicio",
            "Plataforma como servicio, Infraestructura de RED",
            "PIN",
            "Ipconfig /all"
        ],
        "answer": "IAAS, PAAS, SAAS"
    },
    {
        "question": "AWS (AMAZON WEB SEVICES): Cuál de las siguientes opciones es verdadera respecto del servicio de éste proveedor de Cloud?",
        "options": [
            "Invertir en Gastos de infraestructura como cliente",
            "Reemplazar Gastos de Capital por Gastos Variables (solo lo que se conmsume)",
            "Servicios Inelásticos",
            "No puede absorber la demanda en los picos, es irrelevante."
        ],
        "answer": "Reemplazar Gastos de Capital por Gastos Variables (solo lo que se conmsume)"
    },
    {
        "question": "Indicar las formas de interactuar con AWS (proveedor de Cloud)",
        "options": [
            "Consola de Administración AWS - Interfaz línea de Comandos (AWS CLI) -Kits de Desarrollo de Software SDK",
            "Consola de Administración de comandos por Telnet",
            "Interfaz gráfica por línea de comandos",
            "Kids de Desarrollo de Juegos en línea"
        ],
        "answer": "Consola de Administración AWS - Interfaz línea de Comandos (AWS CLI) -Kits de Desarrollo de Software SDK"
    },
    {
        "question": "A qué ámbito apunta el modelo PAAS?",
        "options": [
            "Desarrollos, Pruebas, Implementaciones de configuraciones de RED",
            "Uso y configuración de un CLOUD",
            "Desarrollos, Pruebas, Implementaciones, administración de servicios y soluciones basadas en la nube.",
            "Configuración y administración de Infraestructura",
            "Privado"
        ],
        "answer": "Desarrollos, Pruebas, Implementaciones, administración de servicios y soluciones basadas en la nube."
    },
    {
        "question": "Respecto de los Riesgos y Amenazas en el Cloud Computing, Indicar cuál de las siguientes opciones es correcta?",
        "options": [
            "Riesgos en el Multicloud",
            "Riesgos Organizativos □Riesgos Técnicos □Riesgos Legales □Riesgos No específicos",
            "Riesgos en Cloud Público",
            "Riesgos en el Cloud Híbrido"
        ],
        "answer": "Riesgos Organizativos □Riesgos Técnicos □Riesgos Legales □Riesgos No específicos"
    },
    {
        "question": "Cuál es la Diferencia entre el entorno multicloud y la nube híbrida?",
        "options": [
            "El término nube híbrida se refiere a la presencia de varios tipos de implementaciones (pública o privada) con cierta integración u organización entre ellas.",
            "El término multicloud se refiere a la presencia de al menos dos implementaciones de nube del mismo tipo (pública o privada), que provienen de distintos proveedores. Por otro lado, el término nube híbrida se refiere a la presencia de varios tipos de implementaciones (pública o privada) con cierta integración u organización entre ellas.",
            "Todas las anteriores son FALSAS"
        ],
        "answer": "El término multicloud se refiere a la presencia de al menos dos implementaciones de nube del mismo tipo (pública o privada), que provienen de distintos proveedores. Por otro lado, el término nube híbrida se refiere a la presencia de varios tipos de implementaciones (pública o privada) con cierta integración u organización entre ellas."
    },
    {
        "question": "Concepto de arquitectura - Infraestructura. Indicar cual es mas opción mas correcta",
        "options": [
            "La arquitectura de nube es el plano",
            "La infraestructura de nube incorpora todos los materiales, y la arquitectura de nube es el plano técnico.",
            "Los materiales, y la arquitectura de nube es el plano técnico.",
            "La infraestructura de nube incorpora los materiales"
        ],
        "answer": "La infraestructura de nube incorpora todos los materiales, y la arquitectura de nube es el plano técnico."
    },
    {
        "question": "Dadas las siguientes opciones indicar cuál es correcta ?",
        "options": [
            "Los registros de log y la gestión de incidentes no deben ser centralizados.",
            "Ataques de ingeniería social Es el arte de engañar a las personas para que revele información sensible. ☐Robo de credenciales ☐Robo de información sensible ☐Malware",
            "Los Ataques de ingeniería social son el arte de engañar la Infraestructura."
        ],
        "answer": "Ataques de ingeniería social Es el arte de engañar a las personas para que revele información sensible. ☐Robo de credenciales ☐Robo de información sensible ☐Malware"
    },
    {
        "question": "Cuál de las siguientes opciones es correcta?",
        "options": [
            "Arquitectura de nube pública: entorno de nube creado a partir de recursos ajenos al usuario final que pueden redistribuirse a otros inquilinos.",
            "Arquitectura de nube privada: en líneas generales, se trata de un entorno de nube diseñado solo para el usuario final, generalmente dentro del firewall del usuario .",
            "Arquitectura de nube híbrida: varios entornos de nube con cierto nivel de portabilidad, coordinación y gestión de las cargas de trabajo entre ellos",
            "Arquitectura multicloud: sistemas de TI que incluyen más de una nube, pública o privada, y que pueden conectarse en red (o no).",
            "Todas las anteriores son verdaderas"
        ],
        "answer": "Todas las anteriores son verdaderas"
    },
    {
        "question": "Dada la siguiente condición, RESPONDER: VERDADERO o FALSO Pérdida de Gobernanza El cliente necesariamente cede al proveedor el control de una serie de cuestiones que pueden influir en la seguridad de sus datos e infraestructura. Al mismo tiempo pueden existir deficiencias en los acuerdos de nivel de servicio (SLA).",
        "options": [
            "FALSO",
            "VERDADERO"
        ],
        "answer": "VERDADERO"
    },
    {
        "question": "Responder VERDADERO o FALSO Agotamiento de recursos es un factor mas entre Los Riesgos y amenazas en el Cloud",
        "options": [
            "VERDADERO",
            "FALSO"
        ],
        "answer": "VERDADERO"
    },
    {
        "question": "INDICAR 'respecto de las amenazas de Seguridad' cuál de las opciones es correcta?",
        "options": [
            "Violación de datos privados 2. Pérdida de datos. 3. Secuestro de cuentas o servicios (hijacking). 4. Interfaces y APIs inseguras. 5. Negación de servicio. 6. Persona interna mal intencionada (insider). 7. Abuso de servicios en la nube. El uso de recursos 8. Due diligence insuficiente (diligencia debida insuficiente). 9. Vulnerabilidades en tecnologías compartidas",
            "El Ciclo de vida de los datos, lo cual es necesario gestionar la información de manera adecuada, a través de principios que permitan mejorar el uso eficiente",
            "Riesgos Legales"
        ],
        "answer": "Violación de datos privados 2. Pérdida de datos. 3. Secuestro de cuentas o servicios (hijacking). 4. Interfaces y APIs inseguras. 5. Negación de servicio. 6. Persona interna mal intencionada (insider). 7. Abuso de servicios en la nube. El uso de recursos 8. Due diligence insuficiente (diligencia debida insuficiente). 9. Vulnerabilidades en tecnologías compartidas"
    },
    {
        "question": "Qué tipo de arquitecturas pueden hallarse en el cloud?",
        "options": [
            "Arquitectura Simple",
            "Arquitectura de Nube",
            "Arquitectura de nube Pública, nube Privada, nube Híbrida, Multicloud",
            "Arquitectura de nube Pública, nube Privada, nube Híbrida, Multitarea"
        ],
        "answer": "Arquitectura de nube Pública, nube Privada, nube Híbrida, Multicloud"
    }
]
