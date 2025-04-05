const TestFramework = require('./framework');

TestFramework.test("Deve validar nome completo não vazio", function() {
    const nome = "Ana Layza";
    TestFramework.assertTrue(nome.trim().length > 0, "Nome não pode estar vazio");
});

TestFramework.test("Deve rejeitar nome com menos de 5 caracteres", function() {
    const nome = "Ana";
    TestFramework.assertFalse(nome.length >= 5, "Nome curto aceito incorretamente");
});

TestFramework.test("Deve falhar se o nome for vazio", function() {
    const nome = "";
    TestFramework.assertFalse(nome.trim().length > 0, "Nome vazio aceito incorretamente");
});

TestFramework.test("Deve validar CPF válido (formato XXX.XXX.XXX-XX)", function() {
    const cpf = "123.456.789-00";
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    TestFramework.assertTrue(regex.test(cpf), "CPF em formato inválido");
});

TestFramework.test("Deve validar RG válido (formato XX.XXX.XXX-X)", function() {
    const rg = "12.345.678-9";
    const regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
    TestFramework.assertTrue(regex.test(rg), "RG inválido");
});

TestFramework.test("Deve rejeitar CPF com dígitos iguais", function() {
    const cpf = "111.111.111-11";
    const numeros = cpf.replace(/\D/g, '');
    const todosIguais = /^(\d)\1+$/.test(numeros);
    TestFramework.assertTrue(todosIguais, "CPF inválido (dígitos iguais) aceito incorretamente");
});

TestFramework.test("Deve validar e-mail válido", function() {
    const email = "ana@empresa.com";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    TestFramework.assertTrue(regex.test(email), "E-mail inválido");
});

TestFramework.test("Deve validar telefone válido", function() {
    const telefone = "(83) 91234-5678";
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    TestFramework.assertTrue(regex.test(telefone), "Telefone inválido");
});

TestFramework.test("Salário deve ser maior que zero", function () {
    const salario = 1500;
    TestFramework.assertGreaterThan(salario, 0);
});

TestFramework.test("Data de admissão deve ser maior que data de nascimento", function () {
    const nascimento = new Date("2000-01-01");
    const admissao = new Date("2020-01-01");
    TestFramework.assertGreaterThan(admissao.getTime(), nascimento.getTime());
});

TestFramework.test("Data de nascimento deve validar idade mínima de 18 anos", function() {
    const nascimento = new Date();
    nascimento.setFullYear(nascimento.getFullYear() - 17); 
    const idade = new Date().getFullYear() - nascimento.getFullYear();
    TestFramework.assertFalse(idade >= 18, "Idade menor que 18 aceita incorretamente");
});

TestFramework.test("Cargo selecionado deve estar entre os válidos", function () {
    const cargo = "analista";
    const cargosValidos = ["gerente", "analista", "assistente", "estagiario"];
    TestFramework.assertInArray(cargo, cargosValidos);
});

TestFramework.test("Deve validar CEP no formato correto", function() {
    const cep = "58000-000";
    const regex = /^\d{5}-\d{3}$/;
    TestFramework.assertTrue(regex.test(cep), "CEP inválido");
});

TestFramework.test("Deve validar número de dependentes como número não negativo", function() {
    const dependentes = 2;
    TestFramework.assertGreaterThanOrEqual(dependentes, 0, "Número de dependentes inválido");
});

TestFramework.test("Salário igual a zero deve ser inválido", function() {
    const salario = 0;
    TestFramework.assertFalse(salario > 0, "Salário zero foi aceito como válido");
});

TestFramework.test("Salário menor que o mínimo deve ser inválido", function () {
    const salario = 1000;
    TestFramework.assertFalse(salario >= 1518, "Salário menor que o mínimo foi aceito");
});

TestFramework.test("Endereço deve ter no mínimo 10 caracteres", function() {
    const endereco = "Rua X";
    TestFramework.assertFalse(endereco.length >= 10, "Endereço curto aceito incorretamente");
});

TestFramework.runTests();
