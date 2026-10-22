// Base de datos de dispositivos con imágenes reales
const dispositivos = {
  router: {
    nombre: 'Router',
    desc: 'Enruta tráfico entre redes',
    imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop'
  },
  switch: {
    nombre: 'Switch',
    desc: 'Conecta dispositivos en LAN',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
  },
  firewall: {
    nombre: 'Firewall',
    desc: 'Filtra tráfico de red',
    imagen: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
  },
  pc: {
    nombre: 'PC / Workstation',
    desc: 'Computadora de usuario',
    imagen: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop'
  },
  accessPoint: {
    nombre: 'Access Point',
    desc: 'Punto de acceso WiFi',
    imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
  },
  repetidor: {
    nombre: 'Repetidor',
    desc: 'Amplifica señal de red',
    imagen: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=300&fit=crop'
  },
  fichaRed: {
    nombre: 'Ficha de Red (NIC)',
    desc: 'Tarjeta de interfaz de red',
    imagen: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop'
  },
  servidor: {
    nombre: 'Servidor',
    desc: 'Servicios de red centralizados',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
  }
};

// Base de datos de misiones con consignas
const misiones = {
  vpn: {
    titulo: 'Configurar VPN Corporativa',
    tag: 'MISIÓN 01',
    escenario: 'La empresa necesita conectar la sucursal Buenos Aires con la de Córdoba de forma segura a través de Internet.',
    tecnico: 'Una VPN (Virtual Private Network) crea un túnel cifrado entre dos puntos. Se requiere un Router con capacidad VPN en cada extremo y un protocolo como IPSec o SSL.',
    pasos: [
      {
        consigna: '¿Qué dispositivo de red se necesita en cada sucursal para establecer el túnel VPN?',
        opciones: ['router', 'switch', 'accessPoint', 'repetidor'],
        correcta: 'router',
        explicacion: 'El Router es el dispositivo de borde que conecta redes diferentes y puede establecer túneles VPN entre sucursales.'
      },
      {
        consigna: '¿Qué protocolo es el más adecuado para cifrar el tráfico de la VPN corporativa?',
        opciones: ['IPSec', 'HTTP', 'FTP', 'DHCP'],
        correcta: 'IPSec',
        explicacion: 'IPSec (Internet Protocol Security) es el estándar para VPNs sitio-a-sitio, proporcionando cifrado y autenticación a nivel de red.'
      },
      {
        consigna: '¿Qué configuración debe tener el Router para permitir el tráfico VPN a través del firewall?',
        opciones: ['Abrir puerto 443', 'Abrir puerto 500 (IKE) y 4500', 'Abrir puerto 80', 'No requiere configuración'],
        correcta: 'Abrir puerto 500 (IKE) y 4500',
        explicacion: 'IPSec usa el puerto 500 para IKE (Intercambio de Claves) y 4500 para NAT-Traversal.'
      },
      {
        consigna: 'Una vez configurada, ¿cómo verificás que el túnel VPN está activo?',
        opciones: ['Hacer ping a la red remota', 'Reiniciar el router', 'Desconectar el cable', 'Cambiar la IP'],
        correcta: 'Hacer ping a la red remota',
        explicacion: 'Un ping exitoso a una IP de la red remota confirma que el túnel VPN está operativo y enruta correctamente.'
      }
    ]
  },
  remoto: {
    titulo: 'Escritorio Remoto',
    tag: 'MISIÓN 02',
    escenario: 'Un empleado necesita acceder a su PC de la oficina desde su casa para trabajar de forma remota.',
    tecnico: 'El Escritorio Remoto (RDP en Windows, VNC en Linux) permite controlar una PC a distancia. Requiere habilitar el servicio, configurar el firewall y tener conectividad de red.',
    pasos: [
      {
        consigna: '¿En qué dispositivo se debe habilitar el servicio de Escritorio Remoto?',
        opciones: ['pc', 'router', 'switch', 'repetidor'],
        correcta: 'pc',
        explicacion: 'El servicio de Escritorio Remoto se habilita en la PC destino (la que será controlada remotamente).'
      },
      {
        consigna: '¿Qué componente de red debe configurarse para permitir la conexión entrante?',
        opciones: ['fichaRed', 'firewall', 'accessPoint', 'repetidor'],
        correcta: 'firewall',
        explicacion: 'El Firewall debe permitir el tráfico entrante en el puerto 3389 (RDP) para que la conexión remota sea posible.'
      },
      {
        consigna: '¿Qué puerto utiliza por defecto el protocolo RDP (Remote Desktop Protocol)?',
        opciones: ['Puerto 80', 'Puerto 443', 'Puerto 3389', 'Puerto 22'],
        correcta: 'Puerto 3389',
        explicacion: 'RDP usa el puerto TCP 3389 por defecto. Es fundamental conocerlo para configurar reglas de firewall.'
      },
      {
        consigna: '¿Qué aplicación usa el empleado desde su casa para conectarse a la PC de la oficina?',
        opciones: ['Cliente RDP (mstsc)', 'Navegador web', 'Cliente FTP', 'Terminal SSH'],
        correcta: 'Cliente RDP (mstsc)',
        explicacion: 'En Windows se usa "Conexión a Escritorio Remoto" (mstsc.exe). En otros sistemas existen clientes RDP compatibles.'
      }
    ]
  },
  switch: {
    titulo: 'Configurar Switch y Router',
    tag: 'MISIÓN 03',
    escenario: 'La empresa necesita segmentar la red en VLANs para separar el tráfico de Ventas, Administración y TI.',
    tecnico: 'Las VLANs (Virtual LANs) segmentan una red física en redes lógicas independientes. Se configuran en Switches gestionables y requieren un Router para el enrutamiento entre VLANs (Router-on-a-Stick).',
    pasos: [
      {
        consigna: '¿Qué tipo de Switch se necesita para crear VLANs?',
        opciones: ['switch', 'repetidor', 'accessPoint', 'fichaRed'],
        correcta: 'switch',
        explicacion: 'Se requiere un Switch Gestionable (Layer 2 o Layer 3) que soporte configuración de VLANs mediante CLI o interfaz web.'
      },
      {
        consigna: '¿Qué dispositivo se necesita para permitir comunicación entre las VLANs?',
        opciones: ['router', 'switch', 'repetidor', 'accessPoint'],
        correcta: 'router',
        explicacion: 'Se necesita un Router (o Switch Layer 3) para hacer enrutamiento inter-VLAN. La técnica común es "Router-on-a-Stick".'
      },
      {
        consigna: '¿Qué tipo de puerto del Switch conecta al Router en la configuración Router-on-a-Stick?',
        opciones: ['Puerto Trunk', 'Puerto Access', 'Puerto Console', 'Puerto USB'],
        correcta: 'Puerto Trunk',
        explicacion: 'El puerto Trunk transporta tráfico de múltiples VLANs usando etiquetado 802.1Q hacia el Router.'
      },
      {
        consigna: '¿Qué estándar de etiquetado se usa para identificar VLANs en un enlace Trunk?',
        opciones: ['IEEE 802.1Q', 'TCP/IP', 'HTTP/2', 'USB 3.0'],
        correcta: 'IEEE 802.1Q',
        explicacion: '802.1Q es el estándar IEEE que define el etiquetado de VLANs en tramas Ethernet para enlaces Trunk.'
      }
    ]
  }
};

