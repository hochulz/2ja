"use strict"

const gridData = [
    {
        rank: '1',
        bank: "    OK저축은행                  ",
        product: 'OK세컨드통장',
        rate: '연 3.5% (기본 3.0% + 우대 0.5%)',
        condition: '오픈뱅킹에  OK세컨드통장 등록',
        cap: '1천만원',
        paymentDate: '매 월 셋째 주 토요일 다음날',
        method: '비대면, 영업점'
    }
];

const grid = new tui.Grid({
el: document.getElementById('grid'),
data: gridData,
scrollX: false,
scrollY: false,
columnOptions: {
    minWidth: 50
},
columns: [
    {
        header: '순위',
        name: 'rank',
        minWidth: 50,
        whiteSpace: "normal",
        width: 'auto',
        align: 'center'
    },
    {
        header: '은행명',
        name: 'bank',
        whiteSpace: "normal",
        minWidth: 150,
        width: 'auto'
    },
    {
        header: '상품명',
        name: 'product',
        whiteSpace: "normal",
        //width: 'auto'
    },
    {
        header: '최고금리 (세전)',
        name: 'rate',
        align: 'center',
        width: 'auto'
        //sortable: true,
        //sortingType: 'desc'
    },
    {
        header: '우대조건',
        name: 'condition',
        whiteSpace: "normal",
        width: 'auto'
        //whiteSpace: "normal"
        // sortable: true,
        // sortingType: 'desc'
    },
    {
        header: '최고금리 적용 예치금 한도',
        name: 'cap',
        align: 'center',
        whiteSpace: "normal",
        width: 'auto',
        minWidth: 180
    },
    {
        header: '이자 지급시기',
        name: 'paymentDate',
        whiteSpace: "normal",
        width: 'auto',
        minWidth: 200,
        align: 'center'
    },
    {
        header: '가입방법',
        name: 'method',
        whiteSpace: "normal",
        width: 'auto',
        minWidth: 100
    }
],
// columnOptions: {
//     frozenCount: 1, // Freeze 3 left most columns and 
//     frozenBorderWidth: 2 // set the border width of frozen columns to be 2px.
// }
});

tui.Grid.applyTheme('striped');
