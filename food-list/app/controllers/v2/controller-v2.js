// true => chay, con

const MON_CHAY = 'loai1';
const CON_MON = true;

export let renderFoodList = (list) => {
    let contentHTTML = "";
    list.reverse().forEach(({ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh}) => {

        let trString= `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai == MON_CHAY ? "<span class=text-success>Chay</span>" : "Mặn"}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang == CON_MON ? "<span class=text-success>Còn</span>" : "<span class=text-danger>Hết</span>"}</td>
                            <td>
                                <button class='btn-danger btn' 
                                onclick="deleteFood(${ma})">Xóa</button>
                                <button class='btn-primary btn'
                                onclick="editFood(${ma})">Sửa</button>
                            </td>
                    </tr>`
        contentHTTML+= trString;
    });
    document.getElementById("tbodyFood").innerHTML = contentHTTML;
};

export let showDataForm = (data) => {
    let {ma, ten, loai, gia,  khuyenMai, tinhTrang, moTa, hinhAnh} = data;
    document.getElementById("foodID").value = ma;
    document.getElementById("tenMon").value = ten;
    document.getElementById("loai").value = loai;
    document.getElementById("giaMon").value = gia;
    document.getElementById("khuyenMai").value = khuyenMai;
    document.getElementById("tinhTrang").value = tinhTrang;
    document.getElementById("moTa").value = moTa;
    document.getElementById("hinhMon").value = hinhAnh;
    
};

export let onSuccess = (message) => {
    Swal.fire(message,"","success");
}
