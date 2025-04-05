function clearError(id) {
    const el = document.getElementById(`error-${id}`);
    if (el) el.textContent = '';
}

function showError(id, message) {
    const el = document.getElementById(`error-${id}`);
    if (el) el.textContent = message;
}


export function clearAllErrors() {
    const errorFields = document.querySelectorAll('[id^="erro-"]');
    errorFields.forEach(el => el.textContent = '');
}

function validarNome() {
    const nome = document.getElementById('nome').value.trim();
    clearError('nome');

    if (nome === '') {
        showError('nome', 'O nome não pode estar vazio.');
        return false;
    }

    if (nome.length < 5) {
        showError('nome', 'O nome deve ter no mínimo 5 caracteres.');
        return false;
    }

    const partes = nome.split(" ");
    if (partes.length < 2 || partes.some(p => p.length === 0)) {
        showError('nome', 'Digite pelo menos um nome e um sobrenome.');
        return false;
    }

    return true;
}

function validarCPF() {
    const cpf = document.getElementById('cpf').value.trim();
    clearError('cpf');

    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regexCPF.test(cpf)) {
        showError('cpf', 'Formato de CPF inválido. Use XXX.XXX.XXX-XX');
        return false;
    }

    return true;
}

function validarRG() {
    const rg = document.getElementById('rg').value.trim();
    clearError('rg');

    const regexRG = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;

    if (!regexRG.test(rg)) {
        showError('rg', 'Formato de RG inválido. Use XX.XXX.XXX-X');
        return false;
    }

    return true;
}

function validarDataNascimento() {
    const dataNascimento = document.getElementById('dataNascimento').value;
    clearError('dataNascimento');

    if (!dataNascimento) {
        showError('dataNascimento', 'Informe a data de nascimento.');
        return false;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    if (nascimento >= hoje) {
        showError('dataNascimento', 'Data de nascimento deve ser no passado.');
        return false;
    }

    return true;
}


function validarEmail() {
    const email = document.getElementById('email').value.trim();
    clearError('email');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        showError('email', 'E-mail inválido.');
        return false;
    }

    return true;
}

function validarTelefone() {
    const telefone = document.getElementById('telefone').value.trim();
    clearError('telefone');

    const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    if (!regexTelefone.test(telefone)) {
        showError('telefone', 'Formato de telefone inválido. Use (XX) XXXXX-XXXX');
        return false;
    }

    return true;
}

function validarCargo() {
    const cargo = document.getElementById('cargo').value.trim();
    clearError('cargo');

    if (cargo === '') {
        showError('cargo', 'Informe o cargo.');
        return false;
    }

    return true;
}

function validarSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    clearError('salario');

    if (isNaN(salario) || salario <= 0) {
        showError('salario', 'Salário deve ser maior que zero.');
        return false;
    }

    return true;
}


function validarDataAdmissao() {
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    clearError('dataAdmissao');

    if (!dataAdmissao) {
        showError('dataAdmissao', 'Informe a data de admissão.');
        return false;
    }

    const admissao = new Date(dataAdmissao);
    const nascimento = new Date(dataNascimento);

    if (admissao <= nascimento) {
        showError('dataAdmissao', 'Data de admissão deve ser após a data de nascimento.');
        return false;
    }

    return true;
}

function validarEndereco() {
    const endereco = document.getElementById('endereco').value.trim();
    clearError('endereco');

    if (endereco === '') {
        showError('endereco', 'Informe o endereço.');
        return false;
    }

    return true;
}


function validarCEP() {
    const cep = document.getElementById('cep').value.trim();
    clearError('cep');

    const regexCEP = /^\d{5}-\d{3}$/;

    if (!regexCEP.test(cep)) {
        showError('cep', 'Formato de CEP inválido. Use XXXXX-XXX');
        return false;
    }

    return true;
}

function validarDependentes() {
    const dependentes = parseInt(document.getElementById('dependentes').value);
    clearError('dependentes');

    if (isNaN(dependentes) || dependentes < 0) {
        showError('dependentes', 'Número de dependentes inválido.');
        return false;
    }

    if (dependentes > 8) {
        showError('dependentes', 'O número máximo de dependentes é 8.');
        return false;
    }

    return true;
}

export function validateForm() {
    const validacoes = [
        validarNome(),
        validarCPF(),
        validarRG(),
        validarDataNascimento(),
        validarEmail(),
        validarTelefone(),
        validarCargo(),
        validarSalario(),
        validarDataAdmissao(),
        validarEndereco(),
        validarCEP(),
        validarDependentes()
    ];

    return validacoes.every(v => v === true);
}