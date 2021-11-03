const btn = document.querySelector('#btn');
let years = document.getElementsByTagName('input');

btn.addEventListener('click', function () {
    years[1].value = chuyen_doi_lich(years[0].value);
})


const chuyen_doi_lich = function (y) {
    let so_du_can = (Number(y) - 3) % 10;
    let can = "";
    let chi = "";
    switch (so_du_can) {
        case 0:
            can = "Quý";
            break;
        case 1:
            can = "Giáp";
            break;
        case 2:
            can = "Ất";
            break;
        case 3:
            can = "Bính";
            break;
        case 4:
            can = "Đinh";
            break;
        case 5:
            can = "Mậu";
            break;
        case 6:
            can = "Kỷ";
            break;
        case 7:
            can = "Canh";
            break;
        case 8:
            can = "Tân";
            break;
        case 9:
            can = "Nhâm";
            break;
    }
    let so_du_chi = (Number(y) - 3) % 12;
    switch (so_du_chi) {
        case 0:
            chi = "Hợi";
            break;
        case 1:
            chi = "Tý";
            break;
        case 2:
            chi = "Sửu";
            break;
        case 3:
            chi = "Dần";
            break;
        case 4:
            chi = "Mão";
            break;
        case 5:
            chi = "Thìn";
            break;
        case 6:
            chi = "Tỵ";
            break;
        case 7:
            chi = "Ngọ";
            break;
        case 8:
            chi = "Mùi";
            break;
        case 9:
            chi = "Thân";
            break;
        case 10:
            chi = "Dậu";
            break;
        case 11:
            chi = "Tuất";
            break;
        case 12:
            chi = "Hợi";
            break;
    }
    return can + " " + chi;
}