// Dados de cada cidade //

var dadosCidades = {
    'rio-de-janeiro': {
        nome: 'Rio de Janeiro',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '28°C', condicao: 'Ensolarado', umidade: '70%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '27°C', condicao: 'Nublado', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '26°C', condicao: 'Chuva', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '26°C', condicao: 'Chuva', umidade: '85%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '27°C', condicao: 'Parcialmente nublado', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '28°C', condicao: 'Ensolarado', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '29°C', condicao: 'Ensolarado', umidade: '70%', velocidadeVento: '10 km/h' }
        ]
    },
    'sao-paulo': {
        nome: 'São Paulo',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '23°C', condicao: 'Parcialmente nublado', umidade: '65%', velocidadeVento: '12 km/h' },
            { dia: 'Terça-feira', temperatura: '22°C', condicao: 'Chuva', umidade: '70%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '21°C', condicao: 'Chuva', umidade: '75%', velocidadeVento: '18 km/h' },
            { dia: 'Quinta-feira', temperatura: '22°C', condicao: 'Nublado', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sexta-feira', temperatura: '23°C', condicao: 'Nublado', umidade: '75%', velocidadeVento: '18 km/h' },
            { dia: 'Sábado', temperatura: '24°C', condicao: 'Parcialmente nublado', umidade: '70%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '25°C', condicao: 'Ensolarado', umidade: '65%', velocidadeVento: '12 km/h' }
        ]
    },
    'brasilia': {
        nome: 'Brasília',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '32°C', condicao: 'Ensolarado', umidade: '40%', velocidadeVento: '15 km/h' },
            { dia: 'Terça-feira', temperatura: '33°C', condicao: 'Ensolarado', umidade: '35%', velocidadeVento: '20 km/h' },
            { dia: 'Quarta-feira', temperatura: '34°C', condicao: 'Ensolarado', umidade: '30%', velocidadeVento: '25 km/h' },
            { dia: 'Quinta-feira', temperatura: '33°C', condicao: 'Parcialmente nublado', umidade: '35%', velocidadeVento: '20 km/h' },
            { dia: 'Sexta-feira', temperatura: '32°C', condicao: 'Parcialmente nublado', umidade: '40%', velocidadeVento: '15 km/h' },
            { dia: 'Sábado', temperatura: '31°C', condicao: 'Nublado', umidade: '45%', velocidadeVento: '12 km/h' },
            { dia: 'Domingo', temperatura: '30°C', condicao: 'Chuva', umidade: '50%', velocidadeVento: '10 km/h' }
        ]
    },
    'salvador': {
        nome: 'Salvador',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '30°C', condicao: 'Parcialmente nublado', umidade: '80%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '31°C', condicao: 'Chuva', umidade: '85%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '32°C', condicao: 'Chuva', umidade: '90%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '31°C', condicao: 'Chuva', umidade: '85%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '30°C', condicao: 'Parcialmente nublado', umidade: '80%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '29°C', condicao: 'Ensolarado', umidade: '75%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '28°C', condicao: 'Ensolarado', umidade: '70%', velocidadeVento: '12 km/h' }
        ]
    },
    'vitoria': {
        nome: 'vitoria',
        previsoes: [
            { dia: 'Segunda-feira', temperatura: '27°C', condicao: 'Ensolarado', umidade: '75%', velocidadeVento: '10 km/h' },
            { dia: 'Terça-feira', temperatura: '26°C', condicao: 'Parcialmente nublado', umidade: '80%', velocidadeVento: '15 km/h' },
            { dia: 'Quarta-feira', temperatura: '25°C', condicao: 'Nublado', umidade: '85%', velocidadeVento: '20 km/h' },
            { dia: 'Quinta-feira', temperatura: '25°C', condicao: 'Chuva', umidade: '90%', velocidadeVento: '25 km/h' },
            { dia: 'Sexta-feira', temperatura: '26°C', condicao: 'Chuva', umidade: '85%', velocidadeVento: '20 km/h' },
            { dia: 'Sábado', temperatura: '27°C', condicao: 'Nublado', umidade: '80%', velocidadeVento: '15 km/h' },
            { dia: 'Domingo', temperatura: '28°C', condicao: 'Ensolarado', umidade: '75%', velocidadeVento: '10 km/h' }
        ]
    }
};
