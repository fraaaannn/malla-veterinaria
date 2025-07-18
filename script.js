// Datos de los ramos por semestre (1 a 10)
const malla = [
  {
    semestre: "SEMESTRE 1",
    ramos: [
      { codigo: "ASIGESAP01", nombre: "Estrategias para el Aprendizaje", requisitos: [] },
      { codigo: "DBIO 1069", nombre: "Biología Celular", requisitos: [] },
      { codigo: "DMAE M001", nombre: "Matemática", requisitos: [] },
      { codigo: "DQUI 1035", nombre: "Química General y Orgánica", requisitos: [] },
      { codigo: "MEVE 0120", nombre: "Orientación Profesional", requisitos: [] },
      { codigo: "MEVE 0002", nombre: "Física Médica", requisitos: [] }
    ]
  },
  {
    semestre: "SEMESTRE 2",
    ramos: [
      { codigo: "DBIO 1076", nombre: "Bioquímica General", requisitos: ["DBIO 1069", "DQUI 1035"] },
      { codigo: "MEVE B001", nombre: "Histología Veterinaria", requisitos: ["DBIO 1069"] },
      { codigo: "MEVE B002", nombre: "Bienestar Animal", requisitos: ["MEVE 0120"] },
      { codigo: "MEVE 0005", nombre: "Zoología Veterinaria", requisitos: [] },
      { codigo: "MEVE 0007", nombre: "Anatomía Veterinaria I", requisitos: ["DBIO 1069"] },
      { codigo: "MEVE 0121", nombre: "Inglés Instrumental I", requisitos: [] }
    ]
  },
  {
    semestre: "SEMESTRE 3",
    ramos: [
      { codigo: "FILS 0001", nombre: "Antropología", requisitos: [] },
      { codigo: "DBIO 1031", nombre: "Ecología", requisitos: ["MEVE 0005"] },
      { codigo: "MEVE 0010", nombre: "Fisiología Animal", requisitos: ["DBIO 1076", "MEVE B001", "MEVE B002"] },
      { codigo: "MEVE 0011", nombre: "Anatomía Veterinaria II", requisitos: ["MEVE 0007"] },
      { codigo: "MEVE 0012", nombre: "Microbiología General", requisitos: [] },
      { codigo: "MEVE 0017", nombre: "Inmunología Veterinaria", requisitos: [] },
      { codigo: "MEVE 0018", nombre: "Genética Ganadera", requisitos: ["DMAE M001"] },
      { codigo: "MEVE 0122", nombre: "Inglés Instrumental II", requisitos: ["MEVE 0121"] },
      { codigo: "MEVE 0097", nombre: "Pasantía Intrahospitalaria I", requisitos: ["ASIGESAP01", "DBIO 1069", "DMAE M001", "DQUI 1035", "MEVE 0120", "MEVE 0002", "DBIO 1076", "MEVE B001", "MEVE B002", "MEVE 0005", "MEVE 0007", "MEVE 0121"] },
      { codigo: "MEVE 0099", nombre: "Pasantía Intrahospitalaria II", requisitos: ["MEVE 0097"] }
    ]
  },
  {
    semestre: "SEMESTRE 4",
    ramos: [
      { codigo: "FILS 0002", nombre: "Ética", requisitos: ["FILS 0001"] },
      { codigo: "MEVE 0009", nombre: "Producción de Forrajes", requisitos: [] },
      { codigo: "MEVE 0015", nombre: "Fisiopatología Animal", requisitos: ["MEVE 0010", "MEVE 0017", "MEVE 0012"] },
      { codigo: "MEVE 0020", nombre: "Reproducción Animal", requisitos: ["MEVE 0010", "MEVE 0011"] },
      { codigo: "MEVE 0027", nombre: "Enfermedades Parasitarias", requisitos: [] },
      { codigo: "MEVE 0028", nombre: "Enfermedades Infecciosas", requisitos: ["MEVE 0012"] },
      { codigo: "MEVE 0082", nombre: "Patología General", requisitos: ["MEVE 0011"] },
      { codigo: "MEVE 0101", nombre: "Pasantía Intrahospitalaria III", requisitos: ["MEVE 0099"] },
      { codigo: "MEVE 0103", nombre: "Pasantía Intrahospitalaria IV", requisitos: ["MEVE 0101"] }
    ]
  },
  {
    semestre: "SEMESTRE 5",
    ramos: [
      { codigo: "ELEFORIN01", nombre: "Electivo de Formación Integral", requisitos: [] },
      { codigo: "MEVE 0019", nombre: "Nutrición y Alimentación Animal", requisitos: ["MEVE 0009"] },
      { codigo: "MEVE 0021", nombre: "Patología Especial de Sistemas", requisitos: ["MEVE 0082"] },
      { codigo: "MEVE 0022", nombre: "Farmacología Veterinaria I", requisitos: ["MEVE 0082", "MEVE 0028"] },
      { codigo: "MEVE 0024", nombre: "Andrología", requisitos: [] },
      { codigo: "MEVE 0036", nombre: "Sistema de Producción de Carne", requisitos: ["MEVE 0009"] },
      { codigo: "MEVE 0046", nombre: "Economía", requisitos: ["DMAE M001"] },
      { codigo: "MEVE 0104", nombre: "Pasantía Intrahospitalaria V", requisitos: [] },
      { codigo: "MEVE 0105", nombre: "Pasantía Intrahospitalaria VI", requisitos: [] }
    ]
  },
  {
    semestre: "SEMESTRE 6",
    ramos: [
      { codigo: "MEVE 0025", nombre: "Cirugía General y Patología Quirúrgica", requisitos: [] },
      { codigo: "MEVE 0026", nombre: "Farmacología Veterinaria II", requisitos: [] },
      { codigo: "MEVE 0030", nombre: "Sistemas de Producción de Leche", requisitos: ["MEVE 0018", "MEVE 0036", "MEVE 0088"] },
      { codigo: "MEVE 0088", nombre: "Tecnología de la Carne", requisitos: [] },
      { codigo: "MEVE 0124", nombre: "Ginecología y Obstetricia", requisitos: ["MEVE 0020"] },
      { codigo: "MEVE 0125", nombre: "Contabilidad y Administración", requisitos: [] },
      { codigo: "MEVE 0106", nombre: "Pasantía Intrahospitalaria VII", requisitos: [] },
      { codigo: "MEVE 0107", nombre: "Pasantía Intrahospitalaria VIII", requisitos: ["MEVE 0106"] }
    ]
  },
  {
    semestre: "SEMESTRE 7",
    ramos: [
      { codigo: "MEVE 0029", nombre: "Cirugía Especial", requisitos: ["MEVE 0025", "MEVE 0026"] },
      { codigo: "MEVE 0032", nombre: "Exploración Clínica de los Animales", requisitos: ["MEVE B001", "MEVE B002"] },
      { codigo: "MEVE 0049", nombre: "Análisis Estadístico", requisitos: ["MEVE 0125"] },
      { codigo: "MEVE 0058", nombre: "Sistemas de Producción de Peces", requisitos: ["MEVE 0030"] },
      { codigo: "MEVE 0059", nombre: "Tecnología de la Leche", requisitos: ["MEVE 0030", "MEVE 0088"] },
      { codigo: "MEVE 0126", nombre: "Conservación de la Vida Silvestre", requisitos: ["DBIO 1031"] },
      { codigo: "MEVE 0108", nombre: "Pasantía Intrahospitalaria IX", requisitos: [] },
      { codigo: "MEVE 0109", nombre: "Pasantía Intrahospitalaria X", requisitos: ["MEVE 0108"] }
    ]
  },
  {
    semestre: "SEMESTRE 8",
    ramos: [
      { codigo: "MEVE 0031", nombre: "Toxicología Veterinaria", requisitos: [] },
      { codigo: "MEVE 0035", nombre: "Complementarios de Diagnóstico", requisitos: [] },
      { codigo: "MEVE 0034", nombre: "Medicina Interna", requisitos: ["MEVE 0032", "MEVE 0049"] },
      { codigo: "MEVE 0037", nombre: "Metodología de la Investigación", requisitos: [] },
      { codigo: "MEVE 0045", nombre: "Epidemiología y Salud Pública", requisitos: [] },
      { codigo: "MEVE 0127", nombre: "Formulación y Evaluación de Proyectos", requisitos: [] },
      { codigo: "MEVE 0110", nombre: "Pasantía Intrahospitalaria XI", requisitos: [] },
      { codigo: "MEVE 0111", nombre: "Pasantía Intrahospitalaria XII", requisitos: ["MEVE 0110"] }
    ]
  },
  {
    semestre: "SEMESTRE 9",
    ramos: [
      { codigo: "MEVE 0044", nombre: "Clínica de Animales Silvestres y Exóticos", requisitos: ["MEVE 0031", "MEVE 0034", "MEVE 0035"] },
      { codigo: "MEVE 0056", nombre: "Clínica de Equinos y Rumiantes", requisitos: ["MEVE 0031", "MEVE 0034", "MEVE 0035"] },
      { codigo: "MEVE 0057", nombre: "Clínica de Animales de Compañía", requisitos: ["MEVE 0031", "MEVE 0034", "MEVE 0035"] },
      { codigo: "MEVE 0090", nombre: "Memoria de Título", requisitos: ["MEVE 0037"] },
      { codigo: "MEVE 0092", nombre: "Inocuidad de los Alimentos", requisitos: ["MEVE 0045"] },
      { codigo: "MEVE 0137", nombre: "Pasantía Intrahospitalaria XIII", requisitos: ["MEVE 0111"] },
      { codigo: "MEVE 0138", nombre: "Pasantía Intrahospitalaria XIV", requisitos: ["MEVE 0137"] },
      { codigo: "MEVE 0139", nombre: "Turno Hospitalario I", requisitos: [] }
    ]
  },
  {
    semestre: "SEMESTRE 10",
    ramos: [
      { codigo: "ELEMVE01", nombre: "Electivo I", requisitos: [] },
      { codigo: "ELEMVE02", nombre: "Electivo II", requisitos: [] },
      { codigo: "ELEMVE03", nombre: "Electivo III", requisitos: [] },
      { codigo: "MEVE 0128", nombre: "Internado", requisitos: ["MEVE 0044", "MEVE 0056", "MEVE 0057"] },
      { codigo: "MEVE 0140", nombre: "Turno Hospitalario II", requisitos: ["MEVE 0138"] }
    ]
  }
];

