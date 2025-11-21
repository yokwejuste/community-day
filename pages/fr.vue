<template>
  <div>
    <div>
      <!--==========================
          Header
        ============================-->
      <header id="header">
        <div class="container">
          <div id="logo" class="pull-left">
            <a href="#intro-2025" class="scrollto"
              ><img
                src="/white-aws-community-day.svg"
                alt="AWS Community Day Cameroon"
                title="AWS Community Day Cameroon"
            /></a>
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active">
                <a href="#intro-2025">{{ $t("home") }}</a>
              </li>
              <li>
                <a href="#schedule">{{ $t("agenda") }}</a>
              </li>
              <li>
                <a href="#venue">{{ $t("location") }}</a>
              </li>
              <li>
                <a href="#gallery">{{ $t("gallery") }}</a>
              </li>
              <li><a href="#supporters">Sponsors</a></li>
              <li>
                <a href="#speakers">{{ $t("speakers") }}</a>
              </li>
              <li>
                <a href="#organizers">{{ $t("organizers") }}</a>
              </li>
              <li>
                <a href="#mcs">{{ $t("mcs") }}</a>
              </li>
              <li>
                <a href="#volunteers">{{ $t("volunteers") }}</a>
              </li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#footer">Contact</a></li>
              <li>
                <a href="/" v-if="locale == 'fr'">EN</a>
                <a href="/fr" v-if="locale == 'en'">FR</a>
              </li>
            </ul>
          </nav>
          <!-- #nav-menu-container -->
        </div>
      </header>
      <!-- #header -->

      <!--==========================
          Intro Section
        ============================-->
      <section id="intro-2025" class="intro">
        <div class="intro-container wow fadeIn">
          <img
            src="/white-aws-community-day.svg"
            class="logo"
            title="AWS Community Day Cameroon"
          />
          <h4 class="mb-4 pt-4 pb-0">{{ $t("date") }}, Chariot Hotel, Buea</h4>
          <div class="text-center">
            <!-- <a
              href="https://docs.google.com/forms/d/1EUVFyK4U85jVJgSr_NmZPQAmZKrl9L04BCmB37hYQK8/edit"
              target="_blank"
              type="button"
              class="btn btn-lg btn-yellow"
              >{{ $t("register") }}</a
            > -->
            <a href="/2024" type="button" class="btn btn-lg btn-yellow">{{
              $t("lastYear")
            }}</a>
          </div>
        </div>
      </section>

      <main id="main">
        <!--==========================
            About Section
          ============================-->
        <section id="about">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center text-md-left">
                <h1>
                  {{ $t("countTitle1") }} <span>AWS</span>
                  {{ $t("countTitle2") }}
                </h1>
              </div>
              <div class="col-lg-6">
                <div id="js-clock">
                  <div class="js-clock w-container">
                    <div id="js-box" class="box">
                      <div id="js-clock-days" class="clock-number">
                        {{ days }}
                      </div>
                      <div id="js-clock-days-label" class="clock-label">
                        {{ days > 1 ? $t("days") : $t("day") }}
                      </div>
                    </div>
                    <div class="box"></div>
                    <div class="box">
                      <div id="js-clock-hours" class="clock-number">
                        {{ hours }}
                      </div>
                      <div class="clock-label">
                        {{ hours > 1 ? $t("hours") : $t("hour") }}
                      </div>
                    </div>
                    <div class="box">
                      <div id="js-clock-minutes" class="clock-number">
                        {{ minutes }}
                      </div>
                      <div class="clock-label">
                        {{ minutes > 1 ? "Minutes" : "Minute" }}
                      </div>
                    </div>
                    <div class="box">
                      <div class="box">
                        <div id="js-clock-seconds" class="clock-number">
                          {{ seconds }}
                        </div>
                        <div class="clock-label">
                          {{ seconds > 1 ? $t("seconds") : $t("second") }}
                        </div>
                      </div>
                    </div>
                    <div class="box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Schedule Section
            ============================-->
        <section id="schedule" class="section-with-bg">
          <div class="container wow fadeIn">
            <div class="section-header">
              <h2>{{ $t("agenda") }}</h2>
            </div>
            <!-- <div class="row justify-content-center">
              <div class="col-lg-6 d-none d-md-block">
                <div class="center">
                  <img
                    src="/2025/app-qr.png"
                    alt="QR Code"
                    style="max-width: 200px"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12">
                <div class="center">

                  <h2>{{ $t("agendaAppTitle") }}</h2>
                  <p style="color: white">
                    {{ $t("agendaAppText") }}
                  </p>
                  <NuxtLink
                    to="/agenda"
                    class="btn btn-lg btn-yellow"
                    target="”_blank”"
                    >{{ $t("agendaAppCTA") }}</NuxtLink
                  >
                  <a
                    href="./ratesessions?surelynotcached"
                    class="btn btn-lg btn-yellow"
                    id="rate-session-link"
                    target="”_blank”"
                    >Rate sessions</a
                  >
                </div>
              </div>
            </div> -->
          </div>
        </section>

        <!-- Agenda Component -->
        <TableComponent />

        <!-- ==========================
              Venue Section
            ============================-->
        <section id="venue" class="wow fadeIn">
          <div class="container-fluid">
            <div class="section-header">
              <h2>{{ $t("location") }}</h2>
            </div>

            <div class="row no-gutters">
              <div class="col-lg-6 col-md-12 col-12 venue-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.70697688833928!2d9.297098651448666!3d4.159004432405723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613194b3783f71%3A0x17aa6b0962b72240!2sChariot%20Hotel%20Buea!5e0!3m2!1sfr!2scm!4v1761448179914!5m2!1sfr!2scm"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="col-lg-6 col-md-12 col-12 venue-info">
                <div class="row justify-content-center">
                  <div class="col-11 col-lg-8">
                    <h3>Chariot Hotel</h3>
                    <p>Buea, Sud Ouest</p>
                    <p>Cameroun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid venue-gallery-container">
            <div class="row no-gutters">
              <!-- <div class="col-lg-3 col-md-3" v-for="(image, index) in venue_images" :key="index">
                  <div class="venue-gallery">
                    <a :href="image.src" class="venobox" data-gall="venue-gallery">
                      <img :src=image.src class="img-fluid gallery-image" />
                    </a>
                  </div>
                </div> -->
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-01.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-01.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-02.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-02.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-03.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-03.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-04.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-04.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-05.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-05.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-06.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-06.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venu-07.jpeg"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venu-07.jpeg"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="/2025/venue-gallery/venue-08.jpeg"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="/2025/venue-gallery/venue-08.jpeg"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==========================
            Gallery Section
          ============================-->
        <section id="gallery" class="wow fadeIn">
          <div class="container-fluid">
            <div class="section-header">
              <h2>{{ $t("gallery") }}</h2>
            </div>

            <div class="gallery-scroll">
              <div class="gallery-track">
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-01.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-07.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-02.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-03.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-08.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-04.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-05.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-09.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-06.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-10.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <!-- Duplicate for infinite scroll -->
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-01.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-07.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-02.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-03.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
                <div class="gallery-item">
                  <img
                    src="/2025/past-events/event-08.jpg"
                    class="gallery-image"
                    alt="Event Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Sponsors Section
            ============================-->
        <section id="supporters" class="section-with-bg wow fadeIn">
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("ourSponsors") }}</h2>
            </div>

            <!-- <h3 class="text-center">Platinum</h3> -->

            <!-- <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <center>
                      <a
                        href="https://www.arrow.com/globalecs/pl/producenci/netapp/"
                        target="_blank"
                      >
                        <img
                          src="/2025/img/sponsors/NetApp_Arrow.png"
                          class="img-fluid"
                          style="display: block; max-width: 50% !important"
                        />
                      </a>
                    </center>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a href="https://www.n-ix.com/" target="_blank">
                      <img
                        src="/2025/img/sponsors/N-iX.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://www.pmi.com/markets/poland/pl/about-us/overview"
                      target="_blank"
                    >
                      <img
                        src="/2025/img/sponsors/IT_HUB.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a href="https://chaosgears.com/" target="_blank">
                      <center>
                        <img
                          class="img-fluid"
                          src="/2025/img/sponsors/chaosgears.png"
                          style="display: block; max-width: 70% !important"
                        />
                      </center>
                    </a>
                  </div>
                </div>
              </div> -->

            <h3 class="text-center">{{ $t("gold") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div
                v-for="sponsor in goldSponsors"
                class="col-lg-4 col-md-4 col-xs-6 mb-3"
              >
                <div class="supporter-logo">
                  <a :href="sponsor.url" target="_blank">
                    <img
                      :src="sponsor.logo"
                      :alt="sponsor.name"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- <h3 class="text-center">{{ $t("silver") }}</h3> -->

            <!-- <div class="row supporters-wrap clearfix justify-content-center">
              <div
                v-for="sponsor in silverSponsors"
                class="col-lg-4 col-md-4 col-xs-6 mb-3"
              >
                <div class="supporter-logo">
                  <a :href="sponsor.url" target="_blank">
                    <img
                      :src="sponsor.logo"
                      :alt="sponsor.name"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div> -->

            <h3 class="text-center">{{ $t("community") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div
                v-for="sponsor in communitySponsors"
                class="col-lg-4 col-md-4 col-xs-6 mb-3"
              >
                <div class="supporter-logo">
                  <a :href="sponsor.url" target="_blank">
                    <img
                      :src="sponsor.logo"
                      :alt="sponsor.name"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <h3 class="text-center">{{ $t("communityPartners") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div
                v-for="sponsor in communityPartners"
                class="col-lg-2 col-md-3 col-xs-6 mb-3"
              >
                <div class="supporter-logo">
                  <a :href="sponsor.url" target="_blank">
                    <img
                      :src="sponsor.logo"
                      :alt="sponsor.name"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              class="mt-8 pt-5 text-center text-xl font-medium"
              style="font-size: 1.2rem; font-weight: 700"
            >
              <p>
                {{ $t("interestedSponsor") }}
                <NuxtLink
                  to="https://bit.ly/aws-cd-cfs-2025"
                  target="_blank"
                  class="text-orange-400 hover:text-orange-600"
                  >{{ $t("applySponsor") }}</NuxtLink
                >
              </p>
            </div>
          </div>
        </section>

        <!--==========================
              Speakers Section
            ============================-->
        <section
          id="speakers"
          class="wow fadeIn"
          style="visibility: visible; animation-name: fadeIn"
        >
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("speakers") }}</h2>
            </div>

            <!-- <h2 class="text-center">{{ $t("coming") }}</h2> -->

            <div
              style="text-align: center; margin-top: -1rem; margin-bottom: 2rem"
            >
              <h4 style="color: #ff9b00; font-weight: bold; font-size: larger">
                {{ $t("keynoteSpeakers") }}
              </h4>
            </div>
            <div class="row">
              <div v-if="windowWidth > 991" class="col-lg-3 col-6"></div>
              <div v-for="person in knspeakers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Speaker"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.role }}</p>
                    <p>{{ person.company }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section-header"
              style="margin-bottom: 4rem; margin-top: 1.5rem"
            ></div>
            <div class="row">
              <div v-for="person in speakers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Speaker"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.role }}</p>
                    <p>{{ person.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Organizers Section
            ============================-->
        <section
          id="organizers"
          class="wow fadeIn"
          style="visibility: visible; animation-name: fadeIn"
        >
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("organizers") }}</h2>
            </div>

            <div class="row">
              <div v-for="person in organizers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Organizer"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.group }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==========================
              MCs Section
            ============================-->
        <section
          id="mcs"
          class="wow fadeIn"
          style="visibility: visible; animation-name: fadeIn"
        >
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("mcs") }}</h2>
            </div>

            <!-- <h2 class="text-center">{{ $t("coming") }}</h2> -->

            <div class="row">
              <div v-if="windowWidth > 991" class="col-lg-3 col-6"></div>
              <div v-for="person in mcs" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Speaker"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.group }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==========================
              Volunteers Section
            ============================-->
        <div id="volunteers">
          <section id="venue" class="wow fadeIn">
            <div class="container-fluid">
              <div class="section-header">
                <h2>{{ $t("volunteers") }}</h2>
              </div>

              <div style="display: flex; justify-content: center">
                <NuxtLink to="/volunteers" class="btn btn-lg btn-yellow">{{
                  $t("allVolunteers")
                }}</NuxtLink>
              </div>
            </div>
          </section>
        </div>

        <!--==========================
              FAQ Section
            ============================-->
        <section id="faq" class="wow fadeIn">
          <div class="container">
            <div class="section-header">
              <h2>FAQ</h2>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-9">
                <ul id="faq-list">
                  <li>
                    <a
                      data-toggle="collapse"
                      class="header collapsed"
                      href="#faq1"
                      ><span>{{ $t("whatAWS") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq1" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("whatAWSText") }}
                      </p>
                      <p>
                        {{ $t("whatAWSMore") }}
                        <a
                          class="text-decoration-none"
                          href="https://aws.amazon.com/events/community-day/"
                          >AWS Community Day</a
                        >
                        {{ $t("whatAWSMore2") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq2"
                      class="header collapsed"
                      ><span>{{ $t("whoAttend") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq2" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("whoAttendText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq3"
                      class="header collapsed"
                      ><span>{{ $t("registration") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq3" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("registrationText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq4"
                      class="header collapsed"
                      ><span>{{ $t("fees") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq4" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("feesText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq5"
                      class="header collapsed"
                      ><span>{{ $t("wherePlace") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq5" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("wherePlaceText") }}
                        <!-- <a
                          href="https://yango.com/en_cm/city/douala/"
                          target="_blank"
                          >Yango</a
                        > -->
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq6"
                      class="header collapsed"
                      ><span>{{ $t("materials") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq6" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("materialsText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq7"
                      class="header collapsed"
                      ><span>{{ $t("previousEditions") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq7" class="collapse" data-parent="#faq-list">
                      <p>{{ $t("previousEditionsText") }}</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq8"
                      class="header collapsed"
                      ><span>{{ $t("becomeSponsor") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq8" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("becomeSponsorText") }}
                        <a href="mailto:awsugdouala@gmail.com"
                          >awsugdouala@gmail.com</a
                        >
                        {{ $t("becomeSponsorText2") }}
                        <a href="cutt.ly/awsugcmr-sponsor"
                          >cutt.ly/awsugcmr-sponsor</a
                        >.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="subscribe" class="pt-4">
          <div class="container wow fadeIn pb-5 pt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-header mb-3">
                  <h2>{{ $t("brought") }}</h2>
                </div>
              </div>
              <div class="col-12 mt-3 mb-5">
                <div class="row">
                  <div
                    v-for="group in userGroups"
                    style="display: flex; justify-content: center"
                    class="col-12 mb-4 col-md-4 mt-2"
                  >
                    <div>
                      <img
                        :src="group.logo"
                        alt="TheEvent"
                        class="user-group-logo"
                      />
                      <p class="pb-1">
                        <strong>{{ group.name }}</strong>
                      </p>
                      <div style="margin-top: -1rem" class="social-linkss">
                        <a
                          :href="group.social.linkedin"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a
                          :href="group.social.twitter"
                          target="_blank"
                          class="twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          :href="group.social.meetup"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-meetup"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script setup type="ts">
import TableComponent from '~/components/2025/TableComponent.vue';
import { use2025Utils } from '~/composables/use2025Utils';
import { mcs } from '~/data/2025/mcs';
import { organizers } from '~/data/2025/organizers';
import { knspeakers, speakers } from '~/data/2025/speakers';
import { communityPartners, communitySponsors, goldSponsors } from '~/data/2025/sponsors';
import { userGroups } from '~/data/2025/userGroups';

definePageMeta({
  layout: 'home'
})

useHead({
  title: 'AWS Community Day Cameroun 2025 | Conférence Cloud Buea',
  meta: [
    { name: 'description', content: 'Rejoignez AWS Community Day Cameroun 2025 au Chariot Hotel Buea. Apprenez le cloud computing, les services AWS et réseautez avec des professionnels. 22 novembre 2025.' },
    { name: 'keywords', content: 'AWS, Community Day, Cameroun, Cloud Computing, Buea, Conférence, Amazon Web Services, Événement Tech, DevOps, Serverless, Machine Learning, Formation Cloud' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'AWS Community Day Cameroun 2025 | Première Conférence Cloud' },
    { property: 'og:description', content: 'Rejoignez la plus grande conférence cloud AWS au Cameroun. 22 novembre 2025 au Chariot Hotel Buea. Apprenez des experts AWS et réseautez avec des professionnels.' },
    { property: 'og:image', content: 'https://communityday.awscmr.com/white-aws-community-day.svg' },
    { property: 'og:url', content: 'https://communityday.awscmr.com/fr' },
    { property: 'og:type', content: 'event' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:title', content: 'AWS Community Day Cameroun 2025 | Première Conférence Cloud' },
    { name: 'twitter:description', content: 'Rejoignez la plus grande conférence cloud AWS au Cameroun. 22 novembre 2025 au Chariot Hotel Buea.' },
    { name: 'twitter:image', content: 'https://communityday.awscmr.com/white-aws-community-day.svg' },
  ],
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    { rel: 'canonical', href: 'https://communityday.awscmr.com/fr' },
    { rel: 'alternate', hreflang: 'en', href: 'https://communityday.awscmr.com/' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://communityday.awscmr.com/fr' }
  ]
})

const { days, hours, minutes, seconds, windowWidth, locale, t, openLink } = use2025Utils();
</script>

<style>
@import "~/assets/css/gallery.css";

.user-group-logo {
  height: 6rem;
  width: auto;
  object-fit: contain;
}
</style>
