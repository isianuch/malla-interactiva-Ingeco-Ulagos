// Listado de ramos por semestre
const courses = [
  // Semestre 1
  ['Administración general', 'Álgebra', 'Taller de Formación profesional I', 'Introducción a la Economía', 'Tecnología de Información I', 'Comunicación I'],
  // Semestre 2
  ['Gestión de Personas I', 'Cálculo I', 'Fundamentos Contables', 'Ética', 'Tecnología de Información II', 'Electivo UFIN I', 'Ciudadanía'],
  // Semestre 3
  ['Desarrollo organizacional', 'Cálculo II', 'Taller de formación profesional II', 'Valoración y contabilidad empresarial', 'Microeconomía I', 'Desarrollo emprendedor', 'Inglés I'],
  // Semestre 4
  ['Gestión de personas II', 'Estadística I', 'Contabilidad de Costos', 'Macroeconomía I', 'Liderazgo y negociación', 'Electivo UFIN II', 'Inglés II'],
  // Semestre 5
  ['Administración estratégica', 'Estadística II', 'Taller de Formación profesional III', 'Planificación y control financiero', 'Microeconomía II', 'Práctica Básica', 'Electivo UFIN III', 'Inglés III'],
  // Semestre 6
  ['Investigación de mercado', 'Optimización de operaciones', 'Administración y análisis financiero', 'Macroeconomía 2', 'Legislación de empresa', 'Inglés IV'],
  // Semestre 7
  ['Sistema de información gerencial', 'Administración de operaciones', 'Creación de empresa', 'Econometría', 'Seminario de grado I', 'Electivo UFIN IV', 'Inglés para negocios I'],
  // Semestre 8
  ['Marketing estratégico', 'Evaluación integrada de proyectos', 'Finanzas avanzadas', 'Desarrollo y gestión territorial', 'Seminario de grado II', 'Inglés para negocios II'],
  // Semestre 9
  ['Taller de dirección estratégica', 'Electivo de carrera I', 'Taller de negocios internacionales', 'Simulación de negocios', 'Práctica profesional'],
  // Semestre 10
  ['Electivo de carrera II', 'Electivo de carrera III', 'Trabajo de habilitación profesional']
];

