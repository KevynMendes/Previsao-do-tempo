var dadosCidades = {
    'rio-de-janeiro': {
        nome: 'Rio de Janeiro-RJ',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '28°C', condicao: 'Ensolarado ☀️', umidade: '70%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '27°C', condicao: 'Nublado 🌥️', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '26°C', condicao: 'Chuva 🌧️', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '26°C', condicao: 'Chuva 🌧️', umidade: '85%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '27°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '28°C', condicao: 'Ensolarado ☀️', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '29°C', condicao: 'Ensolarado ☀️', umidade: '70%', velocidadeVento: '10 km/h' }
        ]
    },
    'sao-paulo': {
        nome: 'São Paulo-SP',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '23°C', condicao: 'Nublado 🌥️', umidade: '65%', velocidadeVento: '12 km/h' },
            { dia: 'Terça-feira', temperatura: '22°C', condicao: 'Chuva 🌧️', umidade: '70%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '21°C', condicao: 'Chuva 🌧️', umidade: '75%', velocidadeVento: '18 km/h' },
            { dia: 'Quinta-feira', temperatura: '22°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sexta-feira', temperatura: '23°C', condicao: 'Nublado 🌥️', umidade: '75%', velocidadeVento: '18 km/h' },
            { dia: 'Sábado', temperatura: '24°C', condicao: 'Nublado 🌥️', umidade: '70%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '25°C', condicao: 'Ensolarado ☀️', umidade: '65%', velocidadeVento: '12 km/h' }
        ]
    },
    'brasilia': {
        nome: 'Brasília-DF',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '32°C', condicao: 'Ensolarado ☀️', umidade: '40%', velocidadeVento: '15 km/h' },
            { dia: 'Terça-feira', temperatura: '33°C', condicao: 'Ensolarado ☀️', umidade: '35%', velocidadeVento: '20 km/h' },
            { dia: 'Quarta-feira', temperatura: '34°C', condicao: 'Ensolarado ☀️', umidade: '30%', velocidadeVento: '25 km/h' },
            { dia: 'Quinta-feira', temperatura: '33°C', condicao: 'Nublado 🌥️', umidade: '35%', velocidadeVento: '20 km/h' },
            { dia: 'Sexta-feira', temperatura: '32°C', condicao: 'Nublado 🌥️', umidade: '40%', velocidadeVento: '15 km/h' },
            { dia: 'Sábado', temperatura: '31°C', condicao: 'Nublado 🌥️', umidade: '45%', velocidadeVento: '12 km/h' },
            { dia: 'Domingo', temperatura: '30°C', condicao: 'Chuva 🌧️', umidade: '50%', velocidadeVento: '10 km/h' }
        ]
    },
    'salvador': {
        nome: 'Salvador-BA',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '30°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '31°C', condicao: 'Chuva 🌧️', umidade: '85%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '32°C', condicao: 'Chuva 🌧️', umidade: '90%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '31°C', condicao: 'Chuva 🌧️', umidade: '85%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '30°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '29°C', condicao: 'Ensolarado ☀️', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '28°C', condicao: 'Ensolarado ☀️', umidade: '70%', velocidadeVento: '12 km/h' }
        ]
    },
    'vitoria': {
        nome: 'Vitória-ES',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '27°C', condicao: 'Ensolarado ☀️', umidade: '75%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '26°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '25°C', condicao: 'Nublado 🌥️', umidade: '85%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '25°C', condicao: 'Chuva 🌧️', umidade: '90%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '26°C', condicao: 'Chuva 🌧️', umidade: '85%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '27°C', condicao: 'Nublado 🌥️', umidade: '80%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '29°C', condicao: 'Ensolarado ☀️', umidade: '75%', velocidadeVento: '10 km/h' }
        ]
    }
};

var previsoes = {
    'rio-de-janeiro': {
        nome: 'Rio de Janeiro',
        previsao: 'Previsão do tempo para o Rio de Janeiro...'
    },
    'sao-paulo': {
        nome: 'São Paulo',
        previsao: 'Previsão do tempo para São Paulo...'
    },
    'brasilia': {
        nome: 'Brasília',
        previsao: 'Previsão do tempo para Brasília...'
    },
    'salvador': {
        nome: 'Salvador',
        previsao: 'Previsão do tempo para Salvador...'
    },
    'vitoria': {
        nome: 'Vitoria',
        previsao: 'Previsão do tempo para o Espírito Santo...'
    }
};

function buscarPrevisaoDoTempo(cidade) {
    exibirDadosCidade(cidade);
}

var cityOptions = document.querySelectorAll('.city-option');
cityOptions.forEach(function(cityOption) {
    cityOption.addEventListener('click', function() {
        var cidadeSelecionada = this.getAttribute('data-city');
        buscarPrevisaoDoTempo(cidadeSelecionada);
    });
});

function exibirDadosCidade(cidade) {
    var dados = dadosCidades[cidade];
    var cityName = dados.nome;

    var cityInfoDiv = document.getElementById('cityInfo');
    var weatherDataDiv = document.getElementById('weatherData');

    cityInfoDiv.innerHTML = '<h2> Previsão do tempo para ' + cityName + '</h2>';

    var previsoesHtml = '';
    dados.previsoes.forEach(function(previsao) {
        previsoesHtml += '<div class="weather-item">';
        previsoesHtml += '<h3>' + previsao.dia + '</h3>';
        previsoesHtml += '<p>Temperatura: ' + previsao.temperatura + '</p>';
        previsoesHtml += '<p>Condição: ' + previsao.condicao + '</p>';
        previsoesHtml += '<p>Umidade: ' + previsao.umidade + '</p>';
        previsoesHtml += '<p>Vento: ' + previsao.velocidadeVento + '</p>';
        previsoesHtml += '</div>';
    });

    weatherDataDiv.innerHTML = previsoesHtml;
}

let slideIndex = 0;
showSlides();

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } 
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}


setInterval(nextSlide, 8000);

