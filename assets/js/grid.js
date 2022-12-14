"use strict"

const gridData = [
    {
        rank: '1',
        bank: "OK저축은행",
        product: 'OK세컨드통장&https://www.oksavingsbank.com/#/gdsDepsFrdmList?menuCd=00367',
        rate: '연 3.5%\n(기본금리 3.0% + 우대금리 0.5%)',
        condition: '오픈뱅킹에  OK세컨드통장 등록',
        cap: '1천만원',
        paymentDate: '매월 셋째 주 \n토요일 다음날',
        method: '비대면 또는\n영업점 방문'
    },
    {
        rank: '2',
        bank: "OK저축은행",
        product: 'OK비대면보통예금&https://www.oksavingsbank.com/#/gdsDepsFrdmList?menuCd=00367',
        rate: '연 3.3%\n(기본금리 3.3%)',
        condition: '해당사항 없음',
        cap: '1억원',
        paymentDate: '매월 셋째 주 \n토요일 다음날',
        method: '비대면'
    },
    {
        rank: '3',
        bank: "다올저축은행",
        product: 'Fi 저축예금&https://daolsb.com/deposit/goods.do?gds_cd=DC204&gds_clss_cd=DC',
        rate: '연 3.2%\n(기본금리 3.2%)',
        condition: '해당사항 없음',
        cap: '제한없음',
        paymentDate: '매분기 마지막 월\n 셋째주 토요일',
        method: '비대면\n(다올디지털뱅크 Fi)'
    },
    {
        rank: '4',
        bank: "SBI저축은행",
        product: '사이다뱅크 입출금통장&https://www.saidabank.co.kr/gds0020101.act',
        rate: '연 3.2%\n(기본금리 3.2%)',
        condition: '해당사항 없음',
        cap: '1억원',
        paymentDate: '익월 1일 ',
        method: '비대면'
    },
    {
        rank: '5',
        bank: "페퍼저축은행",
        product: '페퍼스 파킹통장&https://www.pepperbank.kr/product/deposite/view.pepper?prdSn=32',
        rate: '연 3.2%\n(기본금리 3.2%)',
        condition: '해당사항 없음',
        cap: '5천만원',
        paymentDate: '매분기 마지막 월\n 세번째 일요일',
        method: '비대면'
    },
    {
        rank: '6',
        bank: "하나저축은행",
        product: '하이하나 보통예금&https://www.hanasavings.com/NEW/NEW0108?Authorization=9eb293b5-f3a1-46f6-99ee-e16b23666567',
        rate: '연 3.4%\n(기본금리 2.4% + 우대금리 1.0%)',
        condition: '개인(신용)정보 수집/이용 제공동의 및 상품서비스 안내수단 전체 동의 시 0.3%\n당 계좌의 매월말 잔액 구간별로 차등 적용 (200만원 이상 시 0.6%)\n종이통장 없는 계좌 이용시 0.1%',
        cap: '제한없음',
        paymentDate: '매분기 마지막 월\n 세번째 금요일',
        method: '비대면 또는\n영업점 방문'
    },
    {
        rank: '7',
        bank: "케이뱅크",
        product: '플러스박스&https://www.kbanknow.com/ib20/mnu/FPMDPT130100?ib20_wc=FPMMAN0000000201V:FPMMAN0000000201V',
        rate: '연 2.5%\n(기본금리 2.5%)',
        condition: '해당사항 없음',
        cap: '3억원',
        paymentDate: '매월 넷째 주 \n토요일',
        method: '비대면'
    },
    {
        rank: '8',
        bank: "토스뱅크",
        product: '토스뱅크 통장&https://www.tossbank.com/product-service/savings/account',
        rate: '연 2.3%\n(기본금리 2.3%)',
        condition: '해당사항 없음',
        cap: '1억원',
        paymentDate: '매월 셋째 주 \n토요일\n(신청시 매일)',
        method: '비대면'
    },
    {
        rank: '9',
        bank: "KDB산업은행",
        product: 'KDB Hi 비대면 입출금통장&https://banking.kdb.co.kr/bp/index.jsp',
        rate: '연 2.25%\n(기본금리 2.25%)',
        condition: '해당사항 없음',
        cap: '제한없음',
        paymentDate: '매월 넷째 주 \n금요일 익일',
        method: '비대면'
    },
    {
        rank: '10',
        bank: "카카오뱅크",
        product: '세이프박스&https://www.kakaobank.com/products/safeboxes',
        rate: '연 2.2%\n(기본금리 2.2%)',
        condition: '해당사항 없음',
        cap: '제한없음',
        paymentDate: '매월 넷째 주 \n토요일',
        method: '비대면'
    }
];

class CustomLinkRenderer {
    constructor(props, test) {
      const el = document.createElement('a');
      var productName = String(props.value).split('&')[0];
      var linkText = document.createTextNode(productName);

      el.appendChild(linkText);
      el.title = "my title text";
      el.target = "_blank";
  
      document.body.appendChild(el);

      this.el = el;
      this.render(props);
    }

    getElement() {
      return this.el;
    }

    render(props) {
      this.el.href = String(props.value).split('&')[1];
    }

  }

const grid = new tui.Grid({
el: document.getElementById('grid'),
data: gridData,
scrollX: true,
scrollY: false,
rowHeight: 'auto',
// columnOptions: {
//     minWidth: 50
// },
columns: [
    {
        header: '순위',
        name: 'rank',
        minWidth: 40,
        //whiteSpace: "normal",
        width: 'auto',
        align: 'center'
    },
    {
        header: '금융사',
        name: 'bank',
        //whiteSpace: "normal",
        minWidth: 90,
        width: 'auto'
    },
    {
        header: '상품명',
        name: 'product',
        //whiteSpace: "normal",
        minWidth: 160,
        //maxWidth: 200,
        //width: 'auto',
        whiteSpace: 'pre-line',
        renderer: {
            type: CustomLinkRenderer
        }
    },
    {
        header: '최고금리 (세전)',
        name: 'rate',
        align: 'center',
        //width: 'auto',
        minWidth: 220,
        whiteSpace: 'pre-line'
        //sortable: true,
        //sortingType: 'desc'
    },
    {
        header: '우대조건',
        name: 'condition',
        //whiteSpace: "normal",
        //width: 'auto',
        whiteSpace: 'pre-line',
        minWidth: 240
        //whiteSpace: "normal"
        // sortable: true,
        // sortingType: 'desc'
    },
    {
        header: '최고금리 적용 예치금 한도',
        name: 'cap',
        align: 'center',
       // whiteSpace: "normal",
        width: 'auto',
        minWidth: 170
    },
    {
        header: '이자 지급시기',
        name: 'paymentDate',
        minWidth: 150,
        whiteSpace: 'pre-line',
        align: 'center'
    },
    {
        header: '가입방법',
        name: 'method',
        minWidth: 100,
        whiteSpace: 'pre-line',
        align: 'center'
    }
],
columnOptions: {
    frozenCount: 2, // Freeze 3 left most columns and 
    frozenBorderWidth: 0 // set the border width of frozen columns to be 2px.
}
});

tui.Grid.applyTheme('striped');

