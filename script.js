// Estado global
const estado = {
  usuario: null,
  tema: localStorage.getItem('tema') || 'dark',
  misionActual: null,
  paso: 1,
  puntaje: 0
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  aplicarTema(estado.tema);
});

// 1. Registro de Usuario
function registrarUsuario(e) {
  e.preventDefault();
  const nombre = document.getElementById('input-nombre').value;
  estado.usuario = nombre;
  document.getElementById('user-badge').textContent = nombre.split(' ')[0].toUpperCase();
  document.getElementById('modal-registro').classList.remove('activo');
}

// 2. Control de Tema
function toggleTema() {
  estado.tema = estado.tema === 'dark' ? 'light' : 'dark';
  localStorage.setItem('tema', estado.tema);
  aplicarTema(estado.tema);
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-theme', tema);
  document.getElementById('btn-tema').textContent = tema === 'dark' ? '☀️' : '🌙';
}

// 3. Navegación entre Pantallas
function cambiarPantalla(idPantalla) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(idPantalla).classList.add('activa');
}

// 4. Lógica de Misión
function iniciarMision(tipo) {
  estado.misionActual = tipo;
  estado.paso = 1;
  estado.puntaje = 0;
  
  document.getElementById('mision-titulo').textContent = `Misión: ${tipo.toUpperCase()}`;
  document.getElementById('mision-tag').textContent = `MISIÓN 0${tipo === 'vpn' ? 1 : tipo === 'remoto' ? 2 : tipo === 'switch' ? 3 : 4}`;
  document.getElementById('paso-actual').textContent = `Paso 1 de 4`;
  document.getElementById('progreso-relleno').style.width = '25%';
  document.getElementById('feedback').classList.remove('visible');
  
  cambiarPantalla('pantalla-mision');
  renderizarOpciones();
}

function renderizarOpciones() {
  const grid = document.getElementById('dispositivos-grid');
  grid.innerHTML = `
    <div class="dispositivo-item" onclick="seleccionarDispositivo(this, true)">🌐 Router</div>
    <div class="dispositivo-item" onclick="seleccionarDispositivo(this, false)">🔀 Switch</div>
    <div class="dispositivo-item" onclick="seleccionarDispositivo(this, false)">🛡️ Firewall</div>
    <div class="dispositivo-item" onclick="seleccionarDispositivo(this, false)">💻 PC</div>
  `;
}

function seleccionarDispositivo(elemento, esCorrecto) {
  document.querySelectorAll('.dispositivo-item').forEach(el => el.style.borderColor = 'var(--border)');
  
  const feedback = document.getElementById('feedback');
  feedback.classList.add('visible');
  
  if (esCorrecto) {
    elemento.style.borderColor = 'var(--accent)';
    feedback.className = 'feedback visible correcto';
    document.getElementById('feedback-icon').textContent = '✅';
    document.getElementById('feedback-titulo').textContent = 'Dispositivo Correcto';
    document.getElementById('feedback-texto').textContent = 'Has seleccionado el equipo adecuado para este segmento de red.';
    estado.puntaje += 100;
    document.getElementById('puntaje-mision').textContent = `Puntos: ${estado.puntaje}`;
  } else {
    elemento.style.borderColor = '#ef4444';
    feedback.className = 'feedback visible';
    feedback.style.background = 'rgba(239, 68, 68, 0.1)';
    feedback.style.border = '1px solid #ef4444';
    document.getElementById('feedback-icon').textContent = '❌';
    document.getElementById('feedback-titulo').textContent = 'Dispositivo Incorrecto';
    document.getElementById('feedback-texto').textContent = 'Revisa el fundamento técnico e intenta de nuevo.';
  }
}

function siguientePaso() {
  estado.paso++;
  if (estado.paso > 4) {
    alert(`¡Misión completada! Puntaje final: ${estado.puntaje}`);
    cambiarPantalla('pantalla-inicio');
  } else {
    document.getElementById('paso-actual').textContent = `Paso ${estado.paso} de 4`;
    document.getElementById('progreso-relleno').style.width = `${estado.paso * 25}%`;
    document.getElementById('feedback').classList.remove('visible');
    renderizarOpciones(); // Reinicia las opciones para el siguiente paso
  }
}
