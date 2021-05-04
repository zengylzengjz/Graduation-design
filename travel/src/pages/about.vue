<template>
   <div>123
       <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>

     <div id="company1">
       <div class="container">

         <h2 class="animated">ABOUT OUR COMPANY</h2>

         <div class="title1 animated">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod <br>tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

         <br>

         <div class="row">
           <div class="col-sm-12 col-md-6 col-md-push-6">
             <div class="content">
               <div class="txt1 animated undefined visible">TRAVEL AGENCY</div>
               <div class="txt2 animated undefined visible">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</div>

               <div class="distance1 animated fadeInUp visible" data-animation="fadeInUp" data-animation-delay="0">
                 <div class="txt">Flights</div>
                 <div class="bg">
                   <div class="animated-distance" data-num="94" data-duration="1300" data-animation-delay="0" style="width: 94%;"><span>94%</span></div>
                 </div>
               </div>

               <div class="distance1 animated fadeInUp visible" data-animation="fadeInUp" data-animation-delay="100">
                 <div class="txt">Hotels</div>
                 <div class="bg">
                   <div class="animated-distance" data-num="87" data-duration="1300" data-animation-delay="100" style="width: 87%;"><span>87%</span></div>
                 </div>
               </div>

               <div class="distance1 animated fadeInUp visible" data-animation="fadeInUp" data-animation-delay="200">
                 <div class="txt">Cars</div>
                 <div class="bg">
                   <div class="animated-distance" data-num="45" data-duration="1300" data-animation-delay="200" style="width: 45%;"><span>45%</span></div>
                 </div>
               </div>

               <div class="distance1 animated fadeInUp visible" data-animation="fadeInUp" data-animation-delay="300">
                 <div class="txt">Cruises</div>
                 <div class="bg">
                   <div class="animated-distance" data-num="51" data-duration="1300" data-animation-delay="300" style="width: 51%;"><span>51%</span></div>
                 </div>
               </div>

             </div>
           </div>
           <div class="col-sm-12 col-md-6 col-md-pull-6">
             <img src="../assets/company1.png" alt="" class="img1 img-responsive animated undefined visible">
           </div>
         </div>
       </div>
     </div>


     <!-- START CONTACT FORM-->
     <section id="contact" class="contact_area section-padding">
       <div class="container">
         <div class="row">
           <div class="col-md-12 aos-init" data-aos="fade-up">
             <div class="section-title text-center">
               <span>Contact Us</span>
               <h2>If You Have any Question <br> Drop a Message</h2>
             </div>
           </div><!-- END COL -->
         </div><!-- END ROW -->

         <div class="row align-items-center">
           <div class="col-lg-7 col-sm-12 col-xs-12 d-block mx-auto aos-init" data-aos="fade-up">
             <div class="contact">
               <form id="contact-form" method="post" enctype="multipart/form-data">
                 <div class="row">
                   <div class="form-group col-md-6">
                     <input type="text" name="name" class="form-control" id="first-name" placeholder="Name" required="required">
                   </div>
                   <div class="form-group col-md-6">
                     <input type="email" name="email" class="form-control" id="first-email" placeholder="Email" required="required">
                   </div>
                   <div class="form-group col-md-12">
                     <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required="required">
                   </div>
                   <div class="form-group col-md-12">
                     <textarea rows="6" name="message" class="form-control" id="description" placeholder="Your Message" required="required"></textarea>
                   </div>
                   <div class="col-md-12">
                     <div class="actions text-left">
                       <input type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-lg btn-contact-bg" title="Submit Your Message!">
                     </div>
                   </div>
                 </div>
               </form>
             </div>
           </div><!-- END COL -->

           <div class="col-lg-5 col-sm-12 col-xs-12 d-block mx-auto">
             <div class="contact_address text-left">
               <div class="single-contact-info">
                 <i class="iconfont icon-map"></i>
                 <p>2369 Robinson Lane Jackson<br> OH 45640</p>
               </div>

               <div class="single-contact-info">
                 <i class="icofont-headphone-alt"></i>
                 <p>
                   (+1) 740-395-3829<br>
                   (+1) 740-982-9821
                 </p>
               </div>

               <div class="single-contact-info">
                 <i class="icofont-ui-email"></i>
                 <p>
                   help@Laveria.com<br>
                   info@Laveria.com
                 </p>
               </div>

             </div>
           </div><!-- END COL -->


         </div><!--- END ROW -->
       </div><!--- END CONTAINER -->
     </section>
     <!-- END CONTACT FORM -->

   </div>
