async function carregarDados(turma) {
    const spreadsheetId = '1sQI0fGEdmvHMJVBtg8HXZUX66SvQazzMyWQfaXifpDo';
    const sheetId = turma;
    const apiKey = 'AIzaSyBGN260J826XGrC_mEdxT8lPS1l3k7xEVI';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetId}?key=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const valores = data.values;

        // Limpa a tabela antes de adicionar novos dados
        const tabela = document.getElementById('tabela-dados');
        tabela.innerHTML = '';

        // Loop pelos dados e adiciona-os à tabela HTML
        valores.forEach((linha, rowIndex) => {
            const row = tabela.insertRow();
            linha.forEach((celula, index) => {
                const cell = row.insertCell();
                if (index === 1 && rowIndex > 0) {
                    const link = document.createElement('a');
                    const text = celula.trim();
                    if (text === '') {
                        link.textContent = '======================='
                    } else {
                        link.textContent = text; //Texto do link (pode ser diferente do URL)
                    }
                    const url = "https://" + text;
                    link.href = url; //URL que está na célula
                    link.target = "_blank";


                    cell.appendChild(link);
                } else {
                    cell.textContent = celula;
                }
            });
        });
    } catch (error) {
        console.error('Erro ao carregar os dados da planilha:', error);
    }
}

// Carrega os dados quando a página é carregada
// window.onload = carregarDados;


document.addEventListener("DOMContentLoaded", function () {
    var url = window.location.pathname;
    if (url.includes("atividades-2a.html")) {
        carregarDados('2a');
    } else if (url.includes("atividades-2b.html")) {
        carregarDados('2b');
    }
});