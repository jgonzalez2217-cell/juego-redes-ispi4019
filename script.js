// ============================================
// DATOS DEL USUARIO
// ============================================
let usuario = { nombre: '', legajo: '' };

// ============================================
// DISPOSITIVOS (SVGs)
// ============================================
const dispositivos = {
    router: {
        nombre: "Router",
        descripcion: "Capa 3 · Enrutamiento IP",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="30" width="80" height="40" rx="6" fill="#1e40af" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="25" cy="50" r="3" fill="#10b981"/>
            <circle cx="35" cy="50" r="3" fill="#10b981"/>
            <circle cx="45" cy="50" r="3" fill="#f59e0b"/>
            <rect x="55" y="45" width="30" height="10" rx="2" fill="#0f172a"/>
            <line x1="50" y1="30" x2="50" y2="15" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="50" cy="12" r="4" fill="#3b82f6"/>
            <line x1="50" y1="70" x2="50" y2="85" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="50" cy="88" r="4" fill="#3b82f6"/>
        </svg>`
    },
    switch: {
        nombre: "Switch",
        descripcion: "Capa 2 · Conmutación MAC",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="35" width="90" height="30" rx="4" fill="#065f46" stroke="#10b981" stroke-width="2"/>
            <rect x="12" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="22" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="32" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="42" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="52" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="62" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="72" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <rect x="82" y="45" width="8" height="10" rx="1" fill="#0f172a"/>
            <circle cx="16" cy="40" r="1.5" fill="#10b981"/>
            <circle cx="26" cy="40" r="1.5" fill="#10b981"/>
            <circle cx="36" cy="40" r="1.5" fill="#10b981"/>
            <circle cx="46" cy="40" r="1.5" fill="#f59e0b"/>
        </svg>`
    },
    nic: {
        nombre: "NIC / Placa de Red",
        descripcion: "Capa 1-2 · Interfaz física",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="25" width="70" height="50" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <rect x="20" y="30" width="60" height="35" fill="#0f172a"/>
            <rect x="25" y="35" width="15" height="8" fill="#1e40af"/>
            <rect x="45" y="35" width="15" height="8" fill="#1e40af"/>
            <rect x="25" y="48" width="35" height="12" rx="2" fill="#374151"/>
            <circle cx="32" cy="54" r="2" fill="#10b981"/>
            <circle cx="42" cy="54" r="2" fill="#f59e0b"/>
            <line x1="50" y1="75" x2="50" y2="90" stroke="#10b981" stroke-width="2"/>
            <rect x="40" y="88" width="20" height="6" fill="#10b981"/>
        </svg>`
    },
    repetidor: {
        nombre: "Repetidor",
        descripcion: "Capa 1 · Regenera señal",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="40" height="40" rx="8" fill="#7c2d12" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="50" cy="50" r="10" fill="#0f172a"/>
            <circle cx="50" cy="50" r="5" fill="#f59e0b"/>
            <path d="M 20 50 Q 10 50 10 40" stroke="#f59e0b" stroke-width="2" fill="none"/>
            <path d="M 80 50 Q 90 50 90 40" stroke="#f59e0b" stroke-width="2" fill="none"/>
            <path d="M 15 50 Q 5 50 5 35" stroke="#f59e0b" stroke-width="2" fill="none" opacity="0.5"/>
            <path d="M 85 50 Q 95 50 95 35" stroke="#f59e0b" stroke-width="2" fill="none" opacity="0.5"/>
            <line x1="50" y1="70" x2="50" y2="85" stroke="#f59e0b" stroke-width="2"/>
        </svg>`
    },
    firewall: {
        nombre: "Firewall",
        descripcion: "Capa 3-7 · Seguridad",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="25" width="70" height="50" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
            <path d="M 30 35 L 50 25 L 70 35 L 70 55 L 50 65 L 30 55 Z" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
            <circle cx="50" cy="45" r="6" fill="#ef4444"/>
            <line x1="50" y1="42" x2="50" y2="48" stroke="#0f172a" stroke-width="2"/>
            <circle cx="50" cy="52" r="1.5" fill="#0f172a"/>
            <rect x="20" y="65" width="10" height="6" rx="1" fill="#ef4444"/>
            <rect x="35" y="65" width="10" height="6" rx="1" fill="#ef4444"/>
            <rect x="55" y="65" width="10" height="6" rx="1" fill="#ef4444"/>
            <rect x="70" y="65" width="10" height="6" rx="1" fill="#ef4444"/>
        </svg>`
    }
};

// ============================================
// MISIONES (OPCIONES REESCRITAS SIN PISTAS OBVIAS)
// ============================================
const misiones = {
    vpn: {
        tag: "MISIÓN 01",
        titulo: "Configurar VPN Corporativa",
        escenario: "La empresa necesita conectar de forma segura la sucursal de Buenos Aires con la de Córdoba a través de Internet. Los datos confidenciales deben viajar cifrados para evitar interceptaciones.",
        tecnico: "Una VPN (Virtual Private Network) crea un túnel cifrado sobre una red pública. Utiliza protocolos como IPsec u OpenVPN para encapsular y cifrar el tráfico, garantizando confidencialidad, integridad y autenticación. El router de cada sede actúa como gateway VPN.",
        pasos: [
            {
                consigna: "¿Qué dispositivo debe instalar en cada sede para establecer el túnel VPN?",
                tipo: "dispositivo",
                opciones: null,
                correcta: "router",
                explicacion: "El Router es el dispositivo de Capa 3 que actúa como gateway entre redes. Soporta protocolos VPN como IPsec y puede cifrar el tráfico entre sedes remotas."
            },
            {
                consigna: "¿Qué protocolo y puerto se recomienda comúnmente para una VPN moderna que deba atravesar firewalls restrictivos manteniendo buen rendimiento?",
                tipo: "opcion",
                opciones: [
                    "TCP puerto 80 (HTTP)",
                    "UDP puerto 1194 (OpenVPN)",
                    "ICMP (Echo Request)",
                    "FTP puerto 21"
                ],
                correcta: 1,
                explicacion: "OpenVPN sobre UDP puerto 1194 es el estándar moderno. UDP tiene menos sobrecarga que TCP para tráfico cifrado, y el puerto 1194 suele estar permitido en firewalls corporativos."
            },
            {
                consigna: "Para autenticar los extremos del túnel VPN de forma segura, ¿qué método se debe implementar?",
                tipo: "opcion",
                opciones: [
                    "Pre-shared key (PSK) estática compartida por correo electrónico",
                    "Certificados digitales X.509 con infraestructura de clave pública (PKI)",
                    "Autenticación basada únicamente en la dirección MAC del dispositivo",
                    "Sin autenticación, confiando solo en el cifrado del túnel"
                ],
                correcta: 1,
                explicacion: "Los certificados X.509 usan criptografía asimétrica. Son el método más seguro para autenticar ambos extremos del túnel VPN y prevenir ataques Man-in-the-Middle, a diferencia de una PSK compartida."
            },
            {
                consigna: "Una vez establecido el túnel, ¿qué tipo de direcciones IP deben usar las sedes para comunicarse internamente?",
                tipo: "opcion",
                opciones: [
                    "Direcciones IP públicas enrutables de Internet",
                    "Direcciones IP privadas (RFC 1918) como 10.x.x.x o 192.168.x.x",
                    "Direcciones MAC de las interfaces de red",
                    "Direcciones IPv6 de enlace local (fe80::/10)"
                ],
                correcta: 1,
                explicacion: "Las VPN site-to-site usan rangos IP privados (RFC 1918) para las redes internas. El túnel VPN enruta estos paquetes privados sobre Internet de forma cifrada sin exponerlos."
            }
        ]
    },
    remoto: {
        tag: "MISIÓN 02",
        titulo: "Escritorio Remoto",
        escenario: "Un empleado necesita acceder a su PC de la oficina desde su casa para trabajar. La PC está detrás de un router con NAT y tiene una IP privada. Hay que habilitar el acceso de forma segura.",
        tecnico: "El Escritorio Remoto (RDP en Windows, SSH en Linux) permite controlar una PC a distancia. Funciona capturando la pantalla del equipo remoto, comprimiéndola y enviándola por red. Requiere autenticación fuerte y, si hay NAT, configuración de port forwarding o uso de VPN.",
        pasos: [
            {
                consigna: "¿Qué componente físico debe tener la PC de la oficina para poder conectarse a la red y recibir conexiones remotas?",
                tipo: "dispositivo",
                opciones: null,
                correcta: "nic",
                explicacion: "La NIC (Network Interface Card) o placa de red es la interfaz física que conecta la PC a la red. Sin ella, la PC no puede comunicarse por red."
            },
            {
                consigna: "La PC tiene IP privada 192.168.1.50 y está detrás de un router con NAT. ¿Qué configuración hay que hacer en el router para que sea accesible desde Internet?",
                tipo: "opcion",
                opciones: [
                    "Asignar una dirección IP pública estática directamente a la PC",
                    "Configurar Port Forwarding (NAT) del puerto 3389 hacia la IP privada de la PC",
                    "Desactivar el firewall de Windows para permitir la conexión entrante",
                    "Conectar la PC mediante un cable crossover directamente al router"
                ],
                correcta: 1,
                explicacion: "Port Forwarding (redirección de puertos) mapea un puerto público del router (ej: 3389) a la IP privada de la PC. Así, las conexiones entrantes al router en ese puerto se redirigen a la PC interna."
            },
            {
                consigna: "¿Qué protocolo de Escritorio Remoto usa Microsoft Windows por defecto?",
                tipo: "opcion",
                opciones: [
                    "SSH (Secure Shell) puerto 22",
                    "RDP (Remote Desktop Protocol) puerto 3389",
                    "VNC (Virtual Network Computing) puerto 5900",
                    "Telnet puerto 23"
                ],
                correcta: 1,
                explicacion: "RDP es el protocolo propietario de Microsoft para escritorio remoto. Usa el puerto TCP 3389 por defecto y ofrece cifrado TLS, redirección de periféricos y sesiones multiusuario."
            },
            {
                consigna: "Para mejorar la seguridad del acceso remoto, ¿qué medida adicional es RECOMENDABLE implementar?",
                tipo: "opcion",
                opciones: [
                    "Utilizar la misma contraseña del usuario local de Windows",
                    "Implementar Autenticación de Dos Factores (2FA) junto con NLA",
                    "Exponer el puerto 3389 directamente a Internet sin reglas de firewall",
                    "Deshabilitar el cifrado de la sesión RDP para mejorar la velocidad"
                ],
                correcta: 1,
                explicacion: "2FA (Two-Factor Authentication) agrega una segunda capa de seguridad más allá de la contraseña. Combinado con NLA (Network Level Authentication), es la práctica recomendada para acceso remoto corporativo."
            }
        ]
    },
    switch: {
        tag: "MISIÓN 03",
        titulo: "Configurar Switch y Router",
        escenario: "Una empresa tiene 3 departamentos (Ventas, RRHH, IT) conectados al mismo switch. Necesitan estar en redes lógicamente separadas para seguridad, pero poder comunicarse entre sí cuando sea necesario.",
        tecnico: "Las VLANs (Virtual LANs) permiten segmentar lógicamente un switch físico en múltiples redes broadcast independientes. Cada VLAN es una subred distinta. Para que las VLANs se comuniquen entre sí, se necesita un router (o switch Layer 3) que realice enrutamiento inter-VLAN.",
        pasos: [
            {
                consigna: "¿Qué dispositivo es el más adecuado para segmentar la red en VLANs a nivel de Capa 2?",
                tipo: "dispositivo",
                opciones: null,
                correcta: "switch",
                explicacion: "El Switch gestionable (managed switch) soporta VLANs (IEEE 802.1Q). Permite crear múltiples redes lógicas sobre la misma infraestructura física, aislando el tráfico broadcast."
            },
            {
                consigna: "Para que las VLANs de Ventas, RRHH e IT puedan comunicarse entre sí, ¿qué dispositivo adicional se necesita?",
                tipo: "dispositivo",
                opciones: null,
                correcta: "router",
                explicacion: "El Router (o switch Layer 3) realiza el enrutamiento inter-VLAN. Las VLANs son redes IP distintas, y solo un dispositivo de Capa 3 puede enrutar paquetes entre ellas."
            },
            {
                consigna: "¿Qué configuración se debe aplicar en los puertos del switch que conectan a las PCs de cada departamento?",
                tipo: "opcion",
                opciones: [
                    "Configurar todos los puertos como Trunk con todas las VLANs",
                    "Asignar cada puerto como Access a la VLAN correspondiente al departamento",
                    "Dejar todos los puertos en la VLAN 1 por defecto sin etiquetar",
                    "Deshabilitar los puertos y usar únicamente conexiones inalámbricas"
                ],
                correcta: 1,
                explicacion: "Los puertos ACCESS se asignan a UNA sola VLAN. Las PCs de Ventas van a puertos con VLAN 10, RRHH a VLAN 20, etc. El switch etiqueta internamente las tramas con el VLAN ID correspondiente."
            },
            {
                consigna: "El enlace entre el switch y el router (para enrutamiento inter-VLAN) debe configurarse como:",
                tipo: "opcion",
                opciones: [
                    "Puerto Access en la VLAN nativa",
                    "Puerto Trunk (802.1Q) que transporte todas las VLANs etiquetadas",
                    "Puerto deshabilitado por seguridad perimetral",
                    "Puerto en modo promiscuo para monitoreo de tráfico"
                ],
                correcta: 1,
                explicacion: "El puerto TRUNK (enlace troncal) usa el estándar 802.1Q para transportar tramas de MÚLTIPLES VLANs simultáneamente, etiquetando cada una con su VLAN ID. Así el router recibe tráfico de todas las VLANs."
            }
        ]
    },
    firewall: {
        tag: "MISIÓN 04",
        titulo: "Configurar Firewall",
        escenario: "La red corporativa necesita protección contra accesos no autorizados desde Internet. Se debe implementar un firewall perimetral que filtre el tráfico según políticas de seguridad estrictas.",
        tecnico: "Un Firewall es un dispositivo de seguridad (Capa 3 a 7) que inspecciona el tráfico de red y aplica reglas de filtrado (allow/deny). Puede ser stateful (recuerda el estado de las conexiones) o stateless. Los firewalls modernos incluyen IDS/IPS y deep packet inspection.",
        pasos: [
            {
                consigna: "¿Qué dispositivo se debe ubicar en el perímetro de la red, entre Internet y la red interna?",
                tipo: "dispositivo",
                opciones: null,
                correcta: "firewall",
                explicacion: "El Firewall se ubica en el perímetro de la red (entre Internet y la LAN) para inspeccionar todo el tráfico entrante y saliente, aplicando políticas de seguridad antes de permitir el paso."
            },
            {
                consigna: "¿Qué política de seguridad es la RECOMENDADA para un firewall corporativo?",
                tipo: "opcion",
                opciones: [
                    "Default Allow: permitir todo el tráfico y bloquear solo IPs maliciosas conocidas",
                    "Default Deny: bloquear todo el tráfico y permitir solo lo explícitamente autorizado",
                    "Permitir todo el tráfico entrante y filtrar únicamente el tráfico saliente",
                    "No aplicar reglas de filtrado, confiando en el antivirus de los endpoints"
                ],
                correcta: 1,
                explicacion: "La política 'Default Deny' (bloquear todo por defecto) es la más segura. Solo se permiten explícitamente los servicios necesarios (web, email, VPN). Todo lo demás se descarta, minimizando la superficie de ataque."
            },
            {
                consigna: "¿Qué tipo de firewall puede inspeccionar el contenido de las aplicaciones (HTTP, FTP, etc.) y no solo puertos/IPs?",
                tipo: "opcion",
                opciones: [
                    "Firewall de filtrado de paquetes (Packet Filter) de Capa 3",
                    "Firewall con inspección de estado (Stateful) de Capa 4",
                    "Firewall de próxima generación (NGFW) con inspección profunda de paquetes (DPI)",
                    "Firewall básico de hardware sin capacidad de registro de logs"
                ],
                correcta: 2,
                explicacion: "Los NGFW (Next-Generation Firewalls) operan hasta Capa 7 (aplicación). Pueden identificar aplicaciones específicas independientemente del puerto, y aplicar políticas granulares basadas en usuario, aplicación y contenido."
            },
            {
                consigna: "Para permitir que los empleados accedan a páginas web seguras desde la red interna, ¿qué regla se debe crear en el firewall?",
                tipo: "opcion",
                opciones: [
                    "DENY TCP puerto 443 desde la zona LAN hacia la zona WAN",
                    "ALLOW TCP puerto 443 desde la zona LAN hacia la zona WAN",
                    "ALLOW UDP puerto 80 desde la zona WAN hacia la zona LAN",
                    "DENY todo el tráfico saliente originado en la red interna"
                ],
                correcta: 1,
                explicacion: "HTTPS usa TCP puerto 443. Para permitir navegación web segura desde la red interna (LAN) hacia Internet (WAN), se crea una regla ALLOW TCP 443 LAN→WAN. El firewall stateful permitirá automáticamente las respuestas."
            }
        ]
    }
};

// ============================================
// ESTADO DEL JUEGO
// ============================================
let misionActual = null;
let pasoActual = 0;
let puntajeTotal = 0;
let puntajeMision = 0;
let respuestas = [];
let misionesCompletadas = 0;
let ordenMisiones = ['vpn', 'remoto', 'switch', 'firewall'];
let indiceMisionActual = 0;

// ============================================
// SISTEMA DE SONIDOS (con manejo de errores)
// ============================================
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio no soportado');
        }
    }
}

function reproducirSonido(tipo) {
    try {
        initAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (tipo === 'correcto') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
            osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.4);
        } else if (tipo === 'incorrecto') {
            osc.frequency.setValueAtTime(200, audioCtx.currentTime);
            osc.frequency.setValueAtTime(150, audioCtx.currentTime + 0.15);
            osc.type = 'sawtooth';
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.3);
        } else if (tipo === 'victoria') {
            const notas = [523.25, 659.25, 783.99, 1046.50];
            notas.forEach((freq, i) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g); g.connect(audioCtx.destination);
                o.frequency.value = freq;
                g.gain.setValueAtTime(0.2, audioCtx.currentTime + i * 0.15);
                g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.3);
                o.start(audioCtx.currentTime + i * 0.15);
                o.stop(audioCtx.currentTime + i * 0.15 + 0.3);
            });
        }
    } catch (error) {
        console.log('Error al reproducir sonido:', error);
    }
}

// ============================================
// REGISTRO DE USUARIO
// ============================================
function registrarUsuario(e) {
    e.preventDefault();
    usuario.nombre = document.getElementById('input-nombre').value.trim();
    usuario.legajo = document.getElementById('input-legajo').value.trim();
    
    document.getElementById('modal-registro').style.display = 'none';
    document.getElementById('user-badge').textContent = usuario.nombre.toUpperCase();
    initAudio();
}

// ============================================
// MODO CLARO/OSCURO
// ============================================
function toggleTema() {
    document.body.classList.toggle('tema-claro');
    const icono = document.getElementById('icono-tema');
    icono.textContent = document.body.classList.contains('tema-claro') ? '☀️' : '🌙';
    localStorage.setItem('tema', document.body.classList.contains('tema-claro') ? 'claro' : 'oscuro');
}

if (localStorage.getItem('tema') === 'claro') {
    document.body.classList.add('tema-claro');
    document.getElementById('icono-tema').textContent = '☀️';
}

// ============================================
// NAVEGACIÓN
// ============================================
function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// INICIAR MISIÓN
// ============================================
function iniciarMision(idMision) {
    misionActual = misiones[idMision];
    pasoActual = 0;
    puntajeMision = 0;
    
    document.getElementById('mision-tag').textContent = misionActual.tag;
    document.getElementById('mision-titulo').textContent = misionActual.titulo;
    document.getElementById('mision-escenario').textContent = misionActual.escenario;
    document.getElementById('mision-tecnico').textContent = misionActual.tecnico;
    
    const listaDisp = document.getElementById('dispositivos-lista');
    listaDisp.innerHTML = '';
    Object.keys(dispositivos).forEach(key => {
        const d = dispositivos[key];
        listaDisp.innerHTML += `
            <div class="dispositivo-mini">
                <div class="dispositivo-mini-icon">${d.svg.replace('viewBox="0 0 100 100"', 'viewBox="0 0 100 100" width="40" height="40"')}</div>
                <div class="dispositivo-mini-info">
                    <strong>${d.nombre}</strong>
                    <span>${d.descripcion}</span>
                </div>
            </div>
        `;
    });
    
    mostrarPantalla('pantalla-mision');
    cargarPaso();
}

// ============================================
// CARGAR PASO
// ============================================
function cargarPaso() {
    const paso = misionActual.pasos[pasoActual];
    
    document.getElementById('paso-actual').textContent = `Paso ${pasoActual + 1} de ${misionActual.pasos.length}`;
    document.getElementById('puntaje-mision').textContent = `Puntos: ${puntajeMision}`;
    const progresoPct = (pasoActual / misionActual.pasos.length) * 100;
    document.getElementById('progreso-relleno').style.width = `${progresoPct}%`;
    
    document.getElementById('consigna-texto').textContent = paso.consigna;
    
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('mostrar', 'error');
    
    const dispGrid = document.getElementById('dispositivos-grid');
    const opcContainer = document.getElementById('opciones-container');
    dispGrid.innerHTML = '';
    opcContainer.innerHTML = '';
    
    if (paso.tipo === 'dispositivo') {
        Object.keys(dispositivos).forEach(key => {
            const d = dispositivos[key];
            dispGrid.innerHTML += `
                <div class="dispositivo-card" data-dispositivo="${key}" onclick="seleccionarDispositivo('${key}', this)">
                    <div class="dispositivo-svg">${d.svg}</div>
                    <h4>${d.nombre}</h4>
                    <p>${d.descripcion}</p>
                </div>
            `;
        });
    } else if (paso.tipo === 'opcion') {
        paso.opciones.forEach((opcion, idx) => {
            const letra = String.fromCharCode(65 + idx);
            opcContainer.innerHTML += `
                <button class="btn-opcion" onclick="seleccionarOpcion(${idx}, this)">
                    <span class="opcion-letra">${letra}</span>
                    <span>${opcion}</span>
                </button>
            `;
        });
    }
}

// ============================================
// SELECCIONAR DISPOSITIVO
// ============================================
function seleccionarDispositivo(key, elemento) {
    const paso = misionActual.pasos[pasoActual];
    const esCorrecta = key === paso.correcta;
    
    document.querySelectorAll('.dispositivo-card').forEach(c => {
        c.style.pointerEvents = 'none';
    });
    
    if (esCorrecta) {
        elemento.classList.add('correcto');
        puntajeMision += 100;
        puntajeTotal += 100;
        reproducirSonido('correcto');
    } else {
        elemento.classList.add('incorrecto');
        const correcto = document.querySelector(`[data-dispositivo="${paso.correcta}"]`);
        if (correcto) correcto.classList.add('correcto');
        reproducirSonido('incorrecto');
    }
    
    respuestas.push({
        mision: misionActual.titulo,
        paso: pasoActual + 1,
        consigna: paso.consigna,
        respondio: dispositivos[key].nombre,
        correcta: dispositivos[paso.correcta].nombre,
        esCorrecta: esCorrecta
    });
    
    mostrarFeedback(esCorrecta, paso.explicacion);
}

// ============================================
// SELECCIONAR OPCIÓN
// ============================================
function seleccionarOpcion(idx, elemento) {
    const paso = misionActual.pasos[pasoActual];
    const esCorrecta = idx === paso.correcta;
    
    document.querySelectorAll('.btn-opcion').forEach(b => {
        b.disabled = true;
        b.style.pointerEvents = 'none';
    });
    
    if (esCorrecta) {
        elemento.classList.add('correcta');
        puntajeMision += 100;
        puntajeTotal += 100;
        reproducirSonido('correcto');
    } else {
        elemento.classList.add('incorrecta');
        const opciones = document.querySelectorAll('.btn-opcion');
        if (opciones[paso.correcta]) opciones[paso.correcta].classList.add('correcta');
        reproducirSonido('incorrecto');
    }
    
    respuestas.push({
        mision: misionActual.titulo,
        paso: pasoActual + 1,
        consigna: paso.consigna,
        respondio: paso.opciones[idx],
        correcta: paso.opciones[paso.correcta],
        esCorrecta: esCorrecta
    });
    
    mostrarFeedback(esCorrecta, paso.explicacion);
}

// ============================================
// MOSTRAR FEEDBACK
// ============================================
function mostrarFeedback(esCorrecta, explicacion) {
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('mostrar', 'error');
    
    if (esCorrecta) {
        feedback.classList.add('mostrar');
    } else {
        feedback.classList.add('mostrar', 'error');
    }
    
    document.getElementById('feedback-icon').textContent = esCorrecta ? '✅' : '❌';
    document.getElementById('feedback-titulo').textContent = esCorrecta ? '¡CORRECTO!' : 'INCORRECTO';
    document.getElementById('feedback-texto').textContent = explicacion;
    document.getElementById('puntaje-mision').textContent = `Puntos: ${puntajeMision}`;
    
    const btnSiguiente = document.getElementById('btn-siguiente');
    if (pasoActual === misionActual.pasos.length - 1) {
        btnSiguiente.textContent = indiceMisionActual < ordenMisiones.length - 1 ? 'SIGUIENTE MISIÓN →' : 'VER RESULTADOS →';
    } else {
        btnSiguiente.textContent = 'SIGUIENTE PASO →';
    }
    
    btnSiguiente.style.display = 'inline-block';
    btnSiguiente.disabled = false;
    btnSiguiente.style.pointerEvents = 'auto';
}

// ============================================
// EVENT LISTENER PARA BOTÓN SIGUIENTE
// ============================================
document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-siguiente' || e.target.closest('#btn-siguiente')) {
        e.preventDefault();
        pasoActual++;
        
        if (pasoActual < misionActual.pasos.length) {
            cargarPaso();
        } else {
            misionesCompletadas++;
            indiceMisionActual++;
            
            if (indiceMisionActual < ordenMisiones.length) {
                iniciarMision(ordenMisiones[indiceMisionActual]);
            } else {
                mostrarResultados();
            }
        }
    }
});

// ============================================
// RESULTADOS
// ============================================
function mostrarResultados() {
    reproducirSonido('victoria');
    mostrarPantalla('pantalla-final');
    
    const correctas = respuestas.filter(r => r.esCorrecta).length;
    const total = respuestas.length;
    const precision = Math.round((correctas / total) * 100);
    
    document.getElementById('final-puntaje').textContent = puntajeTotal;
    document.getElementById('final-correctas').textContent = `${correctas}/${total}`;
    document.getElementById('final-precision').textContent = `${precision}%`;
    document.getElementById('resultado-usuario').textContent = `Operador: ${usuario.nombre} · Legajo: ${usuario.legajo}`;
    
    let rango, desc;
    if (precision >= 90) {
        rango = "INGENIERO DE RED SENIOR";
        desc = "Dominio excepcional de infraestructura. Listo para diseñar redes empresariales complejas.";
    } else if (precision >= 70) {
        rango = "TÉCNICO DE REDES";
        desc = "Sólidos conocimientos. Podés administrar redes corporativas con supervisión mínima.";
    } else if (precision >= 50) {
        rango = "TÉCNICO JR";
        desc = "Buen inicio. Recomendamos profundizar en protocolos y configuración de dispositivos.";
    } else {
        rango = "APRENDIZ";
        desc = "Necesitás reforzar los fundamentos del modelo OSI y dispositivos de red.";
    }
    
    document.getElementById('rango-titulo').textContent = rango;
    document.getElementById('rango-desc').textContent = desc;
}

// ============================================
// REPORTE
// ============================================
function descargarReporte() {
    const correctas = respuestas.filter(r => r.esCorrecta).length;
    const total = respuestas.length;
    const precision = Math.round((correctas / total) * 100);
    
    let contenido = "═══════════════════════════════════════════════\n";
    contenido += "   REPORTE TÉCNICO - NOC PANEL ISPI 4019\n";
    contenido += "   Centro de Operaciones de Red\n";
    contenido += "═══════════════════════════════════════════════\n\n";
    contenido += `OPERADOR: ${usuario.nombre}\n`;
    contenido += `LEGAJO:   ${usuario.legajo}\n`;
    contenido += `FECHA:    ${new Date().toLocaleString('es-AR')}\n\n`;
    contenido += `Puntaje Total: ${puntajeTotal} puntos\n`;
    contenido += `Respuestas Correctas: ${correctas} / ${total}\n`;
    contenido += `Precisión: ${precision}%\n`;
    contenido += `Misiones Completadas: ${misionesCompletadas} / 4\n\n`;
    contenido += "───────────────────────────────────────────────\n";
    contenido += "DETALLE DE RESPUESTAS\n";
    contenido += "───────────────────────────────────────────────\n\n";
    
    respuestas.forEach((r, i) => {
        contenido += `[${r.mision}] Paso ${r.paso} ${r.esCorrecta ? '✅' : '❌'}\n`;
        contenido += `Consigna: ${r.consigna}\n`;
        contenido += `Respondiste: ${r.respondio}\n`;
        if (!r.esCorrecta) contenido += `Correcta: ${r.correcta}\n`;
        contenido += "\n";
    });
    
    contenido += "═══════════════════════════════════════════════\n";
    contenido += "   Documento generado automáticamente\n";
    contenido += "═══════════════════════════════════════════════\n";
    
    const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Reporte_${usuario.nombre.replace(/\s+/g, '_')}_ISPI4019.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================
// REINICIAR
// ============================================
function reiniciar() {
    misionActual = null;
    pasoActual = 0;
    puntajeTotal = 0;
    puntajeMision = 0;
    respuestas = [];
    misionesCompletadas = 0;
    indiceMisionActual = 0;
    usuario = { nombre: '', legajo: '' };
    
    document.getElementById('modal-registro').style.display = 'flex';
    document.getElementById('form-registro').reset();
    document.getElementById('user-badge').textContent = 'OPERADOR';
    mostrarPantalla('pantalla-inicio');
}