// Estado global
const estado = {
  usuario: null,
  tema: localStorage.getItem('tema') || 'dark',
  misionActual: null,
  paso: 0,
  puntaje: 0,
  correctas: 0
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  aplicarTema(estado.tema);
});

function registrarUsuario(e) {
  e.preventDefault();
  const nombre = document.getElementById('input-nombre').value;
  estado.usuario = nombre;
  document.getElementById('user-badge').textContent = nombre.split(' ')[0].toUpperCase();
  document.getElementById('modal-registro').classList.remove('activo');
}

function toggleTema() {
  estado.tema = estado.tema === 'dark' ? 'light' : 'dark';
  localStorage.setItem('tema', estado.tema);
  aplicarTema(estado.tema);
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-theme', tema);
  document.getElementById('btn-tema').textContent = tema === 'dark' ? '☀️' : '🌙';
}

function cambiarPantalla(idPantalla) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(idPantalla).classList.add('activa');
}

function iniciarMision(tipo) {
  estado.misionActual = tipo;
  estado.paso = 0;
  estado.puntaje = 0;
  estado.correctas = 0;
  
  const mision = misiones[tipo];
  document.getElementById('mision-titulo').textContent = mision.titulo;
  document.getElementById('mision-tag').textContent = mision.tag;
  document.getElementById('mision-escenario').textContent = mision.escenario;
  document.getElementById('mision-tecnico').textContent = mision.tecnico;
  
  cambiarPantalla('pantalla-mision');
  renderizarPaso();
}