// Variables globales
const mallaDiv = document.getElementById("malla");
const STORAGE_KEY = "mallaVeterinariaEstado";

// Estado guardado de ramos aprobados (objeto: {codigo: true/false})
let aprobadoEstado = {};

// Función para cargar estado de localStorage
function cargarEstado() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    aprobadoEstado = JSON.parse(guardado);
  }
}

// Guardar estado en localStorage
function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobadoEstado));
}

// Verifica si todos los requisitos de un ramo están aprobados
function esDisponible(ramo) {
  return ramo.requisitos.every(req => aprobadoEstado[req]);
}

// Actualiza los estados y colores de los ramos
function actualizarEstados() {
  for (const sem of malla) {
    for (const ramo of sem.ramos) {
      const ramoDiv = document.getElementById(ramo.codigo);
      if (!ramoDiv) continue;

      if (aprobadoEstado[ramo.codigo]) {
        ramoDiv.className = "ramo aprobado";
      } else if (esDisponible(ramo)) {
        ramoDiv.className = "ramo disponible";
      } else {
        ramoDiv.className = "ramo bloqueado";
      }
    }
  }
}

// Al hacer clic en un ramo
function toggleRamo(e) {
  const codigo = e.target.id;
  if (!codigo) return;

  const ramo = buscarRamoPorCodigo(codigo);
  if (!ramo) return;

  // Sólo permite marcar/desmarcar si está disponible o aprobado
  if (e.target.classList.contains("bloqueado")) return;

  // Alternar aprobado
  if (aprobadoEstado[codigo]) {
    aprobadoEstado[codigo] = false;
  } else {
    aprobadoEstado[codigo] = true;
  }

  guardarEstado();
  actualizarEstados();
}

// Busca ramo en la malla por código
function buscarRamoPorCodigo(codigo) {
  for (const sem of malla) {
    for (const ramo of sem.ramos) {
      if (ramo.codigo === codigo) return ramo;
    }
  }
  return null;
}

// Renderiza la malla en el DOM
function renderizarMalla() {
  mallaDiv.innerHTML = "";

  for (const sem of malla) {
    const semDiv = document.createElement("div");
    semDiv.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    semDiv.appendChild(titulo);

    for (const ramo of sem.ramos) {
      const ramoDiv = document.createElement("div");
      ramoDiv.classList.add("ramo");
      ramoDiv.id = ramo.codigo;
      ramoDiv.textContent = `${ramo.codigo} – ${ramo.nombre}`;
      semDiv.appendChild(ramoDiv);

      ramoDiv.addEventListener("click", toggleRamo);
    }

    mallaDiv.appendChild(semDiv);
  }
}

// Inicialización
function init() {
  cargarEstado();
  renderizarMalla();
  actualizarEstados();
}

init();
