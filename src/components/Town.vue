

<script>
export default {
name: 'Town'
}
</script>


<template>
   <div class="banner_gt">
    <img src="images/canhdep2.png" class="d-block w-100">
    <h1 class="centered">Các Tỉnh/ Thành Phố</h1>
  </div> 
  <!-- main -->
  <main>
    <div class="container my-3 tinh"/>
      <!-- dropdown-->
      <label class="jui-dropdown">
        <select class="jui-dropdown__select nav nav-tabs" id="nav-tab" role="tablist">
            <option id="nav-link nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Miền Nam</option>
            <option id="nav-link nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Miền Bắc</option>
            <option id="nav-link nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Miền Trung</option>
        </select>
      </label>
       
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <!-- miennam -->
          <h1>Miền Tây</h1>
          <div class="d-flex">
            <img src="https://statics.vinpearl.com/du-lich-mien-tay-nen-di-tinh-nao-2_1630686815.png" alt="" width="400px" height="500px">
            <div>
              <p class="center">
                  Miền Tây là tên gọi ngắn gọn của khu vực đồng bằng sông Cửu Long, đồng bằng sông Mê Kông hay miền Tây Nam Bộ. Khu vực này gồm 1 thành phố trực thuộc Trung ương là Cần Thơ và 12 tỉnh, thành khác nhau, bao gồm: An Giang, Tiền Giang, Kiên Giang, Hậu Giang, Long An, Trà Vinh, Sóc Trăng, Đồng Tháp, Vĩnh Long, Bạc Liêu, Cà Mau, Bến Tre.
              </p>
              <p class="center">
                  Do đều bắt nguồn từ sông mẹ Mê Kông nên các tỉnh miền Tây đều có cảnh quan thiên nhiên tươi đẹp và tạo nên một bản sắc văn minh sông nước đậm nét. Những địa điểm du lịch miền Tây Nam Bộ thường gắn liền với thiên nhiên, miệt vườn, kênh rạch… và đặc biệt là bạn có thể khám phá miền Tây bằng hình thức di chuyển bằng thuyền, bè cực độc đáo.

              Vậy du lịch miền Tây nên đi tỉnh nào? Hãy cùng tìm hiểu trong phần tiếp theo của bài viết này để dễ dàng lên lịch trình du lịch miền Tây tự túc nhé!    
              </p>
            </div>
          </div>
          <h1>Cùng điểm qua 12 tỉnh và 1 thành phố của miền Tây</h1>
          <div class="row">
            <!--row1-->
            <div class="col-lg-3 col-md-3 col-4">
                <a href="cantho.html">
                    <img src="images/can-tho/cantho.png"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid">
                </a>
                <p class="row-name-1" ><b>CẦN THƠ</b></p>
            </div>             
            <div class="col-lg-3 col-md-3 col-4">
              <a href="angiang.html">
                <img  src="images/an-giang/angiang.jpg"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>AN GIANG</b></p>
            </div>        
            <div class="col-lg-3 col-md-3 col-4">
              <a href="dongthap.html">
                <img  src="images/dong-thap/lang-hoa-sa-dec-dong-thap-du-lich.png"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>ĐỒNG THÁP</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">
              <a href="haugiang.html">
                <img  src="images/hau-giang/hau-giang.jpg"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>HẬU GIANG</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">         
              <a href="kiengiang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/kien-giang/kiengiang.jpg">                   
              </a>
              <p class="row-name-2"><b>KIÊN GIANG</b></p> 
            </div>
              
            <!--row2-->               
            <div class="col-lg-3 col-md-3 col-4 ">        
              <a href="tiengiang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/tien-giang/tiengiang.png">                  
              </a>            
                <p class="row-name-2"><b>TIỀN GIANG</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="bentre.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/ben-tre/ben tre (3).jpg">                   
              </a>        
                <p class="row-name-2"><b>BẾN TRE</b></p>
            </div>      
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="vinhlong.html">
                <img conclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/vinh-long/vinhlong.jpg">
              </a>
                <p class="row-name-2"><b>VĨNH LONG</b></p>
            </div>  
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="longan.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/long-an/longan.jpg">                   
              </a>       
                <p class="row-name-3"><b>LONG AN</b></p>
            </div>
            <!--row3-->
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="travinh.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/tra-vinh/travinh.jpg">                  

              </a>                   
                <p class="row-name-3"><b>TRÀ VINH</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="baclieu.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/bac-lieu/baclieu.jpg">                   
              </a>              
                <p class="row-name-3"><b>BẠC LIÊU</b></p>
            </div>      
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="soctrang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/soc-trang/soctrang.jpg">
              </a>
                <p class="row-name-3"><b>SÓC TRĂNG</b></p>
            </div>  
                <!--row4-->
            <div class="col-lg-3 col-md-3 col-4">       
                  <a href="camau.html">
                    <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/ca-mau/camau.jpg">
                  </a>
                <p class="row-name-4"><b>CÀ MAU</b></p>
            </div>
          </div>
        </div>
        <!-- mienbac -->
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <h1>Tây Bắc Bộ</h1>
          <div class="d-flex">
            <img src="images/vung sinh thai tay bac.png" alt="">
            <div>
              <p class="center">
                Vùng Tây Bắc là vùng miền núi phía Tây của miền Bắc Việt Nam, có chung đường biên giới với Lào và Trung Quốc. Vùng này có khi được gọi là Tây Bắc Bắc Bộ và là một trong 3 tiểu vùng của Bắc Bộ Việt Nam (2 tiểu vùng kia là Vùng Đông Bắc và Đồng bằng sông Hồng). Bao gồm 4 tỉnh: Điện Biên, Lai Châu, Sơn La, Hòa Bình.
              </p>
              <p class="center">
                đến với nơi này bạn sẽ được chiêm ngưỡng vẻ đẹp của núi rừng nơi đây hùng vĩ cùng nền văn hóa đậm đà bản sắc dân tộc của người dân  miền núi. Nơi đây không chỉ có khí hậu trong lành, mát mẻ, khung cảnh thiên nhiên vừa nên thơ, kỳ vĩ mà còn có những danh thắng nổi tiếng như Mộc Châu, Sapa, Y Tý, Mù Cang Chải…Không những vậy, vùng này còn chào đón bạn bằng những món ăn và đặc sản ngon miệng, độc đáo chỉ có riêng ở núi rừng nơi đây
              </p>
            </div>
          </div>
          <h1>Cùng điểm qua 6 tỉnh Tây Bắc Bộ</h1>
          <div class="row">
            <!--row1-->
            <div class="col-lg-3 col-md-3 col-4">
                <a href="cantho.html">
                    <img src="images/Lao-cai/laocai.png"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid">
                </a>
                <p class="row-name-1" ><b>LÀO CAI</b></p>
            </div>             
            <div class="col-lg-3 col-md-3 col-4">
              <a href="angiang.html">
                <img  src="images/Yen-bai/yenbai.png"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>YÊN BÁI</b></p>
            </div>        
            <div class="col-lg-3 col-md-3 col-4">
              <a href="dongthap.html">
                <img  src="images/dien-bien/dienbien.png"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>ĐIỆN BIÊN</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">
              <a href="haugiang.html">
                <img  src="images/hoa-binh/hoabinh.png"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>HÒA BÌNH</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">         
              <a href="kiengiang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/lai-chau/laichau.png">                   
              </a>
              <p class="row-name-2"><b>LAI CHÂU</b></p> 
            </div>
          </div>
        </div>
        <!-- mientrung -->
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div class="d-flex">
            <img src="images/duyenhainamtrungbo.png" alt="" width="400px" height="500px">
            <div>
              <h1>Duyên Hải Nam Trung Bộ</h1>
              <p class="center">
                Duyên hải Nam Trung Bộ có diện tích hơn 45.000 km² chia làm 8 tỉnh thành, trong đó có 7 tỉnh và 1 thành phố: Tp. Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận và Bình Thuận.
              </p>
              <p class="center">
                Vùng Duyên hải Nam Trung Bộ với vị trí nằm trên tuyến du lịch xuyên Việt, “Con đường di sản miền Trung, “Con đường xanh Tây Nguyên, nằm trên hành lang du lịch Đông – Tây. Nét đặc trưng của hệ sinh thái với các khu bảo tồn thiên nhiên, vườn quốc gia, khu dự trữ sinh quyển gắn với biển đảo và các tài nguyên du lịch sinh thái vô cùng hấp dẫn đối với khách du lịch. 
              </p>
            </div>
          </div>
          <h1>Cùng điểm qua 7 tỉnh và 1 thành phố của vùng Duyên Hải Nam Trung Bộ</h1>
          <div class="row">
            <!--row1-->
            <div class="col-lg-3 col-md-3 col-4">
                <a href="cantho.html">
                    <img src="images/da-nang/dangang.png"  onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid">
                </a>
                <p class="row-name-1" ><b>ĐÀ NẴNG</b></p>
            </div>             
            <div class="col-lg-3 col-md-3 col-4">
              <a href="angiang.html">
                <img  src="images/quang-nam/quangnam.png"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>QUẢNG NAM</b></p>
            </div>        
            <div class="col-lg-3 col-md-3 col-4">
              <a href="dongthap.html">
                <img  src="images/quang-ngai/quangngai.png"  onclick="openModal();currentSlide(3)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>QUẢNG NGÃI</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">
              <a href="haugiang.html">
                <img  src="images/binh-dinh/binhdinh.png"  onclick="openModal();currentSlide(4)" class="hover-shadow cursor img-fluid">
              </a>
              <p class="row-name-1"><b>BÌNH ĐỊNH</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">         
              <a href="kiengiang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/phu-yen/phuyen.png">                   
              </a>
              <p class="row-name-2"><b>PHÚ YÊN</b></p> 
            </div>
              
            <!--row2-->               
            <div class="col-lg-3 col-md-3 col-4 ">        
              <a href="tiengiang.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/khanh-hoa/khanhhoa.png">                  
              </a>            
                <p class="row-name-2"><b>KHÁNH HÒA</b></p>
            </div>
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="bentre.html">
                <img onclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/ninh-thuan/ninhthuan.png">                   
              </a>        
                <p class="row-name-2"><b>NINH THUẬN</b></p>
            </div>      
            <div class="col-lg-3 col-md-3 col-4">       
              <a href="vinhlong.html">
                <img conclick="openModal();currentSlide(1)" class="hover-shadow cursor img-fluid" src="images/binh-thuan/binhthuan.png">
              </a>
                <p class="row-name-2"><b>BÌNH THUẬN</b></p>
            </div>  
          </div>
        </div>
      </div>
    </main>
