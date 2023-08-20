export let layThongTin=() => {
    let ma = document.getElementById("foodID").value;
    let ten = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value;
    let gia = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;
    let hinhMon = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {
        ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa,
    };
}

export let showThongTin = (data) => {
    let {id, name, type, price, discount, status, image, desc} = data
    document.getElementById("imgMonAn").src = image;
    document.getElementById("spMa").innerText = id;
    document.getElementById("spTenMon").innerText = name;
    document.getElementById("spLoaiMon").innerText = type;
    document.getElementById("spGia").innerText = price;
    document.getElementById("spKM").innerText = discount;
    document.getElementById("spGiaKM").innerText = data.tinhGiaKM();
    document.getElementById("spTT").innerText = status;
    document.getElementById("pMoTa").innerText = desc;
    
}