</template>
<script>
import Header from "../components/header"
export default {
    data(){
    return{
      Iscolor:true,
      Status:true,
    }
    },
    components:{
       Header
    }
}
</script>
<style scoped lang="less">
.line{
  height: 80px;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#company1 {
  padding-bottom: 0px;
  padding-top: 30px;
  background: none;
  color: #959595;

  .img1 {
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 10;
    margin-bottom: -40px;
  }

  .container {
    position: relative;
    min-width: 320px;

    h2 {
      font-family: 'Raleway';
      font-weight: 600;
      font-size: 42px;
      color: #464646;
      background: none;
      line-height: 1.1;
      padding: 20px 0 20px;
      margin: 0 0 10px 0;
      position: relative;
      text-align: center;
      text-transform: uppercase;
    }

    .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    .title1 {
      text-align: center;
      font-size: 18px;
      color: #636363;
      padding-bottom: 15px;
    }

    .content {
      padding-bottom: 30px;
      padding-top: 20px;


      .txt1 {
        font-size: 21px;
        text-transform: uppercase;
        font-weight: 500;
        color: #464646;
        padding-bottom: 20px;
      }
      .txt2 {
        font-weight: 400;
        padding-bottom: 30px;
        color: #636363;
      }

      .distance1 {
        position: relative;
        padding-bottom: 20px;

        .txt {
          font-weight: 600;
          padding-bottom: 5px;
        }

        .bg {
          background: #ebebeb;
          position: relative;
          height: 13px;

          .animated-distance {
            background: #fc5b62;
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
          }

          span {
            color: #fc5b62;
            position: absolute;
            top: -25px;
            right: -10px;
            font-weight: 700;
          }
        }
      }
      .txt {
        color: #464646;
      }
    }

    .col-md-push-6 {
      left: 50%;
    }
  }
}

.section-padding{
  padding: 100px 0;
  color: #777;
}
.container{
  box-sizing: border-box;
  max-width: 960px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
  margin-left: -15px;
}
.col-md-12{
  flex: 0 0 100%;
}
.col-xl-auto{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.section-title{

  span {
    color: #fc5b62;
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
  }

  h2 {
    margin-top: 0;
    position: relative;
    text-transform: capitalize;

  }


}
.col-md-pull-6 {
  right: 50%;
}
h1, h2, h3, h4, h5 {
  font-family: 'Quicksand', sans-serif;
  color: #404040;
  font-weight: 700;
  line-height: normal;
}

.h2, h2{
  font-size: 2rem;
}

.text-center{
  text-align: center!important;
}

.align-items-center{
  align-content: center !important;
}

.d-block{
  display: block!important;
}
.ml-auto, .mx-auto{
  margin-left: auto!important;
}
.mr-auto, .mx-auto{
  margin-right: auto!important;
}
.col-lg-7{
  flex: 0 0 58.3%;
  max-width: 58.3%;
}

form{
  display: block;
  margin-top: 0em;
}

.form-group{
  margin-bottom: 1rem;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px
}

.col-md-12{
  flex: 0 0 100%;
  max-width: 100%;
}

.col-lg-5{
  flex: 0 0 41.6%;
  max-width: 41.6%;
}

.contact .form-control{
  padding: 22px 15px;
  border-radius: 0px;
  background-color: #f1f6f9;
  border-color: #f1f6f9;
  margin-bottom: 15px;
}

button,input,optgroup,select,textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit
}

.contact_address{
  margin-bottom: 30px;
  padding-left: 30px;
}
.contact_address i{
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fc5b62;
  color: #fff;
  border-radius: 50%;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
  float: left;
  margin-right: 24px;
  margin-top: 8px;
}
[class^="icofont-"], [class*=" icofont-"]
{
  font-family: 'IcoFont' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.single-contact-info{
  margin-bottom: 10px;
  overflow: hidden;
}

.contact textarea {
  background: #fff none repeat scroll 0 0;
  border-radius: 0px;
  box-shadow: none;
  padding: 10px;
  height: 100px;
}

textarea {
  overflow: auto;
  resize: vertical
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

#submitButton.btn-contact-bg {
  background-color: #fc5b62;
  border: 1px solid #fc5b62;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  padding: 13px 30px;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer
}

button,input {
  overflow: visible
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}


.btn-group-lg>.btn,.btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem
}

*,::after,::before {
  box-sizing: border-box
}

.text-left{
  text-align: left!important;
}

</style>
