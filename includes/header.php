<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <![endif]-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NuView Treatment Center</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="assets/images/favicon.png" />
    <!-- Embeded fonts Starts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- Embeded fonts Ends -->

    <link rel="stylesheet" href="assets/SCSS/main-style.min.css">
    <!-- <style>
        <?php //include('assets/css/main-style.min.css')?>
    </style> -->
    <!-- <?php //define("BASE_URL", "http://localhost:8080/nuview-frontend"); ?> -->
    <?php define("BASE_URL", "https://nuview-test.mystagingwebsite.com/html/"); ?>
</head>

<body>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div class="top-header">
        
    </div>
    <header>
        <nav class="navbar">
            <div class="container">
                <a class="navbar-logo" href="index.php"><img src="<?php echo BASE_URL; ?>/assets/images/logo.svg"
                        width="192" height="48" alt=""></a>
                <span class="navbar-menu-toggle"></span>
                <div class="navbar-nav">
                    <ul class="navbar-items">
                        <li class="navbar-item dropdown">
                            <a class="navbar-link" aria-current="page" href="#">About Us </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="about.php">Who We Are</a></li>
                                <li><a class="dropdown-item" href="our-staff.php">Our Staff</a></li>
                                <li><a class="dropdown-item" href="our-facility.php">Our Facility</a></li>
                                <li><a class="dropdown-item" href="faq.php">FAQ</a></li>
                                <li><a class="dropdown-item" href="admission.php">Admission</a></li>
                                <li><a class="dropdown-item" href="insurance.php">Insurance</a></li>
                                <li><a class="dropdown-item" href="testimonial.php">Testimonials</a></li>
                            </ul>
                        </li>
                        <li class="navbar-item dropdown">
                            <a class="navbar-link" href="#">What We Treat</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="anxiety-treatment.php">Anxiety Treatment </a></li>
                                <!-- <li><a class="dropdown-item" href="#">Mental Health Treatment Los Angeles </a></li>
                                <li><a class="dropdown-item" href="#">Substance Abuse Treatment</a></li> -->
                            </ul>
                        </li>
                        <li class="navbar-item dropdown">
                            <a class="navbar-link" href="#">Our Programs</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="iop.php">IOP Los Angeles</a></li>
                                <li><a class="dropdown-item" href="php.php">PHP Los Angeles</a></li>
                                <!-- <li><a class="dropdown-item" href="php.php">Telehealth</a></li>
                                <li><a class="dropdown-item" href="php.php">Evening Track</a></li> -->
                            </ul>
                        </li>
                        <!-- <li class="navbar-item dropdown">
                            <a class="navbar-link" href="#">Rehab Guide</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Drug Rehab </a></li>
                                <li><a class="dropdown-item" href="#">Outpatient Drug rehab</a></li>
                                <li><a class="dropdown-item" href="#">Inpatient Rehab Vs. Outpatient Rehab</a></li>
                                <li><a class="dropdown-item" href="#">Residential vs Outpatient Programs</a></li>
                                <li><a class="dropdown-item" href="#">Benefits of Outpatient Rehab</a></li>
                                <li><a class="dropdown-item" href="#">How to Choose Rehab</a></li>
                                <li><a class="dropdown-item" href="#">Cost of Rehab</a></li>
                                <li><a class="dropdown-item" href="#">How to Pay For Rehab</a></li>
                            </ul>
                        </li> -->
                        <li class="navbar-item">
                            <a class="navbar-link" href="#">Resources</a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-link" href="blog-list.php">Blog</a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-link" href="contact.php">Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="cta cta-icon"><span><img src="assets/images/icons/phone.svg" width="16" height="16"
                            alt=""></span>(323) 307-7997</a>
            </div>
        </nav>
    </header>