function renderizarPaso() {
  const mision = misiones[estado.misionActual];
  const paso = mision.pasos[estado.paso];
  
  document.getElementById('consigna-texto').textContent = paso.consigna;
  document.getElementById('paso-actual').textContent = `Paso ${estado.paso + 1} de ${mision.pasos.length}`;
  document.getElementById('progreso-relleno').style.width = `${((estado.paso + 1) / mision.pasos.length) * 100}%`;
  document.getElementById('feedback').classList.remove('visible', 'correcto', 'incorrecto');
  
  const container = document.getElementById('opciones-container');
  container.innerHTML = '';
  
  paso.opciones.forEach((opKey, index) => {
    const disp = dispositivos[opKey] || { nombre: opKey, desc: 'Opción', imagen: '' };
    const div = document.createElement('div');
    div.className = 'opcion-item';
    div.onclick = () => seleccionarOpcion(opKey, paso.correcta, div);
    div.innerHTML = `
      <img src="${disp.imagen}" alt="${disp.nombre}" class="opcion-imagen" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23334155%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22>📦</text></svg>'">
      <div class="opcion-nombre">${disp.nombre}</div>
      <div class="opcion-desc">${disp.desc}</div>
    `;
    container.appendChild(div);
  });
}

function seleccionarOpcion(seleccionada, correcta, elemento) {
  // Deshabilitar todas las opciones
  document.querySelectorAll('.opcion-item').forEach(el => {
    el.classList.add('deshabilitada');
    el.onclick = null;
  });
  
  const feedback = document.getElementById('feedback');
  const paso = misiones[estado.misionActual].pasos[estado.paso];
  
  if (seleccionada === correcta) {
    elemento.classList.add('seleccionada-correcta');
    feedback.classList.add('visible', 'correcto');
    document.getElementById('feedback-icon').textContent = '✅';
    document.getElementById('feedback-titulo').textContent = '¡Correcto!';
    document.getElementById('feedback-texto').textContent = paso.explicacion;
    estado.puntaje += 100;
    estado.correctas++;
  } else {
    elemento.classList.add('seleccionada-incorrecta');
    // Marcar la correcta
    document.querySelectorAll('.opcion-item').forEach((el, idx) => {
      if (misiones[estado.misionActual].pasos[estado.paso].opciones[idx] === correcta) {
        el.classList.add('seleccionada-correcta');
      }
    });
    feedback.classList.add('visible', 'incorrecto');
    document.getElementById('feedback-icon').textContent = '❌';
    document.getElementById('feedback-titulo').textContent = 'Incorrecto';
    document.getElementById('feedback-texto').textContent = paso.explicacion;
  }
}

function siguientePaso() {
  const mision = misiones[estado.misionActual];
  estado.paso++;
  
  if (estado.paso >= mision.pasos.length) {
    mostrarResultado();
  } else {
    renderizarPaso();
  }
}

function mostrarResultado() {
  const total = misiones[estado.misionActual].pasos.length;
  const precision = Math.round((estado.correctas / total) * 100);
  
  document.getElementById('resultado-usuario').textContent = `Operador: ${estado.usuario || 'Anónimo'}`;
  document.getElementById('final-puntaje').textContent = estado.puntaje;
  document.getElementById('final-correctas').textContent = `${estado.correctas}/${total}`;
  document.getElementById('final-precision').textContent = `${precision}%`;
  
  cambiarPantalla('pantalla-final');
}

function volverInicio() {
  cambiarPantalla('pantalla-inicio');
}
