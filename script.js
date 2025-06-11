document.addEventListener('DOMContentLoaded', function() {
    // Encontra os elementos no HTML e guarda-os em variáveis para uso posterior.
    const calcularBtn = document.getElementById('calcularBtn');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');
    const alertBox = document.querySelector('.bg-slate-100');
    const closeButton = alertBox.querySelector('svg');

    // --- FUNCIONALIDADE 1: A MÁSCARA AUTOMÁTICA PARA O CAMPO 'ALTURA' ---
    alturaInput.addEventListener('input', function(e) {
        const numeros = e.target.value.replace(/[^0-9]/g, '');
        let valorFormatado;
        if (numeros.length < 2) {
            valorFormatado = numeros;
        } else {
            valorFormatado = numeros.substring(0, 1) + ',' + numeros.substring(1, 3);
        }
        e.target.value = valorFormatado;
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const pesoInput = document.getElementById('peso');
    
        pesoInput.addEventListener('input', function() {
            const valor = parseFloat(pesoInput.value);
            if (valor > 650) {
                pesoInput.value = 650; // Limita o valor ao máximo permitido
            }
        });
    });

    // --- FUNCIONALIDADE 2: O CÁLCULO DO IMC E EXIBIÇÃO DA CAIXA ---
    calcularBtn.addEventListener('click', function() {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value.replace(',', '.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        } else {
            const imc = peso / (altura * altura);
            let classificacao = '';

            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
            } else {
                classificacao = 'Obesidade';
            }

            resultadoDiv.innerHTML = `O seu IMC é <b>${imc.toFixed(2)}</b>, o que se encaixa na categoria <b>${classificacao}</b>`;
        }

        alertBox.classList.remove('hidden');
    });

    // --- FUNCIONALIDADE 3: FECHAR A CAIXA DE ALERTA ---
    closeButton.addEventListener('click', function() {
        alertBox.classList.add('hidden');
    });
});