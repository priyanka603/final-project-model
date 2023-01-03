<?php

include 'components/connect.php';

if(isset($_COOKIE['user_id'])){
   $user_id = $_COOKIE['user_id'];
}else{
   $user_id = '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>about</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

   <link rel="stylesheet" href="css/style.css">

</head>
<body>

<?php include 'components/user_header.php'; ?>

<!-- about section starts  -->

<section class="about">

   <div class="row">

      <div class="image">
         <img src="images/about-img.svg" alt="">
      </div>

      <div class="content">
         <h3>why choose us?</h3>
         <p>In the 21st century, the acceptance of disabilities needs to be promoted among teaching and professional staff and accessibility guidelines need to be developed according to the needs of students, based upon their real-life experiences. Disability is no more a problem as there are many tools, teaching methods and design standards that make everything accessible to the disabled.</p>
         <a href="http://localhost/final%20project%20model/courses.php" class="inline-btn">our courses</a>
      </div>

   </div>

   <div class="box-container">

      <div class="box">
         <i class="fa fa-music"></i>
         <div>
            <h3>Music Therapy</h3>
         </div>
      </div>

      <div class="box">
         <i class="fas fa-pen"></i>
         <div>
            <h3>Art Therapy</h3>
         </div>
      </div>

      <div class="box">
         <i class="fa fa-child"></i>
         <div>
            <h3>Dance Therapy</h3>
         </div>
      </div>

      <div class="box">
         <i class="fas fa-atom"></i>
         <div>
            <h3>Yoga Therapy</h3>
         </div>
      </div>

   </div>

</section>

<!-- about section ends -->

<!-- reviews section starts  -->

<section class="reviews">

   <h1 class="heading">Parent's reviews</h1>

   <div class="box-container">

      <div class="box">
         <p>With the help of VIDHYA my daughter fell in love with studies.</p>
         <div class="user">
            <img src="images/4.png" alt="">
            <div>
               <h3>Jessica Jones</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="box">
         <p>I thought pushing children like my son, with special needs, to online learning could turn into a big challenge but VIDHYA made it easy and fun for him.</p>
         <div class="user">
            <img src="images/3.png" alt="">
            <div>
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="box">
         <p>With the help of artistic therapy, my daughter's anxiety levels have lowered and she is now more happy and cheerful than before.</p>
         <div class="user">
            <img src="images/pic-5.jpg" alt="">
            <div>
               <h3>Natasha Romanoff</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

      <div class="box">
         <p>I am so thankful for VIDHYA and its great tutors.</p>
         <div class="user">
            <img src="images/pic-6.jpg" alt="">
            <div>
               <h3>john deo</h3>
               <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
               </div>
            </div>
         </div>
      </div>

   </div>

</section>

<!-- reviews section ends -->










<?php include 'components/footer.php'; ?>

<!-- custom js file link  -->
<script src="js/script.js"></script>
   
</body>
</html>