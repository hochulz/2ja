"use strict"

const gridData = [
    {
        bank: "웰컴저축은행",
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: "웰컴저축은행",
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    },
    {
        bank: '웰컴저축은행',
        product: 'WELCOME 직장인사랑 보통예금',
        rate: '연 3.5%',
        cap: '1억원',
        payment_date: '매월 1일'
    }
];

const grid = new tui.Grid({
el: document.getElementById('grid'),
data: gridData,
scrollX: false,
scrollY: false,
columns: [
    {
        header: '금융사',
        name: 'bank',
        whiteSpace: "normal"
    },
    {
        header: '파킹통장',
        name: 'product',
        whiteSpace: "normal"
    },
    {
        header: '최고금리',
        name: 'rate',
        sortable: true,
        sortingType: 'desc'
    },
    {
        header: '최고금리 적용 예치금 한도',
        name: 'cap'
    },
    {
        header: '이자 지급일',
        name: 'payment_date'
    }
],
columnOptions: {
    frozenCount: 1, // Freeze 3 left most columns and 
    frozenBorderWidth: 2 // set the border width of frozen columns to be 2px.
}
});

tui.Grid.applyTheme('striped');
