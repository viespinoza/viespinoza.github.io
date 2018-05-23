jQuery(document).ready(function(){

var chart = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            ['Information', 11],
            ['Dialogue', 24],
            ['Consultations', 16],
            ['Collaboration', 19],
            ['Partnership', 30],

        ],
        type : 'donut'
    },
    donut: {
        title: "Overall IDB Group",
    }
});

var chart = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            ['Information', 6],
            ['Dialogue', 22],
            ['Consultations', 6],
            ['Collaboration', 31],
            ['Partnership', 33],

        ],
        type : 'donut'
    },
    donut: {
        title: "CAN Region",
    }
});

var chart = c3.generate({
    bindto: '#chart3',
    data: {
        columns: [
            ['Information', 13],
            ['Dialogue', 28],
            ['Consultations', 31],
            ['Collaboration', 10],
            ['Partnership', 16],

        ],
        type : 'donut'
    },
    donut: {
        title: "CCB Region",
    }
});


var chart = c3.generate({
    bindto: '#chart4',
    data: {
        columns: [
            ['Information', 13],
            ['Dialogue', 28],
            ['Consultations', 31],
            ['Collaboration', 10],
            ['Partnership', 16],

        ],
        type : 'donut'
    },
    donut: {
        title: "CID Region",
    }
});

var chart = c3.generate({
    bindto: '#chart5',
    data: {
        columns: [
            ['Information', 5],
            ['Dialogue', 15],
            ['Consultations', 14],
            ['Collaboration', 19],
            ['Partnership', 47],

        ],
        type : 'donut'
    },
    donut: {
        title: "CSC Region",
    }
});



});    
