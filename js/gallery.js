$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()){
        $('nav').addClass('sticky');
      }else{
        $('nav').removeClass('sticky');
      }
    })
});


var labels = document.querySelectorAll('.content-check label');
labels.forEach(function(label) {
  label.addEventListener('click', function() {
    labels.forEach(function(label) {
      label.querySelector('span').classList.remove('active');
    });
    this.querySelector('span').classList.add('active');
  });
});

var pics = document.querySelectorAll('.pic');

// Lặp qua từng phần tử ảnh và thêm sự kiện click
pics.forEach(function(pic) {
  pic.addEventListener('click', function(event) {
    // Kiểm tra xem sự kiện click có phát sinh từ phần bóng hay không
    if (event.target === this) {
      // Hiển thị phần gallery
      var gallery = document.querySelector('.gallery');
      gallery.classList.add('show');

      // Hiển thị ảnh trong phần gallery
      var galleryImage = gallery.querySelector('.gallery-inner img');
      var image = this.querySelector('img');
      galleryImage.setAttribute('src', image.getAttribute('src'));
    }
  });
});

// Đóng phần gallery khi nhấp vào nút đóng
var closeButton = document.querySelector('.gallery .close');
    closeButton.addEventListener('click', function() {
        var gallery = document.querySelector('.gallery');
        gallery.classList.remove('show');
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pics = document.querySelectorAll('.pic');

// Lấy nút trước và nút sau
var prevButton = document.querySelector('.gallery .prev');
var nextButton = document.querySelector('.gallery .next');

// Lấy danh sách ảnh
var images = document.querySelectorAll('.pic img');
var imageArray = Array.from(images);
var currentIndex = 0;

// Sự kiện click nút trước
prevButton.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageArray.length - 1;
  }
  updateGalleryImage();
});

// Sự kiện click nút sau
nextButton.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= imageArray.length) {
    currentIndex = 0;
  }
  updateGalleryImage();
});

// Cập nhật ảnh trong phần gallery
function updateGalleryImage() {
  var galleryImage = document.querySelector('.gallery-inner img');
  galleryImage.setAttribute('src', imageArray[currentIndex].getAttribute('src'));
}



// Lấy thông tin về phần tử "custom-np"
var customNp = document.querySelector('.custom-np');

// Thiết lập biến để lưu trạng thái hiện tại của "custom-np"
var isCustomNpVisible = true;

// Thiết lập hàm để ẩn "custom-np"
function hideCustomNp() {
  if (isCustomNpVisible) {
    customNp.style.transform = 'translateY(100%)';
    isCustomNpVisible = false;
  }
}

// Thiết lập hàm để hiển thị "custom-np"
function showCustomNp() {
  if (!isCustomNpVisible) {
    customNp.style.transform = 'translateY(0)';
    isCustomNpVisible = true;
  }
}

// Thiết lập hàm để xử lý sự kiện click trên màn hình
function handleScreenClick() {
  showCustomNp();
  clearTimeout(timer); // Đặt lại đếm thời gian
  timer = setTimeout(hideCustomNp, 3000); // Ẩn "custom-np" sau 3 giây
}

// Thiết lập hàm để xử lý sự kiện scroll trên màn hình
function handleScreenScroll() {
  showCustomNp();
  clearTimeout(timer); // Đặt lại đếm thời gian
  timer = setTimeout(hideCustomNp, 3000); // Ẩn "custom-np" sau 3 giây
}

// Thiết lập sự kiện click trên màn hình
document.addEventListener('click', handleScreenClick);

// Thiết lập sự kiện scroll trên màn hình
document.addEventListener('scroll', handleScreenScroll);

// Thiết lập đếm thời gian để ẩn "custom-np" sau một khoảng thời gian
var timer = setTimeout(hideCustomNp, 3000);


document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navMenu = document.querySelector('.nav-menu');

  navbarToggle.addEventListener('click', function() {
      navMenu.classList.toggle('actives');
  });
});