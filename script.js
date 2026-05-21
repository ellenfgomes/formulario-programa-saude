const formularios = {
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
    'gestante-lactante': {
        titulo: 'Linha de cuidado: Gestante/Lactante',
        descricao: 'Ficha de acompanhamento para gestantes e lactantes.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Idade gestacional (semanas)', type: 'number', name: 'idade-gestacional', placeholder: 'Semanas' },
            { label: 'Está em acompanhamento pré-natal?', type: 'select', name: 'prenatal', options: ['Selecione', 'Sim', 'Não'] },
            { label: 'Observações', type: 'textarea', name: 'observacoes', placeholder: 'Informações adicionais' }
        ]
    },
    borboletas: {
        titulo: 'Formulário FRIDA - Avaliação de Risco em Violência Doméstica',
        descricao: 'Formulário de Avaliação de Risco em Violência Doméstica e Familiar contra a Mulher.',
        campos: [
            { label: 'Nome da usuária', type: 'text', name: 'nome-usuario', placeholder: 'Digite o nome completo' },
            { label: 'Data do atendimento', type: 'date', name: 'data-atendimento', placeholder: '' },
            { type: 'table', name: 'frida-table', perguntas: [
                { id: 'p1', texto: 'A violência vem aumentando de gravidade e/ou de frequência no último mês?' },
                { id: 'p2', texto: 'A senhora/você está grávida ou teve bebê nos últimos 18 meses?' },
                { id: 'p3', texto: 'A senhora/você tem filhos(as) com o(a) agressor(a)? (Caso não tenham filhos em comum, o registro não se aplica.) Em caso afirmativo, estão vivendo algum conflito com relação à guarda dos filhos, visitas ou pagamento de pensão pelo agressor?' },
                { id: 'p4', texto: 'O(A) agressor(a) persegue a senhora/você, demonstra ciúme excessivo, tenta controlar sua vida e as coisas que você faz?' },
                { id: 'p5', texto: 'A senhora/você se separou recentemente do(a) agressor(a), tentou ou tem intenção de se separar?' },
                { id: 'p6', texto: 'O(A) agressor(a) também é violento com outras pessoas?' },
                { id: 'p7', texto: 'A senhora/você possui algum animal doméstico? Em caso afirmativo, o(a) agressor(a) maltrata ou agride o animal?' },
                { id: 'p8', texto: 'O(A) agressor(a) já a agrediu fisicamente outras vezes?' },
                { id: 'p9', texto: 'Alguma vez o(a) agressor(a) tentou estrangular, sufocar ou afogar a senhora/você?' },
                { id: 'p10', texto: 'O(A) agressor(a) já fez ameaças de morte ou tentou matar a senhora/você?' },
                { id: 'p11', texto: 'O(A) agressor(a) já usou, ameaçou usar arma de fogo contra a senhora/você ou tem fácil acesso a uma arma?' },
                { id: 'p12', texto: 'O(A) agressor(a) já ameaçou ou feriu com outro tipo de arma ou instrumento?' },
                { id: 'p13', texto: 'A senhora/você necessitou de atendimento médico e/ou internação após algumas dessas agressões?' },
                { id: 'p14', texto: 'O(A) agressor(a) é usuário de drogas e/ou bebidas alcoólicas?' },
                { id: 'p15', texto: 'O(A) agressor(a) faz uso de medicação controlada para alguma doença mental/psiquiátrica?' },
                { id: 'p16', texto: 'A senhora/você já teve ou tem medida protetiva de urgência?' },
                { id: 'p17', texto: 'O(A) agressor(a) já descumpriu medida protetiva de afastamento ou proibição de contato?' },
                { id: 'p18', texto: 'O(A) agressor(a) já ameaçou ou tentou se matar alguma vez?' },
                { id: 'p19', texto: 'O(A) agressor(a) já obrigou a senhora/você a ter relações sexuais contra sua vontade?' },
                { id: 'p20', texto: 'O(A) agressor(a) está com dificuldades financeiras, desempregado ou tem dificuldade de se manter no emprego?' }
            ]},
            { label: 'Percepção de risco da mulher', type: 'textarea', name: 'percepcao-risco', placeholder: 'Descreva a percepção de risco' },
            { label: 'Informações adicionais relevantes', type: 'textarea', name: 'info-adicionais', placeholder: 'Informações complementares' },
            { label: 'Condições físicas e emocionais', type: 'textarea', name: 'condicoes-fisico-emocionais', placeholder: 'Descreva as condições' },
            { label: 'Encaminhamentos sugeridos', type: 'textarea', name: 'encaminhamentos', placeholder: 'Encaminhamentos' },
            { label: 'Nível de risco', type: 'select', name: 'nivel-risco', options: ['Selecione', 'Baixo', 'Médio', 'Elevado'] },
            { label: 'Nome do profissional', type: 'text', name: 'prof-nome', placeholder: 'Digite o nome completo' },
            { label: 'Cargo/Função', type: 'text', name: 'prof-cargo', placeholder: 'Cargo ou função' },
            { label: 'Serviço/Órgão', type: 'text', name: 'prof-servico', placeholder: 'Serviço ou órgão' },
            { label: 'Data de preenchimento', type: 'date', name: 'data-preenchimento', placeholder: '' }
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
    corretal: {
        titulo: 'Linha de cuidado: Câncer Corretal',
        descricao: 'Ficha de acompanhamento para pacientes com câncer corretal.',
        campos: [
            { label: 'Nome do paciente', type: 'text', name: 'nome', placeholder: 'Digite o nome completo' },
            { label: 'Último exame realizado', type: 'date', name: 'ultimo-exame', placeholder: '' },
            { label: 'Tipo de tratamento', type: 'textarea', name: 'tratamento', placeholder: 'Descreva o tratamento em andamento' },
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
    const container = document.getElementById('programa-form');

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
            case 'table':
                const tabelaHTML = `<div class="tabela">
                    <table class="frida-table">
                        <thead>
                            <tr>
                                <th class="pergunta-col">Perguntas</th>
                                <th>Sim</th>
                                <th>Não</th>
                                <th>Não sabe</th>
                                <th>Não se aplica</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${campo.perguntas.map(pergunta => `
                                <tr>
                                    <td>${pergunta.texto}</td>
                                    <td><input type="radio" name="${pergunta.id}" value="sim"></td>
                                    <td><input type="radio" name="${pergunta.id}" value="nao"></td>
                                    <td><input type="radio" name="${pergunta.id}" value="nao-sabe"></td>
                                    <td><input type="radio" name="${pergunta.id}" value="nao-aplica"></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>`;
                return tabelaHTML;
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

function abrirFormulario(formulario, abaButton = null) {
    if (abaButton) {
        document.querySelectorAll('.aba').forEach(item => item.classList.remove('active'));
        abaButton.classList.add('active');
    }

    renderFormularioData(formularios[formulario], formulario);
}

const programTabs = {
    'formulario-de-entrada': [],
    'linha-de-cuidados': [
        { key: 'HAS', label: 'HAS' },
        { key: 'DM', label: 'DM' },
        { key: 'gestante-lactante', label: 'Gestante/Lactante' },
        { key: 'borboletas', label: 'Borboletas' },
        { key: 'saude-mental', label: 'Saúde Mental' }
    ],
    'programa-de-rastreio': [
        { key: 'mama', label: 'CA Mama' },
        { key: 'colo', label: 'CA Colo Útero' },
        { key: 'prostata', label: 'CA Próstata' },
        { key: 'corretal', label: 'CA Corretal' }
    ]
};

function renderAbas(programa) {
    const select = document.getElementById('abas-select');
    const tabs = programTabs[programa] || [];

    select.innerHTML = '';

    if (tabs.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Selecione Linha de Cuidado ou Programa de Rastreio';
        select.appendChild(option);
        select.disabled = true;
        return;
    }

    select.disabled = false;

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecione a linha de cuidado ou programa de rastreio';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    tabs.forEach(tab => {
        const option = document.createElement('option');
        option.value = tab.key;
        option.textContent = tab.label;
        select.appendChild(option);
    });
}

function abrirPrograma(programa, botao) {
    document.querySelectorAll('.menu-link').forEach(item => item.classList.remove('active'));
    botao.classList.add('active');

    renderAbas(programa);
    document.getElementById('programa-form').innerHTML = '';
}

function abrirFormulario(formulario, abaButton = null) {
    if (!formulario) {
        document.getElementById('programa-form').innerHTML = '';
        return;
    }

    renderFormularioData(formularios[formulario], formulario);
}

function salvarFormulario(formulario) {
    const formElement = document.querySelector('.form-card');
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

function setTheme(mode) {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = mode === 'dark' ? '🌙' : '☀️';
    }
    localStorage.setItem('theme', mode);
}

function toggleTheme() {
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    setTheme(currentMode === 'dark' ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const programaAtivo = document.querySelector('.menu-link.active');
    if (programaAtivo) {
        abrirPrograma(programaAtivo.dataset.programa, programaAtivo);
    }
});