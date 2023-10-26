const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const tabs = document.querySelectorAll(".tab-item");
// const panes = document.querySelectorAll(".tab-pane");

// // const tabActive = document.querySelector(".tab-item1.active");
// // const line = document.querySelector(".tabs .line");

// // line.style.left = tabActive.offsetLeft + "px";
// // line.style.width = tabActive.offsetWidth + "px";

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     document.querySelector(".tab-item.active").classList.remove("active");
//     document.querySelector(".tab-pane.active").classList.remove("active");

//     // line.style.left = this.offsetLeft + "px";
//     // line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });

// nội dung lab1
const lab = document.querySelectorAll(".labb");
// const content_1 = document.querySelectorAll(".content-item1");

// const tabActive = document.querySelector(".tab-item1.active");
// const line = document.querySelector(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

lab.forEach((tab) => {
  // const pane = content_1[index];

  tab.onclick = function () {
    document.querySelector(".labb.active").classList.remove("active");
    // document.querySelector(".content-item1.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    lab.classList.add("active");
    // pane.classList.add("active");
  };
});
// nội dung lab1
const lab_1 = document.querySelectorAll(".lab-item1");
const content_1 = document.querySelectorAll(".content-item1");

// const tabActive = document.querySelector(".tab-item1.active");
// const line = document.querySelector(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

