<template>
  <!-- Site footer -->
    <Footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Acerca de Proto K.K.</h6>
            <p class="text-justify">De estudiante a estudiante  conocemos la necesidad y dificultad de conseguir las herramientas electrónicas a tiempo en Cancún para completar las prácticas de las materias  de electricidad, analógica  y digital. Así que tenemos la misión de ayudar a que más estudiantes y quienes estén interesados en conseguir componentes, los puedan tener a su disposición de manera rápida, eficiente y fácilmente.</p>
          </div>

          

          <div class="col-xs-6 col-md-3">
            <h6>Contáctanos</h6>
            <ul class="footer-links">
              <li>Universidad del Caribe</li>
              <l1>Esquina Fraccionamiento, Tabachines, 77528 Cancún, Q.R.</l1>
              <li>+52 998 346 8366</li>
              <li>Proto K.K.</li>
            </ul>
          </div>


          <div class="col-xs-6 col-md-3">
            <h6>Oferta</h6>
            <ul class="footer-links">
              <li>Paquetes hechos a tu medida</li>
                <h6>Horarios de atención</h6>
                <li>Lunes a viernes de 9:00AM-20:00PM</li>
            </ul>
          </div>


        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#">Proto K.k</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li> 
              <li><a class="whatsapp" href="#"><i class="fa fa-whatsapp"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </Footer>
</template>

<style scoped>
.site-footer
{
  background:linear-gradient(180deg, #0288D1,  #0097A7);
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#fff;
}
.site-footer hr
{
  border-top-color:#fff;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color: white;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:white
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}

.social-icons a.whatsapp:hover
{
  background-color:green
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>


 
