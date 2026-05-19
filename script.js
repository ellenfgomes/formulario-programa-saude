const formularios = {
    rastreio: {
        titulo: 'Programa de Rastreio',
        descricao: 'Programa de rastreio para exames preventivos e monitoramento da população-alvo.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Idade', type: 'number', name: 'idade', placeholder: 'Idade' },
            { label: 'Exame de rastreio', type: 'select', name: 'tipo-rastreio', options: ['Selecione', 'Mamografia', 'Papanicolau', 'PSA', 'Colesterol', 'Glicemia'] },
            { label: 'Data do último exame', type: 'date', name: 'data-exame', placeholder: '' },
            { label: 'Resultado anterior', type: 'textarea', name: 'resultado-anterior', placeholder: 'Anote o resultado anterior' },
            { label: 'Próxima data prevista', type: 'date', name: 'proxima-data', placeholder: '' }
        ]
    },
    hipertensao: {
        titulo: 'Linha de cuidado: Hipertensão Arterial',
        descricao: 'Registro de informações clínicas e acompanhamento do paciente com hipertensão.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Idade', type: 'number', name: 'idade', placeholder: 'Idade' },
            { label: 'Data de diagnóstico', type: 'date', name: 'diagnostico', placeholder: '' },
            { label: 'Está em acompanhamento médico?', type: 'select', name: 'acompanhamento', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Faz uso de medicamentos contínuos?', type: 'select', name: 'medicamentos', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Principais medicamentos', type: 'textarea', name: 'medicamentos-principais', placeholder: 'Descreva os medicamentos utilizados' },
            { label: 'Patologias associadas', type: 'checkboxes', name: 'patologias', options: ['Diabetes Mellitus', 'Cardiopatias', 'Vasculopatias', 'Retinopatias', 'Neuropatias', 'Nefropatias'] },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    diabetes: {
        titulo: 'Linha de cuidado: Diabetes',
        descricao: 'Registro de controle glicêmico, medicação e hábitos de vida do paciente.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Tipo de Diabetes', type: 'select', name: 'tipo-diabetes', options: ['Selecione', 'Tipo 1', 'Tipo 2', 'Gestacional'] },
            { label: 'Último HbA1c', type: 'text', name: 'hba1c', placeholder: 'Ex: 7,2%' },
            { label: 'Usa insulina?', type: 'select', name: 'insulina', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Faz acompanhamento nutricional?', type: 'select', name: 'nutricao', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    gestante: {
        titulo: 'Linha de cuidado: Gestante',
        descricao: 'Ficha de acompanhamento gestacional e monitoramento pré-natal.',
        campos: [
            { label: 'Nome da gestante', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Idade gestacional (semanas)', type: 'number', name: 'idade-gestacional', placeholder: 'Semanas' },
            { label: 'Data prevista para parto', type: 'date', name: 'parto', placeholder: '' },
            { label: 'Acompanhamento pré-natal', type: 'select', name: 'prenatal', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Exames realizados', type: 'textarea', name: 'exames', placeholder: 'Descreva os exames realizados' }
        ]
    },
    'saude-mental': {
        titulo: 'Linha de cuidado: Saúde Mental',
        descricao: 'Registro de atendimentos e suporte psicológico para o paciente.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Sintomas principais', type: 'textarea', name: 'sintomas', placeholder: 'Descreva os sintomas' },
            { label: 'Em acompanhamento psicológico?', type: 'select', name: 'psicologico', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Medicamentos em uso', type: 'textarea', name: 'medicamentos', placeholder: 'Descreva os medicamentos' }
        ]
    },
    mama: {
        titulo: 'Linha de cuidado: Câncer de Mama',
        descricao: 'Ficha de avaliação e acompanhamento do paciente com câncer de mama.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Data do diagnóstico', type: 'date', name: 'diagnostico', placeholder: '' },
            { label: 'Tipo de tratamento', type: 'textarea', name: 'tratamento', placeholder: 'Descreva o tratamento em andamento' },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    colo: {
        titulo: 'Linha de cuidado: Câncer de Colo de Útero',
        descricao: 'Ficha de acompanhamento para pacientes com câncer de colo de útero.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Estágio do tratamento', type: 'select', name: 'estagio', options: ['Selecione', 'Início', 'Meio', 'Finalização'] },
            { label: 'Último exame realizado', type: 'date', name: 'ultimo-exame', placeholder: '' },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    prostata: {
        titulo: 'Linha de cuidado: Câncer de Próstata',
        descricao: 'Ficha de acompanhamento para pacientes com câncer de próstata.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'PSA mais recente', type: 'text', name: 'psa', placeholder: 'Valor do PSA' },
            { label: 'Acompanhamento urológico', type: 'select', name: 'urologico', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    HAS: {
        titulo: 'Linha de cuidado: HAS',
        descricao: 'Formulário de acompanhamento para pacientes com hipertensão arterial sistêmica.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Pressão arterial média', type: 'text', name: 'pressao', placeholder: 'Ex: 130/80' },
            { label: 'Uso de medicação', type: 'select', name: 'medicacao', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    DM: {
        titulo: 'Linha de cuidado: DM',
        descricao: 'Ficha de acompanhamento para pacientes com diabetes mellitus.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Complicações associadas', type: 'textarea', name: 'complicacoes', placeholder: 'Descreva complicações' },
            { label: 'Último acompanhamento', type: 'date', name: 'acompanhamento', placeholder: '' },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    borboletas: {
        titulo: 'Linha de cuidado: Borboletas',
        descricao: 'Ficha de acompanhamento para pacientes especiais da linha Borboletas.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Acompanhamento atual', type: 'textarea', name: 'acompanhamento', placeholder: 'Descreva o acompanhamento' },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    }
};

function ativarAba(aba) {
    document.querySelectorAll('.aba').forEach(item => {
        item.classList.remove('active');
    });
    aba.classList.add('active');
}

function renderFormularioData(formularioData, key) {
    const container = document.getElementById('formulario');

    if (!formularioData) {
        container.innerHTML = '<div class="formulario"><h2>Formulário não disponível</h2><p>Selecione uma opção válida.</p></div>';
        return;
    }

    const camposHTML = formularioData.campos.map(campo => {
        switch (campo.type) {
            case 'textarea':
                return `<div class="campo"><label for="${campo.name}">${campo.label}</label><textarea id="${campo.name}" name="${campo.name}" placeholder="${campo.placeholder}"></textarea></div>`;
            case 'select':
                return `<div class="campo"><label for="${campo.name}">${campo.label}</label><select id="${campo.name}" name="${campo.name}">${campo.options.map(option => `<option value="${option}">${option}</option>`).join('')}</select></div>`;
            case 'checkboxes':
                return `<div class="campo"><label>${campo.label}</label><div class="checkbox-group">${campo.options.map(option => `<label><input type="checkbox" name="${campo.name}" value="${option}">${option}</label>`).join('')}</div></div>`;
            default:
                return `<div class="campo"><label for="${campo.name}">${campo.label}</label><input type="${campo.type}" id="${campo.name}" name="${campo.name}" placeholder="${campo.placeholder}"></div>`;
        }
    }).join('');

    container.innerHTML = `
        <div class="formulario">
            <h2>${formularioData.titulo}</h2>
            <p>${formularioData.descricao}</p>
            ${camposHTML}
            <button class="salvar" type="button" onclick="salvarFormulario('${key}')">Salvar</button>
        </div>
    `;
}

function abrirFormulario(formulario, aba) {
    ativarAba(aba);
    renderFormularioData(formularios[formulario], formulario);
}

function abrirPrograma(programa, botao) {
    document.querySelectorAll('.menu-link').forEach(item => item.classList.remove('active'));
    botao.classList.add('active');

    const abas = document.querySelector('.abas');
    if (programa === 'programa-de-rastreio') {
        abas.classList.add('hidden');
        renderFormularioData(formularios.rastreio, 'rastreio');
    } else {
        abas.classList.remove('hidden');
        const abaAtiva = document.querySelector('.aba.active') || document.querySelector('.aba');
        if (abaAtiva) {
            abrirFormulario(abaAtiva.dataset.formulario, abaAtiva);
        }
    }
}

function salvarFormulario(formulario) {
    const formElement = document.querySelector('#formulario .formulario');
    const inputs = formElement.querySelectorAll('input, select, textarea');
    const dados = {};

    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (!dados[input.name]) {
                dados[input.name] = [];
            }
            if (input.checked) {
                dados[input.name].push(input.value);
            }
        } else {
            dados[input.name] = input.value;
        }
    });

    console.log(`Dados salvos para ${formulario}:`, dados);
    alert('Dados salvos localmente no console do navegador.');
}

document.addEventListener('DOMContentLoaded', function () {
    const programaAtivo = document.querySelector('.menu-link.active');
    if (programaAtivo) {
        abrirPrograma(programaAtivo.dataset.programa, programaAtivo);
    }
});