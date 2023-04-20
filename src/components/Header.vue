
<style>
.fa-xmark{
  float: right;
  font-size: 22px;
  color: #fff;
  margin: 5px;
}

</style>
<script>
//active_nav
  $(document).ready(function(){
    $('.item_menu').click(function(){
        $(this).addClass('active_nav').siblings().removeClass('active_nav');
      })
  })
  

</script>
<template>
    <header class="header">
      <div class="container d-flex justify-content-between">
        <!-- logo -->
        <router-link :to="{name: 'home'}" class="logo ">
          Travel                   
          </router-link>
          
        <ul class="menu_nav d-sm-none d-none d-md-none d-lg-flex d-xl-flex">
          <li class="align-self-center">
            <router-link :to="{name: 'home'}" class="nav-link px-2 item_menu ">
                TRANG CHỦ                   
                </router-link>
            
          </li>
          <li class="align-self-center">
            <router-link :to="{name: 'introduce'}" class="nav-link px-2 item_menu  ">
                GIỚI THIỆU                   
                </router-link>
          </li>
          <li class="align-self-center">
            <router-link :to="{name: 'news'}" class="nav-link px-2 item_menu ">
                TIN TỨC                   
                </router-link>
          </li>
          <li class="align-self-center">
            <router-link :to="{name: 'town'}" class="nav-link px-2 item_menu ">
                CÁC TỈNH/ THÀNH                   
                </router-link>
          </li>
        </ul>
        <!-- offcanvas menu-->
        <div class="d-flex">
          <div class="align-self-center me-3">
            <nav class="navbar navbar-expand-xl navbar-expand-lg navbar-light">
              <!-- nút menu -->
              <button class="navbar-toggler" style="background-color: #ec6408;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- offcanvas -->
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                  <a href="trangchu.html" class="logo" style="color: #ec6408;">
                    Travel
                  </a>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <form class="d-flex mx-2">
                  <input class="form-control search me-2 align-self-center" type="search" placeholder="Search" aria-label="Search">
                </form>
                <div class="offcanvas-body p-0 mt-3">
                    <ul class="menu_nav">
                      <li class="py-2 m-2" style=" border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <router-link :to="{name: 'home'}" class="nav-link px-2 item_menu text-dark ">
                        TRANG CHỦ                   
                        </router-link>
                      </li>
                      <li class="py-2 m-2" style=" border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <router-link :to="{name: 'introduce'}" class="nav-link px-2 item_menu text-dark">
                        GIỚI THIỆU                   
                        </router-link>
                      </li>
                      <li class="py-2 m-2" style=" border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <router-link :to="{name: 'news'}" class="nav-link px-2 item_menu text-dark">
                        TIN TỨC                   
                        </router-link>
                      </li>
                      <li class="py-2 m-2" style=" border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <router-link :to="{name: 'town'}" class="nav-link px-2 item_menu text-dark">
                        CÁC TỈNH/ THÀNH                   
                        </router-link>
                      </li>
                    </ul>
                </div>
              </div>
            </nav>
          </div>
          <div class="d-sm-none d-md-none d-none d-lg-flex d-xl-flex align-self-center me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-magnifying-glass search_icon"></i>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="background: none; border: none;">
                    <button data-bs-dismiss="modal" aria-label="Close" style="width: 525px;">
                      <i class="fa-solid fa-xmark" ></i>
                    </button>
                    <form class="search text-decoration-none align-self-center me-1" >
                      <input type="text" title="Tìm kiếm tỉnh, thành phố, địa điểm...." placeholder="Tìm kiếm tỉnh, thành phố, địa điểm">
                      <button type="submit">Tìm</button>
                  </form>
                </div>
            </div>
          </div>
          <!-- Dang nhap -->
          <button type="button" class="btn ms-2 align-self-center d-sm-none d-md-none d-none d-lg-flex d-xl-flex" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Đăng Nhập
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Đăng Nhập</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="dangnhap.php" aria-label="" method="post" role="form">

                    <div class="container">
                      <label for="username"><b>Tên đăng nhập</b></label>
                      <input type="text" placeholder="Nhập tên đăng nhập" name="username" required>
                  
                      <label for="password"><b>Mật khẩu</b></label>
                      <input type="password" placeholder="Nhập mật khẩu" name="password" required>
                  
                      <button type="submit" class="modal-login">Đăng nhập</button>
                      <label>
                        <input type="checkbox"  name="remember"> Ghi nhớ tôi
                      </label>
                    </div>
                  
                    <div class="container" style="background-color:#f1f1f1">
                      <button type="button" class="cancelbtn">Thoát</button>
                      <span class="psw">Quên <a href="#">mật khẩu?</a></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            <!-- Dang ký -->
            <button type="button" class="btn ms-2 align-self-center d-sm-none d-md-none d-none d-lg-flex d-xl-flex" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Đăng Ký
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Đăng Nhập</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="dangky.php" aria-label=""  style="border:1px solid #ccc" method="post" role="form">
                    <div class="container">
                      <label for="email"><b>Email</b></label>
                      <input type="text" placeholder="Nhập email" name="email" required>
                  
                      <label for="psw"><b>Mật khẩu</b></label>
                      <input type="password" placeholder="Nhập mật khẩu" name="psw" required>
                  
                      <label for="psw-repeat"><b>Nhập lại mật khẩu</b></label>
                      <input type="password" placeholder="Nhập lại mật khẩu" name="psw-repeat" required>
                  
                      <label>
                        <input type="checkbox"  name="remember" style="margin-bottom:15px"> Ghi nhớ tôi
                      </label>
                  
                      <p>Bằng cách tạo một tài khoản, bạn đồng ý với <a href="#" style="color:dodgerblue">Điều khoản & Quyền riêng tư</a>.</p>
                  
                      <div class="clearfix">
                        <button type="button" class="cancelbtn">Thoát</button>
                        <button type="submit" class="signupbtn">Đăng ký</button>
                      </div>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>              
    </header>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/banner7.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>Hà Giang</h4>
            <p>Hoàng Su Phì với những thửa ruộng bậc thang đẹp say lòng là điểm săn lúa chín nổi tiếng nhất Hà Giang.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="images/banner.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>Long An</h4>
            <p>Mỹ Hạnh Bắc là vùng đất phèn nên nông dân có thể trồng cây cỏ bàng làm nguyên liệu trong sản xuất ống hút thay thế cho ống hút nhựa để bảo vệ môi trường.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="images/nam-can-mui-ca-mau.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>Khu du lịch quốc gia Đất Mũi Cà Mau</h4>
            <p>Khi có dịp du lịch Cà Mau và đến với vườn quốc gia Mũi Cà Mau, du khách sẽ ấn tượng với những điều thú vị có một không hai của nơi này.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>