// Aquí defines tus prerrequisitos cuando los tengas:
// Formato: 'r<semestre>c<col>': ['r<semestre>c<col>', …]
const prereqs = {
  // Sem 2
  'r2c1': ['r1c1'], // Gestión de Personas I ← Administración general
  'r2c2': ['r1c2'], // Cálculo I ← Álgebra
  'r2c4': ['r1c4'], // Ética ← Introducción a la Economía
  'r2c5': ['r1c5'], // Tecnología II ← Tecnología I

  // Sem 3
  'r3c1': ['r2c1'], // Desarrollo organizacional ← Gestión de Personas I
  'r3c2': ['r2c2'], // Cálculo II ← Cálculo I
  'r3c3': ['r1c3'], // Taller FP II ← Taller FP I
  'r3c4': ['r2c3'], // Valoración y contabilidad ← Fundamentos Contables
  'r3c5': ['r1c4'], // Micro I ← Introducción a la Economía

  // Sem 4
  'r4c1': ['r3c1'], // Gestión de Personas II ← Desarrollo organizacional
  'r4c2': ['r3c2'], // Estadística I ← Cálculo II
  'r4c3': ['r3c4'], // Contabilidad de Costos ← Valoración y contabilidad empresarial
  'r4c4': ['r3c5'], // Macroeconomía I ← Microeconomía I
  'r4c7': ['r3c7'], // Inglés II ← Inglés I

  // Sem 5
  'r5c1': ['r4c1'], // Administración estratégica ← Gestión de Personas II
  'r5c2': ['r4c2'], // Estadística II ← Estadística I
  'r5c3': ['r3c3'], // Taller FP III ← Taller FP II
  'r5c4': ['r4c3'], // Planificación y control financiero ← Contabilidad de Costos
  'r5c5': ['r4c4'], // Micro II ← Macroeconomía I
  'r5c7': ['r4c6'], // Electivo UFIN III ← Electivo UFIN II
  'r5c8': ['r4c7'], // Inglés III ← Inglés II

  // Sem 6
  'r6c1': ['r5c1'], // Investigación de mercado ← Administración estratégica
  'r6c2': ['r5c2'], // Optimización de operaciones ← Estadística II
  'r6c3': ['r5c4'], // Administración y análisis financiero ← Planificación y control financiero
  'r6c4': ['r5c5'], // Macroeconomía II ← Microeconomía II
  'r6c6': ['r5c8'], // Inglés IV ← Inglés III

  // Sem 7
  'r7c1': ['r6c1'], // SIG ← Investigación de mercado
  'r7c2': ['r6c2'], // Administración de operaciones ← Optimización de operaciones
  'r7c3': ['r6c3'], // Creación de empresa ← Administración y análisis financiero
  'r7c4': ['r6c4'], // Econometría ← Macroeconomía II
  'r7c5': ['r6c5'], // Seminario de grado I ← Legislación de empresa
  'r7c6': ['r5c7'], // Electivo UFIN IV ← Electivo UFIN III
  'r7c7': ['r6c6'], // Inglés para negocios I ← Inglés IV

  // Sem 8
  'r8c1': ['r7c1'], // Marketing estratégico ← SIG
  'r8c2': ['r7c3'], // Evaluación integrada de proyectos ← Creación de empresa
  'r8c3': ['r7c4'], // Finanzas avanzadas ← Econometría
  'r8c4': ['r6c5'], // Desarrollo y gestión territorial ← Legislación de empresa
  'r8c5': ['r7c5'], // Seminario de grado II ← Seminario de grado I
  'r8c6': ['r7c7'], // Inglés para negocios II ← Inglés para negocios I

  // Sem 9
  'r9c1': ['r8c1'], // Taller de dirección estratégica ← Marketing estratégico
  'r9c3': ['r8c2'], // Taller de negocios internacionales ← Evaluación integrada de proyectos
  'r9c4': ['r8c3'], // Simulación de negocios ← Finanzas avanzadas
  'r9c5': ['r8c5'], // Práctica profesional ← Seminario de grado II

  // Sem 10
  'r10c1': ['r9c2'], // Electivo carrera II ← Electivo de carrera I
  'r10c2': ['r9c3'], // Electivo carrera III ← Taller de negocios internacionales
  'r10c3': ['r9c5']  // Trabajo de habilitación profesional ← Práctica profesional
};

  // ej: 'r2c2': ['r1c1','r1c2'],
};

const semIn   = document.getElementById('sem');
const perIn   = document.getElementById('per');
const genBtn  = document.getElementById('gen');
const clearBtn= document.getElementById('clear');
const thead   = document.querySelector('#malla thead');
const tbody   = document.querySelector('#malla tbody');

function build(sem, per) {
  // Cabecera
  thead.innerHTML = '<tr><th>Sem</th>' +
    Array.from({length: per}, (_, i) => `<th>Asig ${i+1}</th>`).join('') +
    '</tr>';
  // Filas
  tbody.innerHTML = '';
  for (let s = 1; s <= sem; s++) {
    const row = courses[s-1] || [];
    const tr = document.createElement('tr');
    tr.innerHTML = `<th>${s}</th>` +
      Array.from({length: per}, (_, j) => {
        const name = row[j] || '';
        return `<td id="r${s}c${j+1}">${name}</td>`;
      }).join('');
    tbody.appendChild(tr);
  }
  initCells();
  updateDisabledStates();
}

function initCells() {
  tbody.querySelectorAll('td').forEach(td => {
    td.classList.remove('active','disabled');
    td.onclick = () => {
      if (td.classList.contains('disabled')) return;
      td.classList.toggle('active');
      updateDisabledStates();
    };
  });
}

function updateDisabledStates() {
  for (const [id, parents] of Object.entries(prereqs)) {
    const cell = document.getElementById(id);
    if (!cell) continue;
    const ok = parents.every(pid => {
      const p = document.getElementById(pid);
      return p && p.classList.contains('active');
    });
    if (ok) {
      cell.classList.remove('disabled');
    } else {
      cell.classList.add('disabled');
      cell.classList.remove('active');
    }
  }
}

genBtn.onclick   = () => build(+semIn.value, +perIn.value);
clearBtn.onclick = () => {
  tbody.querySelectorAll('td.active').forEach(c => c.classList.remove('active'));
  updateDisabledStates();
};

// Inicialización
build(+semIn.value, +perIn.value);
