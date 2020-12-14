<template>
    <div>
        <section class="about-us mt-5 mb-5">      
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <div class=" wow fadeInLeft">
                        <img src="mechanics.png" alt="Mechanics" width="350px">
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6" >
                    <div class="about-us-content  wow fadeInUp">
                        <h1>Održavanje <br>postaje efikasnije</h1>
                        <p>Olakšajte održavanje vaših vozila, uz aplikaciju koja nudi</p>
                        <div class="featured-list row">
                            <div class="col-lg-12 col-12 wow fadeInUp">
                                <ul class="wow fadeInUp">
                                    <li><i class="far fa-arrow-right"></i>Dokumentovanje popravki</li>
                                    <li><i class="far fa-arrow-right"></i>Podsetnik registracije</li>
                                    <li><i class="far fa-arrow-right"></i>Deljenje istorije vozila</li>
                                    <li><i class="far fa-arrow-right"></i>Specificne popravke</li>
                                    <li><i class="far fa-arrow-right"></i>Redovno odrzavanje</li>
                                    <li><i class="far fa-arrow-right"></i>Podsetnik aktivnosti</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- /.about-us section-padding -->
    <footer class="footer-wrapper footer-section" id="footer">
        <div class="footer-copyright-section">
            <div class="container">
                <div class="row">
                    <div class="col-4 text-left pt-3">
                        <p>© Autorksa prava <a href="#">Đorđe Milošević</a></p>
                    </div>
                    <div class="col-4 text-center">
                                 <img src="car2.png" class="wow fadeInRightBig" alt="Car">
                    </div>
                    <div class="col-4 text-center">
                            <a href="" data-toggle="modal" data-target="#uslovikoriscenja">Uslovi Korišćenja</a> &bull;
                            <a href="" data-toggle="modal" data-target="#prijavigresku">Prijavi Grešku</a> &bull;
                            <a href="" data-toggle="modal" data-target="#politika">Politika Privatnosti</a> &bull;
                            <a href="" data-toggle="modal" data-target="#kontakt">Kontakt</a>
                    </div>
                </div>
            </div>
        </div> <!-- /.footer-copyright-section -->
    </footer> <!-- /.footer-wrapper footer-section -->
    </div>
</template>
<script>
export default {
    name: 'welcome',
}
</script>
<style scoped>
@import url('../../public/assets/css/animate.css');  
</style>