lab_1.forEach((tab, index) => {
  const pane = content_1[index];

  tab.onclick = function () {
    document.querySelector(".lab-item1.active").classList.remove("active");
    document.querySelector(".content-item1.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// nội dung lab2
const lab_2 = document.querySelectorAll(".lab-item2");
const content_2 = document.querySelectorAll(".content-item2");

// const tabActive = document.querySelector(".tab-item1.active");
// const line = document.querySelector(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

lab_2.forEach((tab, index) => {
  const pane = content_2[index];

  tab.onclick = function () {
    document.querySelector(".lab-item2.active").classList.remove("active");
    document.querySelector(".content-item2.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
// nội dung lab3
const lab_3 = document.querySelectorAll(".lab-item3");
const content_3 = document.querySelectorAll(".content-item3");

// const tabActive = document.querySelector(".tab-item1.active");
// const line = document.querySelector(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

lab_3.forEach((tab, index) => {
  const pane = content_3[index];

  tab.onclick = function () {
    document.querySelector(".lab-item3.active").classList.remove("active");
    document.querySelector(".content-item3.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
// nội dung lab4
const lab_4 = document.querySelectorAll(".lab-item4");
const content_4 = document.querySelectorAll(".content-item4");

// const tabActive = document.querySelector(".tab-item1.active");
// const line = document.querySelector(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

lab_4.forEach((tab, index) => {
  const pane = content_4[index];

  tab.onclick = function () {
    document.querySelector(".lab-item4.active").classList.remove("active");
    document.querySelector(".content-item4.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

const lab_5 = document.querySelectorAll(".lab-item5");
const content_5 = document.querySelectorAll(".content-item5");
lab_5.forEach((tab, index) => {
  const pane = content_5[index];

  tab.onclick = function () {
    document.querySelector(".lab-item5.active").classList.remove("active");
    document.querySelector(".content-item5.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

const lab_6 = document.querySelectorAll(".lab-item6");
const content_6 = document.querySelectorAll(".content-item6");
lab_6.forEach((tab, index) => {
  const pane = content_6[index];

  tab.onclick = function () {
    document.querySelector(".lab-item6.active").classList.remove("active");
    document.querySelector(".content-item6.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

document.getElementById('lab-1').style.display = "block";

var lab1 = document.getElementById('lab1');
lab1.onclick = function(){ 
  // remove active
  document.querySelector(".labb.active").classList.remove("active");
    document.getElementById('lab-1').style.display = "block";

    document.getElementById('lab-2').style.display = "none";
    document.getElementById('lab-3').style.display = "none";
    document.getElementById('lab-4').style.display = "none";
    // add active
    this.classList.add("active");
}
var lab2 = document.getElementById('lab2');
lab2.onclick = function(){
  // remove active
  document.querySelector(".labb.active").classList.remove("active");

    document.getElementById('lab-2').style.display = "block";

    document.getElementById('lab-1').style.display = "none";
    document.getElementById('lab-3').style.display = "none";
    document.getElementById('lab-4').style.display = "none";

    // add active
    this.classList.add("active");
}
var lab3 = document.getElementById('lab3');
lab3.onclick = function(){
  // remove active
  document.querySelector(".labb.active").classList.remove("active");
    document.getElementById('lab-3').style.display = "block";

    document.getElementById('lab-1').style.display = "none";
    document.getElementById('lab-2').style.display = "none";
    document.getElementById('lab-4').style.display = "none";
    document.getElementById('lab-2').classList.remove('active');

    // add active
    this.classList.add("active");

}
var lab4 = document.getElementById('lab4');
lab4.onclick = function(){
  // remove active
  document.querySelector(".labb.active").classList.remove("active");
    document.getElementById('lab-4').style.display = "block";

    document.getElementById('lab-1').style.display = "none";
    document.getElementById('lab-2').style.display = "none";
    document.getElementById('lab-3').style.display = "none";

    // add active
    this.classList.add("active");

}
// code phần thêm sửa xóa
var books = [
  {
    id:100100,
    name: 'Đắc nhân tâm',
    author: 'Dale Carnegie',
    category: 'Kỹ năng sống',
    quanlity: 2
  },
  {
    id:100200,
    name: 'Nhà giả kim',
    author: 'Paulo Coelho',
    category: 'Kỹ năng sống',
    quanlity: 4
  },
  {
    id:100300,
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu?',
    author: 'Rosie Nguyễn',
    category: 'Kỹ năng sống',
    quanlity: 1
  },
  {
    id:100400,
    name: 'Cho tôi xin 1 vé đi tuổi thơ',
    author: 'Nguyễn Nhật Ánh',
    category: 'Tiểu thuyết',
    quanlity: 2
  },
  {
    id:100500,
    name: 'Harry Potter',
    author: 'J. K. Rowling',
    category: 'Tiểu thuyết',
    quanlity: 8
  }
];
  var editMode  =false;
  var studentIdTmp;
  // biến lưu tạm của id lúc sửa

 document.addEventListener('DOMContentLoaded',function(){
 renderStudents();
 });

 function enableEditMode(){
     editMode = true;
 }
 function disableEditMode(){
     editMode = false;
 }
 function isEditMode(){
     return editMode ==true;
 }

//    render student
 function renderStudents(){
     var html ='';
      html+='<tr>';
      html+='<th class="col">STT</th>';
      html+='<th class="col2">Mã sách</th>';
      html+='<th class="col">Tên sách</th>';
      html+='<th class="col">Tác giả</th>';
      html+='<th class="col">Thể loại</th>';
      html+='<th class="col">Số lượng</th>';
      html+='<th class="col">Options</th>';
      html+='</tr>';
  for(var i=0;i<books.length;i++){
      var student =books[i];
      html+='<tr>'
      html+= ' <th class="col">'+(i+1)+'</th>';
      html+= ' <td class="col2">'+student.id+'</td>';
      html+= ' <td class="col">'+student.name+'</td>';
      html+= ' <td class="col">'+student.author+'</td>';
      html+= ' <td class="col">'+student.category+'</td>';
      html+= ' <td class="col">'+student.quanlity+'</td>';
      html+= ' <td class="col">';
      html+= ' <i class="icon-delete far fa-trash-alt" onclick="onDeleteStudent(' + i +')"></i>';
      html+= ' <i class="icon-edit far fa-edit" onclick="onEditStudent(' + i +')"></i>';
      html+= ' </td>';
      html+='</tr>'
      // console.log(html);
  }
  // var studentsElement =document.getElementById('books-list')
  // studentsElement.innerHTML = html;
  setHTML('#books-list', html);
 }

//    edit button
 function onEditStudent(index){
  studentIdTmp = index;

  var student = getStudent(index);
setInputValue('.book-form .id', student.id);
setInputValue('.book-form .name', student.name);
setInputValue('.book-form .author', student.author);
setInputValue('.book-form .category', student.category);
setInputValue('.book-form .quanlity', student.quanlity);

// enable edit mode
enableEditMode();
setHTML('.createStudent','Save')
 }
function getStudent(index){
  return books[index];
}

function setHTML(selector, html){
  var element = document.querySelector(selector);
  element.innerHTML = html;
}
//    đẩy dữ liệu từ mảng ra ô input
function setInputValue(selector, value){
var element =  document.querySelector(selector);
element.value = value;
}
//    button nhấp vào để xóa
function onDeleteStudent(index){
  if(confirm('Are you sure')){
      studentDelete(index);

  renderStudents();
  }
  
}
// hàm xóa student
function studentDelete(index){
  books.splice(index,1);
}
//    lấy giá trị ra từ form 
function getInputValue(selector){
  var inputElement = document.querySelector(selector);
  return inputElement.value;
}

// funtion deit mode 
function editStudentHandle(){
  var id  =getInputValue('.book-form .id');
  var name =getInputValue('.book-form .name');
  var author  =getInputValue('.book-form .author');
  var category  =getInputValue('.book-form .category');
  var quanlity  =getInputValue('.book-form .quanlity');
  // edit student
  
  editStudent(studentIdTmp, {
      id:id,
      name:name,
      author:author,
      category:category,
      quanlity:quanlity
  });
 
  renderStudents();

  // disable editmode
  disableEditMode;

  setHTML('.createStudent', 'Create')
  
  studentFormReset();
}
// dọn phần nội dung trong input
function studentFormReset(){
  setInputValue('.book-form .id', '');
  setInputValue('.book-form .name', '');
  setInputValue('.book-form .author','');
  setInputValue('.book-form .category', '');
  setInputValue('.book-form .quanlity', '');
}

function editStudent(index,student){
  books[index] = student;
}



//    on click tạo ra students
function onClickCreateStudent(){

  if(isEditMode()){
      editStudentHandle();
  }else{
    var id  =getInputValue('.book-form .id');
    var name =getInputValue('.book-form .name');
    var author  =getInputValue('.book-form .author');
    var category  =getInputValue('.book-form .category');
    var quanlity  =getInputValue('.book-form .quanlity');
  
  // add student
  addStudent({
    id:id,
    name:name,
    author:author,
    category:category,
    quanlity:quanlity
  });

  // chạy lại render để hiển thị code lên màn hình
  renderStudents();

  studentFormReset();
  }
 
}

// add student vào mảng
function addStudent(student){
  books.push(student);
  // thêm 1 phần tử vào cuối mảng
}

var addBtn = document.querySelector('.add-btn');
var bookForm = document.querySelector('.book-form');
addBtn.onclick = function(){
  bookForm.classList.add('open');
}

// var editBtn = document.querySelector('.icon-edit');
// var editForm = document.querySelector('.book-form');
// editBtn.onclick = function(){
//   editForm.classList.add('open');
// }

// var bookForm = document.querySelector('.book-form');
// function show(){
//   bookForm.classList.add('open')
// }
// addBtn.addEventListener('click',show)
var closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = function(){
  bookForm.classList.remove('open');
}