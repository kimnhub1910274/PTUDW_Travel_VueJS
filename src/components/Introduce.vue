<script>
export default {
    name: 'Introduce'

};
function openCity(evt, cityName) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
</script>

<style>

</style>
<template>
  <div class="banner_gt">
      <img src="images/canhdep.png" class="d-block w-100">
      <h1 class="centered">Giới Thiệu</h1>
      
    </div> 
          <!-- main -->
          <main class="gioithieu">  
              
                <!-- Tab links -->
                  <div class="tab nav nav-tabs">
                    <button class="tablinks" onclick="openCity(event, 'Cần Thơ')">Cần Thơ</button>
                    <button class="tablinks" onclick="openCity(event, 'An Giang')">An Giang</button>
                    <button class="tablinks" onclick="openCity(event, 'Đồng Tháp')">Đồng Tháp</button>
                    <button class="tablinks" onclick="openCity(event, 'Hậu Giang')">Hậu Giang</button>
                    <button class="tablinks" onclick="openCity(event, 'Kiên Giang')">Kiên Giang</button>
                    <button class="tablinks" onclick="openCity(event, 'Tiền Giang')">Tiền Giang</button>
                    <button class="tablinks" onclick="openCity(event, 'Bến Tre')">Bến Tre</button>
                    <button class="tablinks" onclick="openCity(event, 'Vĩnh Long')">Vĩnh Long</button>
                    <button class="tablinks" onclick="openCity(event, 'Long An')">Long An</button>
                    <button class="tablinks" onclick="openCity(event, 'Trà Vinh')">Trà Vinh</button>
                    <button class="tablinks" onclick="openCity(event, 'Bạc Liêu')">Bạc Liêu</button>
                    <button class="tablinks" onclick="openCity(event, 'Sóc Trăng')">Sóc Trăng</button>
                    <button class="tablinks" onclick="openCity(event, 'Cà Mau')">Cà Mau</button>
                  </div>
                
              <div class="container  my-3">
              

                <!-- Tab content -->
                <div id="Cần Thơ" class="tabcontent">
                  <h3>Cần Thơ</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/can-tho/cantho.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Cần Thơ là thành phố lớn nhất của đồng bằng Sông Cửu Long, nơi có nhiều danh lam thắng cảnh đẹp, di tích lịch sử và các điểm du lịch tâm linh hấp dẫn. Du lịch Cần Thơ bạn không chỉ được khám phá về một thành phố miền Tây tiêu biểu, mà có cơ hội tìm hiểu những nét văn hóa đặc trưng gắn liền với sông nước miệt vườn cũng như tính cách hiền hậu và mến khách của người dân Nam Bộ. Bên cạnh đó, bạn cũng có dịp thưởng thức nhiều món ăn ngon dân dã đặc sản của Miền Tây.</p>
                    </div>
                  </div>
                </div>
                <div id="An Giang" class="tabcontent">
                  <h3>An Giang</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/an-giang/canh-dong-ta-pa_optimized.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">An Giang sở hữu diện tích khá lớn ở miền Tây Nam Bộ và là một trong những tỉnh biên giới giáp Campuchia. Nơi đây nổi tiếng có nhiều cảnh quan thiên nhiên tươi đẹp, có sông nước mênh mông, có núi non kỳ vĩ, có rừng tràm xanh mướt. An Giang không chỉ có thiên nhiên thơ mộng mà còn có những di tích lịch sử, những điểm du lịch tâm linh và sự giao thoa văn hóa giữa các dân tộc Việt – Hoa – Khmer – Chăm đặc sắc. Đặt chân đến nơi ấy, bạn sẽ thấy được An Giang bình yên và thân thuộc biết nhường nào. Khiến người ta không nỡ xa rời, đi một lần là trọn đời vương vấn. </p>
                    </div>
                  </div>                
                </div>
                <div id="Đồng Tháp" class="tabcontent">
                  <h3>Đồng Tháp</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/dong-thap/lang-hoa-sa-dec-dong-thap-du-lich.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center"> Đồng Tháp được biết đến là một tỉnh của miền Tây Nam bộ, vùng đất có nhiều cảnh quan thiên nhiên cùng những đặc sản mà không phải nơi nào cũng có. Về với Đồng Tháp, du khách sẽ được tận mắt chiêm ngưỡng vẻ đẹp bình yên, mộc mạc đậm chất Nam bộ với những cánh đồng lúa phì nhiêu, những hồ sen thơm ngát đủ sắc màu, được nghe tiếng chim hót ríu ran, được đắm mình trong không gian hương tràm và thưởng thức những món ăn đặc sản làm từ sen.</p>
                    </div>
                  </div>    
                </div>
                <div id="Hậu Giang" class="tabcontent">
                  <h3>Hậu Giang</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/hau-giang/1708.vi_thanh_ky_vong_phat_trien_du_lich_xung_tam.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center"> Hiếm có tỉnh nào trong khu vực đồng bằng sông Cửu Long còn giữ được cảnh quan thiên nhiên hoang sơ, làng quê thuần nông như Hậu Giang. Điểm nổi bật của Hậu Giang là những miệt vườn trù phú với cây trái trĩu quả quanh năm, những ruộng lúa bát ngát, người Hậu Giang chất phát, đôn hậu, hiền hòa và giàu lòng mến khách. Đến với Hậu Giang, du khách sẽ được chiêm ngưỡng cảnh nông thôn bình yên trong lành, trải nghiệm cuộc sống của người dân bản địa, hưởng thụ hương đồng gió nội…</p>
                    </div>
                  </div>   
                </div>

                <div id="Kiên Giang" class="tabcontent">
                  <h3>Kiên Giang</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/kien-giang/du-lich-kien-giang-8_1634573109.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">  Kiên Giang vùng đất được mệnh danh là phiên bản thu nhỏ của Việt Nam tươi đẹp. Từ đồng bằng, núi đồi, rừng các loại, sông ngòi đến biên giới, biển đảo… tất cả đều hội tụ nơi này, tạo nên cảnh quan thiên nhiên hết sức kỳ thú, độc đáo, riêng có. Đến Kiên Giang, dải đất tận cùng phía tây nam Tổ quốc, du khách sẽ có những trải nghiệm thú vị và được tận mắt chiêm ngưỡng vẻ đẹp của những thắng cảnh nổi tiếng của vùng đất này.</p>
                    </div>
                  </div>   
                </div>

                <div id="Tiền Giang" class="tabcontent">
                  <h3>Tiền Giang</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/tien-giang/dia-diem-du-lich-tien-giang-cover.webp" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Tiền Giang nằm ở khu vực sông Tiền, cửa ngõ về miền Tây Nam Bộ. Với cảnh quan sông nước hữu tình, hệ sinh thái đa dạng, nhiều di tích văn hóa lịch sử, cùng lối sống chân chất, hồn hậu và nét sinh hoạt văn hóa truyền thống đặc trưng của cư dân Nam Bộ …đã tạo nét đặc sắc riêng cho du lịch Tiền Giang.
                       Chúng tôi là người địa phương am hiểu và có nhiều kinh nghiệm để trả lời tất cả các câu hỏi của bạn như: Đến Tiền Giang bằng cách nào, đến Tiền Giang ăn gì, các điểm tham quan Tiền Giang, đặc sản Tiền Giang mua về làm quà, các khách sạn Tiền Giang đạt chuẩn…</p>
                    </div>
                  </div>   
                </div>
                <div id="Bến Tre" class="tabcontent">
                  <h3>Bến Tre</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/ben-tre/ben tre (3).jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Bến Tre nổi tiếng với những vườn dừa xanh thẳm, những vườn trái cây sum xuê, nhiều làng nghề thủ công truyền thống, nhiều di tích văn hóa- lịch sử, con người thì đôn hậu và hiếu khách. Đến Bến Tre, du khách không chỉ được chiêm ngưỡng cảnh sắc thiên nhiên tươi đẹp, thưởng thức trái cây ngon mà còn có cơ hội trải nghiệm cuộc sống yên bình nơi vùng sông nước miền Tây.
                        Chúng tôi là người địa phương am hiểu và có nhiều kinh nghiệm để trả lời tất cả các câu hỏi của bạn như: Đến Bến Tre bằng cách nào, đến Bến Tre ăn gì, các điểm tham quan Bến Tre, đặc sản Bến Tre mua về làm quà, các khách sạn Bến Tre đạt chuẩn…</p>
                    </div>
                  </div>   
                </div>
                <div id="Vĩnh Long" class="tabcontent">
                  <h3>Vĩnh Long</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/vinh-long/chua-tien-chau.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Vĩnh Long nằm ở trung tâm đồng bằng sông Cửu Long, giữa sông Tiền và sông Hậu, được mệnh danh là vùng đất “địa linh nhân kiệt”, giàu truyền thống cách mạng, lưu giữ nhiều di tích lịch sử văn hóa độc đáo. Thiên nhiên còn ưu đãi Vĩnh Long khí hậu ôn hòa quanh năm, đất đai màu mỡ, bốn mùa cây trái xanh tươi… tạo nên sự khác biệt, sức hấp dẫn riêng thu hút khách tham quan. Đến Vĩnh Long, du khách có thể hòa mình vào sông nước miệt vườn và trở thành thành viên trong gia đình để cùng khám phá những nét văn hóa, phong tục tập quán của người dân địa phương….</p>
                    </div>
                  </div>  
                </div>
                <div id="Long An" class="tabcontent">
                  <h3>Long An</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/long-an/dia-diem-du-lich-long-an.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Nằm ở khu vực giao thoa giữa vùng đồng bằng sông Cửu Long và miền Đông Nam bộ, Long An mảnh đất hiền hòa, thơ mộng có rất nhiều điểm tham quan hấp dẫn, nhất là du lịch sinh thái vùng Đồng Tháp Mười. Đến với Long An, du khách sẽ được trải nghiệm không khí trong lành từ những cánh rừng tràm ngút ngàn, tận hưởng mùi thơm ngát cùng vẻ đẹp tuyệt sắc của những cánh đồng sen mênh mông. Tham quan nhà cổ, những vườn cây ăn trái quanh năm tươi tốt, những cánh đồng lúa bạt ngàn ở đôi dòng sông Vàm Cỏ Đông… tạo nên một bức tranh yên bình, mát dịu và trù phú.</p>
                    </div>
                  </div>  
                </div>
                <div id="Trà Vinh" class="tabcontent">
                  <h3>Trà Vinh</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/tra-vinh/diem-du-lich-tra-vinh-10.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Trà Vinh là tỉnh duyên hải đồng bằng sông Cửu Long mang nét đặc trưng cho sự giao thoa chuyển vùng từ đồng bằng sang vùng biển. Trà Vinh thu hút khách du lịch bởi cảnh quan thiên nhiên đa dạng với hệ thống kênh, rạch, sông nước, rừng ngập mặn, nhiều cồn, cù lao nằm giữa sông Tiền – sông Hậu cùng bãi biển đẹp chạy dài, tạo thành những danh thắng có một không hai. Trà Vinh còn là vùng đất gắn bó lâu đời của ba dân tộc Kinh, Khmer, Hoa nên đã hình thành một nền văn hóa đa sắc tộc với nhiều công trình kiến trúc độc đáo và các lễ hội truyền thống diễn ra quanh năm. Đây là điểm đến lý tưởng đối với du khách trong và ngoài nước có sở thích tìm hiểu các hoạt động văn hóa, lễ hội tâm linh.</p>
                    </div>
                  </div> 
                </div>

                <div id="Bạc Liêu" class="tabcontent">
                  <h3>Bạc Liêu</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/bac-lieu/khu-quan-am-phat-dai-me-nam-hai-bac-lieu-43-750x460.webp" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center">Bạc Liêu là tỉnh duyên hải Đồng bằng sông Cửu Long, nằm trên bán đảo Cà Mau phần lớn diện tích tiếp giáp với biển có tài nguyên thiên nhiên phong phú và đa dạng sinh học cao. Người dân Bạc Liêu hiền hoà, mến khách, có phong cách sống phóng khoáng đặc trưng của miền Nam bộ.  Khi nhắc đến du lịch Bạc Liêu người ta thường nhớ đến giai thoại công tử Bạc Liêu, nhớ làn điệu đàn ca tài tử ngọt ngào sâu lắng….. Vùng đất này còn có sự cộng hưởng, giao thoa về văn hóa, kiến trúc, tín ngưỡng và lễ hội truyền thống của 3 dân tộc Kinh – Hoa – Khmer, tất cả đã tạo cho Bạc Liêu một dấu ấn riêng rất thú vị.</p>
                    </div>
                  </div> 
                </div>

                <div id="Sóc Trăng" class="tabcontent">
                  <h3>Sóc Trăng</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/soc-trang/images.jfif" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center"> Sóc Trăng nằm cuối nguồn sông Hậu có nhiều ưu đãi từ thiên nhiên, đất đai màu mỡ, khí hậu thuận lợi, hệ sinh thái miệt vườn với nhiều loại cây trái cùng cảnh quan sông nước xanh tươi, trù phú… Bên cạnh đó, Sóc Trăng còn là nơi cộng cư của ba dân tộc Việt-Hoa-Khmer, với những nét văn hóa, ẩm thực riêng của mỗi dân tộc đã hình thành cho Sóc Trăng những nét văn hóa, lễ hội, ẩm thực độc đáo hấp dẫn du khách trong và ngoài nước.

                        Chúng tôi là người địa phương am hiểu và có nhiều kinh nghiệm để trả lời tất cả các câu hỏi của bạn như: Đến Sóc Trăng bằng cách nào, đến Sóc Trăng ăn gì, các điểm tham quan Sóc Trăng, đặc sản Sóc Trăng mua về làm quà, các khách sạn Sóc Trăng đạt chuẩn…</p>
                    </div>
                  </div> 
                </div>
                <div id="Cà Mau" class="tabcontent camau">
                  <h3>Cà Mau</h3>
                  <div class="row" style="margin-top: 20px;">
                    <div class="col-4">
                      <img src="images/ca-mau/Cm1.jpg" alt="" class="tabs">
                    </div>
                    <div class="col-8">
                      <p class="center"> Cà Mau là vùng đất thiên phú, có sức hút mạnh mẽ đối với du khách bởi vị trí địa lý khác biệt – Cực Nam của Tổ quốc. Nơi đây được thiên nhiên ưu ái là vùng đất lắm tôm nhiều cá, có rừng, có hệ sinh thái rừng ngập mặn, ngập ngọt…cùng với những nét văn hóa độc đáo của các dân tộc cùng sinh sống tạo nên sự phong phú, đa dạng về bản sắc văn hoá. Ngoài ra, người dân Cà Mau đậm chất phóng khoáng, hiền hòa, thân thiện và rất mến khách là những hướng dẫn viên du lịch tuyệt vời, để lại ấn tượng sâu sắc trong lòng du khách gần xa.</p>
                    </div>
                  </div> 
                </div>

               
                <div class="d-flex m-3"  >
                  <div>
                    <h1 class=" m-2">Giới Thiệu</h1>
                    <div class="row">
                      <div class="col-6 border-end">
                        <p>Du lịch miền Tây nên đi tỉnh nào thì thú vị, có nhiều trải nghiệm đáng nhớ? Bài viết dưới đây sẽ giúp những ai đang có dự định du lịch các tỉnh miền Tây Nam Bộ nắm được những thông tin cần thiết, từ đó lên kế hoạch phù hợp ghé thăm miền "sông nước hữu tình" này.
                          Trang thông tin du lịch Miền Tây – Cẩm Nang du lịch Miền Tây dành cho du khách muốn khám phá mảnh đất trù phú của Phương Nam. Du Lịch Miền Tây nổi tiếng với những cánh đồng lúa thẳng cánh cò bay, những dòng kênh xanh mát, vườn cây trĩu quả, người dân thật thà, mến khách và nét văn hóa ẩm thực vô cùng độc đáo, chắc chắn sẽ để lại cho du khách những kỷ niệm khó quên trong kỳ nghỉ của mình.
                        </p>
                      </div>
                      <div class="col-6">
                        <p>Miền Tây Nam Bộ là cách gọi quen thuộc của người dân Việt Nam đối với vùng đồng bằng sông Cửu Long hay vùng đồng bằng Nam Bộ. Nằm ở vùng cực Nam của Tổ Quốc, miền Tây có tất cả 12 tỉnh và 1 thành phố trực thuộc trung ương bao gồm: thành phố Cần Thơ, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Trà Vinh, Đồng Tháp, Hậu Giang, Sóc Trăng, An Giang, Bạc Liêu, Cà Mau, Kiên Giang cùng với hệ thống các hòn đảo lớn nhỏ tại Đảo Phú Quốc.</p>
                      </div>
                    </div>
                    
                  </div>
                  
                  

                </div> 
              </div>   
              <div class="container-fluid mt-3 d-flex justify-content-center" >
                <figure class="snip0016">
                  <img src="images/hinh4.png" alt="sample41"/>
                  <figcaption>
                    <h2>Ẩm thực</h2>
                    <p>So you can imagine your fears with less distraction.</p>
                    <a href="#"></a>
                  </figcaption>     
                </figure>
                <figure class="snip0016">
                  <img src="images/hinh6.png" alt="sample42"/>
                  <figcaption>
                    <h2>Vui Chơi</h2>
                    <p>At things that don't make sense, we couldn't react to a lot of life.</p>
                    <a href="#"></a>
                  </figcaption>     
                </figure>
                <figure class="snip0016">
                  <img src="images/hinh7.png" alt="sample43"/>
                  <figcaption>
                    <h2>Tận Hưởng</h2>
                    <p>That intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                    <a href="#"></a>
                  </figcaption>     
                </figure>
              </div>            
            </main>
</template>