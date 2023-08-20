import foodServ from "../../service/service.js";
import { onSuccess, renderFoodList, showDataForm } from "./controller-v2.js";
import { layThongTin } from "../v1/controller-v1.js";
// render food list
let fetchFoodList = () => {
  foodServ.getList()
    .then((res) => {
        console.log(res);
        renderFoodList(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
};
fetchFoodList();

//tách service
    
let deleteFood = (id) => {

   foodServ.deleteFood(id)
    .then((res) => {
        console.log(res);
        onSuccess("xóa thành công");
        fetchFoodList();
    })
    .catch((err) => {
        console.log(err);
    })
};
window.deleteFood = deleteFood;

window.addFood = () => {
    console.log("yes");
    let data = layThongTin();
    foodServ
    .addFood(data)
    .then((res) => {
        $('#exampleModal').modal('hide');
        onSuccess("Thêm thành công");
        fetchFoodList();
    })
    .catch((err) => {
        console.log(err);
    });
};

window.editFood = (id) => {
    $('#exampleModal').modal('show');
    foodServ
        .getDetail(id)
        .then((res) => {
            console.log(res);
            showDataForm(res.data);
            window.updateFood = () => {
                let data = layThongTin();
                foodServ.updateFood(id, data)
                    .then((res) => {
                        console.table(data);
                        fetchFoodList();
                        console.log(data)
                        onSuccess("cập nhật thành công")
                     })
                     .catch((err) => {
                          console.log(err);
                     });
                console.log("update");     
            }
        }) 
        .catch((err) => {
            console.log(err);
        });
};

//window.addFood = addFood;