</template>
<style>
  .img-fluid{
    width: 350px;
    height: 250px;
    margin-bottom: 35px;
}
.container-fluid{
    margin-top: 10px;
    
}
h3{
  color:#27ae60;
}

.row-name-1{
    margin-top: -265px;
    color: white;
    padding: 10px;
    margin-bottom: 210px;
    
}
.row-name-2{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
.row-name-3{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
.row-name-4{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
  .row > .column {
    padding: 0 8px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
    
  }

  .column {
    float: left;
    width: 25%;
  }

 
  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  .mySlides {
    display: none;
  }

  .cursor {
    cursor: pointer;
  }

  /* Next & previous buttons */
  

  img {
    margin-bottom: -4px;
  }

  .caption-container {
    text-align: center;
    background-color: black;
    padding: 2px 16px;
    color: white;
  }

  .demo {
    opacity: 0.6;
  }

  .active,
  .demo:hover {
    opacity: 1;
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
.h1_diadiem{
  font-family: 'Great Vibes', Helvetica, sans-serif;
  color: #48a497;
 }

 /* drowdown */
 .jui-dropdown {
  position: relative;
  position: inline-block;
}

.jui-dropdown__select {
  border-radius: 2px;
  border: 2px solid #48a497;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
  height: 40px;
  user-select: none;
  cursor: pointer;
  text-overflow: ellipsis;
  outline: none;
  background: #48a497;
  color: #fff;
    
}

.jui-dropdown--disabled {
  opacity: 0.5;
  pointer-events: none;
}
.jui-label {
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
}

</style>