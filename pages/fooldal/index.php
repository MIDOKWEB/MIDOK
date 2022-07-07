<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="apple-touch-icon" sizes="57x57" href="../../favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../../favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../favicon/favicon-16x16.png">
    <link rel="manifest" href="../../favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Miskolci diákönkormányzat hivatalos oldala">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <script src="https://kit.fontawesome.com/58a9dcf95a.js" crossorigin="anonymous"></script>
    <title>MIDÖK</title>
</head>

<body>
    <div id="app">
        <header class="navbar">
            <nav class="container-lg">
                <a href="../fooldal" class="logo"><img src="../../img/logo.png" alt="Logó" title="Logó" id="logo"></a>
                <a id="green" href="#section1" class="navbar-brand">Hírek</a>
                <a id="orange" href="#section2" class="navbar-brand">Elnökség</a>
                <a id="red" href="#section3" class="navbar-brand">Galéria</a>
                <a id="right" href="#section1" class="navbar-brand"
                    :style="{'right': rightPosSize + 'px'}">Bejelentkezés</a>
                <div id="weather-variable" class="weather-widget"><i :class="weatherIcon"
                        :style="{color: activeColor}"></i><span id="weather-widget"
                        style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; color: rgb(90, 132, 247); margin-left: -1px ;display: inline">&nbsp;
                        {{ temp }}°C</span>
                </div>
                <a v-on:click="toggleDropdown()" id="icon"><i class="fa-solid fa-bars fa-2x"></i></a>
            </nav>
        </header>
        <div class="dropdown" id="dropdown" v-show="dropDownFlag">
            <a id="green" href="#section1" class="navbar-brand">Hírek</a>
            <a id="orange" href="#section2" class="navbar-brand">Elnökség</a>
            <a id="red" href="#section3" class="navbar-brand">Galéria</a>
            <a id="blue" href="#section1" class="navbar-brand">Bejelentkezés</a>
            <div class="weather-widget" :style="{bottom: dropDownFlag ? '3.5px' : 'unset'}"><i :class="weatherIcon"
                    :style="{color: activeColor}"></i><span id="weather-widget"
                    style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; color: rgb(90, 132, 247)">&nbsp;
                    {{ temp }}°C</span></div>
        </div>
        <div class="green">
            <b class="anchor" id="section1"></b>
            <h1>Hírek</h1>
            <div class="news">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://minap.hu/cikk/balozni-hivtak-miskolc-diaksagat" target="_blank">
                                    <h3>BÁLOZNI HÍVTÁK MISKOLC DIÁKSÁGÁT</h3>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://minap.hu/cikk/balozni-hivtak-miskolc-diaksagat" target="_blank">
                                    <img src="https://minap.hu/sites/default/files/styles/gallery/public/2022-06/midiok_diakbal_220624ml-21.jpg?itok=2hrzu5AA"
                                        alt="">
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="orange">
            <b class="anchor" id="section2"></b>
            <div class="registerform" style="text-align: center">
                <form action="../../php/registration_code.php" method="POST">
                    <h1>Regisztráció</h1>
                    <input type="text" name="email" placeholder="E-mail">
                    <br>
                    <input type="text" name="username" placeholder="Felhasználónév">
                    <br>
                    <input type="password" name="password" placeholder="Jelszó">
                    <br>
                    <button type="submit" name="create">Regisztráció</button>
                </form>
            </div>
            <div class="loginform" style="text-align: center">
                <form action="../../php/login_code.php" method="POST">
                    <h1>Bejelentkezés</h1>
                    <input type="text" name="username" placeholder="Felhasználónév">
                    <br>
                    <input type="password" name="password" placeholder="Jelszó">
                    <br>
                    <button type="submit" name="create">Bejelentkezés</button>
                </form>
                <a href="../../php/logout.php">Kijelentkezés</a>
            </div>
        </div>
        <div class="red">
            <b class="anchor" id="section3"></b>
            <h1>Galéria</h1>
            <!-- Slideshow container -->
            <div class="slideshow-container">

                <!-- Full-width images with number and caption text -->
                <div class="mySlides">
                    <img class="pic" src="../../img/csapatepito/1.JPG">
                </div>

                <div class="mySlides">
                    <img class="pic" src="../../img/csapatepito/2.jpg">
                </div>

                <div class="mySlides">
                    <img class="pic" src="../../img/csapatepito/3.jpg">
                </div>

                <!-- Next and previous buttons -->
                <a class="prev" @click="plusSlides(-1)"><i class="fa-solid fa-arrow-left fa-2x"></i></a>
                <a class="next" @click="plusSlides(1)"><i class="fa-solid fa-arrow-right fa-2x"></i></a>
                <a class="fullscreen" @click="getGalleryUrl()"><i :class="slideshowIcon"></i></a>
            </div>
            <div class="padding"></div>
        </div>
        <button class="topBtn" v-on:click="scrollToTop()" :class="{active: scrollButtonActive}">☝️</button>
        <footer class="footer">
            <div id="footer-container">
                <table>
                    <tbody>
                        <tr>
                            <td class="white" id="custometd">Keress minket:</td>
                            <td><a href="https://instagram.com/miskolcvarosidiakonkormanyzat?igshid=YmMyMTA2M2Y="
                                    target="_blank"><i class="fab fa-instagram fa-2x"></i></a></td>
                            <td><a href="https://www.facebook.com/Miskolcvarosidiakonkormanyzat/" target="_blank"><i
                                        class="fab fa-facebook fa-2x"></i></a></td>
                            <td>
                                <a href=" mailto:midok@gmail.com "></i><i class="far fa-envelope fa-2x"></i></a>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <p class="white">© Copyright 2022 MIDÖK</p>
        </footer>
    </div>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="../../vue/main.js"></script>
</body>

</html>