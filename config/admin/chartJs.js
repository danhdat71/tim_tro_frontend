function getChartRound(data = []) {

    let labels = [];
    let datas = [];
    let backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ];

    for (let i = 0; i < data.length; i++) {
        labels.push(data[i].label);
        datas.push(data[i].value);
    }

    return {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: datas,
                backgroundColor: backgroundColor,
            },
        ],
    };
}

function getConfigChartNormal(title = '')
{
    return {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
}

export {
    getChartRound,
    getConfigChartNormal,
}