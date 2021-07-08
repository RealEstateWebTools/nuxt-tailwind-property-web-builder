<template>
    <div class="index relative">
        <header class="header pt-5 pb-5">
            <div class="container flex justify-between px-6">
                <div class="phone flex items-center">
                    <div class="mobile-icon text-white text-2xl">
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                    </div>
                    <div class="phone-number ml-4 text-2xl text-white">
                        +907 200 8534
                    </div>
                </div>
                <form
                    class="search border border-white"
                    action="#"
                    method="post"
                >
                    <input
                        type="text"
                        placeholder="Subscribe"
                        class="search__input w-64 outline-none placeholder-white"
                        name="Subscribe"
                        required=""
                    />
                    <button
                        class="search__btn p-2 border-l border-white text-xl"
                    >
                        <i
                            class="fa fa-search text-white"
                            aria-hidden="true"
                        ></i>
                    </button>
                </form>
            </div>
        </header>
        <nav class="nav relative">
            <div class="container flex justify-between items-center px-6">
                <a
                    class="navbar-brand uppercase font-semibold text-5xl"
                    href="index.html"
                    >mod homes</a
                >
                <ul class="nav-links flex items-center">
                    <li class="nav-link nav-link--active">
                        <a class="font-semibold text-2xl" href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a class="font-semibold text-2xl" href="#">Services</a>
                    </li>
                    <li class="nav-link">
                        <a class="font-semibold text-2xl" href="#">Projects</a>
                    </li>
                    <li class="nav-link dropdown">
                        <a class="font-semibold text-2xl" href="#">
                            <span>Features</span>
                            <b class="caret"></b>
                            <div class="dropdown-content uppercase">
                                <p
                                    class="dropdown-item p-4 text-xl tracking-wide"
                                >
                                    architecture
                                </p>
                                <p
                                    class="dropdown-item p-4 text-xl tracking-wide"
                                >
                                    design
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a class="font-semibold text-2xl" href="#">Contact</a>
                    </li>
                </ul>
                <div
                    class="nav-burger h-5 w-5 hidden justify-center items-center my-10 px-10 py-8"
                >
                    <i class="fa fa-bars text-5xl text-white"></i>
                </div>
            </div>
            <ul class="nav-mobile-links bg-gray-100 z-10 mx-8 hidden">
                <li class="nav-link flex justify-center nav-link--active">
                    <a class="font-semibold text-2xl" href="#">Home</a>
                </li>
                <li class="nav-link flex justify-center">
                    <a class="font-semibold text-2xl" href="#">Services</a>
                </li>
                <li class="nav-link flex justify-center">
                    <a class="font-semibold text-2xl" href="#">Projects</a>
                </li>
                <li
                    class="nav-link flex flex-col justify-center items-center dropdown--mobile"
                >
                    <a class="font-semibold text-2xl" href="#">
                        <span>Features</span>
                        <b class="caret"></b>
                    </a>
                </li>
                <li class="dropdown-content--mobile uppercase">
                    <p class="dropdown-item--mobile p-4 text-xl tracking-wide">
                        architecture
                    </p>
                    <p class="dropdown-item--mobile p-4 text-xl tracking-wide">
                        design
                    </p>
                </li>
                <li class="nav-link flex justify-center">
                    <a class="font-semibold text-2xl" href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <section class="hero bg-pink-300 flex items-center">
            <div class="container flex justify-between px-6">
                <div
                    class="hero-heading w-full uppercase text-8xl font-semibold text-white flex items-center tracking-widest text-center"
                >
                    <div class="hero-heading__item">home renovations</div>
                    <div class="hero-heading__item">architecture</div>
                    <div class="hero-heading__item">commercial spaces</div>
                    <div class="hero-heading__item">buildings</div>
                </div>
                <div class="hero-sl mt-32 text-xl text-white">
                    <a href="#"
                        ><i
                            class="fa fa-facebook hero-sl__icon hero-sl__icon--facebook block"
                        ></i
                    ></a>
                    <a href="#"
                        ><i
                            class="fa fa-twitter hero-sl__icon hero-sl__icon--twitter mt-10 block"
                        ></i
                    ></a>
                    <a href="#"
                        ><i
                            class="fa fa-rss hero-sl__icon hero-sl__icon--rss mt-10 block"
                        ></i
                    ></a>
                    <a href="#"
                        ><i
                            class="fa fa-vk hero-sl__icon hero-sl__icon--vk mt-10 block"
                        ></i
                    ></a>
                </div>
            </div>
        </section>
        <section class="features">
            <div class="container flex flex-wrap justify-between px-10">
                <div
                    class="feature flex flex-col items-center py-28 px-8 bg-white -mt-16"
                >
                    <div
                        class="feature-icon w-28 h-28 text-center py-6 border-2 rounded-full flex justify-center items-center overflow-hidden text-5xl"
                    >
                        <i class="fa fa-anchor" aria-hidden="true"></i>
                    </div>
                    <h3
                        class="feature__heading mt-7 uppercase font-bold text-4xl"
                    >
                        feature 1
                    </h3>
                    <p
                        class=" feature__sub mt-7 text-gray-400 text-center text-2xl leading-relaxed"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nam, pariatur?
                    </p>
                </div>
                <div
                    class="feature flex flex-col items-center py-28 px-8 bg-white -mt-16"
                >
                    <div
                        class="feature-icon w-28 h-28 text-center py-6 border-2 rounded-full flex justify-center items-center overflow-hidden text-5xl"
                    >
                        <i
                            class="fa fa-line-chart text-5xl"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <h3
                        class="feature__heading mt-7 uppercase font-bold text-4xl"
                    >
                        feature 2
                    </h3>
                    <p
                        class="feature__sub mt-7 text-gray-400 text-center text-2xl leading-relaxed"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi, explicabo.
                    </p>
                </div>
                <div
                    class="feature flex flex-col items-center py-28 px-8 bg-white -mt-16"
                >
                    <div
                        class="
                  feature-icon
                  w-28
                  h-28
                  text-center
                  py-6
                  border-2
                  rounded-full
                  flex
                  justify-center
                  items-center
                  overflow-hidden
                  text-5xl
                "
                    >
                        <i
                            class="fa fa-check-square-o text-5xl"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <h3
                        class="feature__heading mt-7 uppercase font-bold text-4xl"
                    >
                        feature 3
                    </h3>
                    <p
                        class="
                  feature__sub
                  mt-7
                  text-gray-400 text-center text-2xl
                  leading-relaxed
                "
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore, facere.
                    </p>
                </div>
            </div>
        </section>
        <section class="about py-28">
            <div
                class="container flex flex-col items-center justify-center relative"
            >
                <div class="about-heading font-light text-7xl uppercase">
                    about us
                </div>
                <div
                    class="
                about-sub
                mt-10
                text-gray-500 text-center text-2xl
                w-2/3
                leading-loose
              "
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci nesciunt voluptas dicta cupiditate cum hic odit
                    ipsum, reiciendis asperiores minima magni, neque qui
                    recusandae dolor?
                </div>
                <div
                    class="about-img self-start mt-20 w-2/4 relative overflow-hidden"
                >
                    <img
                        src="~/assets/images/about.jpg"
                        class="about-img__img max-w-full align-top"
                        alt=""
                    />
                </div>
                <div
                    class="about-disc bg-white absolute w-2/4 p-12 border border-gray-300"
                >
                    <div
                        class="
                  about-disc__cross
                  absolute
                  right-12
                  top-8
                  text-l
                  cursor-pointer
                "
                    >
                        &#x2715;
                    </div>
                    <h2 class="about-disc__heading text-4xl">
                        Proin vel enim nec ipsum
                    </h2>
                    <p
                        class="about-disc__para text-gray-400 text-2xl leading-loose mt-6"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor quam nam neque rerum deserunt illum cumque
                        quae quis, minus provident hic quas necessitatibus
                        blanditiis recusandae praesentium atque aliquid
                        accusamus laboriosam. Cum, quae recusandae! Quae enim,
                        optio voluptatibus velit quis magni odit laborum dolore
                        incidunt excepturi temporibus doloribus voluptates! Non
                        animi ducimus sequi magni, voluptatum quibusdam esse est
                        dolorum quasi numquam.
                    </p>
                    <div
                        class="
                  about-disc__btn
                  mt-10
                  px-9
                  py-4
                  inline-block
                  text-white
                  capitalize
                  text-xl
                  rounded-lg
                "
                    >
                        know more
                    </div>
                </div>
            </div>
        </section>
        <section class="cta bg-gray-300 mt-36 py-20">
            <div class="container py-28 px-6">
                <div class="cta-heading text-white capitalize text-7xl z-10">
                    best in class
                </div>
                <div
                    class="cta-sub-heading capitalize mt-10 font-semibold text-4xl"
                >
                    for your satisfaction
                </div>
                <p class="cta-sub text-white mt-10 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat eos vitae architecto incidunt repellendus explicabo
                    saepe dolorum aliquid quam vero.
                </p>
                <div class="cta-input flex flex-wrap mt-12">
                    <select
                        class="
                  cta-input__item
                  text-white
                  uppercase
                  border-b-2 border-white
                  p-5
                  text-2xl
                  bg-transparent
                  outline-none
                  appearance-none
                "
                    >
                        <option>select 1</option>
                        <option>select 2</option>
                        <option>select 3</option>
                        <option>select 4</option>
                        <option>select 5</option>
                        <option>More</option>
                    </select>
                    <div
                        class="
                  cta-input__rate
                  text-white
                  uppercase
                  ml-12
                  border-b-2 border-white
                  p-5
                  text-center text-2xl
                "
                    >
                        submit
                    </div>
                </div>
                <div class="cta-overlay"></div>
            </div>
        </section>
        <section class="team">
            <div class="container flex flex-col items-center">
                <div
                    class="
                team-heading
                font-medium
                text-7xl
                capitalize
                mt-20
                tracking-wider
              "
                >
                    meet our team
                </div>
                <p
                    class="
                team-sub
                mt-12
                text-gray-500 text-2xl
                w-2/3
                text-center
                leading-loose
              "
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, ad. Aspernatur nostrum, nisi aut vitae sed
                    iusto. Ipsam quae quisquam recusandae modi, enim cupiditate
                    officiis!
                </p>
                <div
                    class="team-people flex flex-wrap justify-between w-full mt-24"
                >
                    <div class="team-person">
                        <div
                            class="team-person__img-box w-full relative overflow-hidden"
                        >
                            <img
                                src="~/assets/images/team-1.jpg"
                                class="team-person__img w-full"
                                alt=""
                            />
                            <div
                                class="
                      p-mask
                      opacity-0
                      invisible
                      absolute
                      bottom-0
                      w-full
                      h-full
                      py-44
                      flex flex-col
                      justify-center
                      items-center
                    "
                            >
                                <ul class="social-icons">
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-linkedin"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="
                    team-person__discription
                    w-full
                    border-4 border-double border-gray-300
                    mt-5
                    flex flex-col
                    justify-center
                    items-center
                    p-5
                  "
                        >
                            <h4
                                class="
                      team-person__name
                      uppercase
                      text-4xl
                      tracking-wide
                      font-medium
                    "
                            >
                                Ed Badman
                            </h4>
                            <h6
                                class="
                      team-person__position
                      capitalize
                      mt-5
                      text-2xl
                      font-medium
                    "
                            >
                                general manager
                            </h6>
                        </div>
                    </div>
                    <div class="team-person">
                        <div
                            class="team-person__img-box w-full relative overflow-hidden"
                        >
                            <img
                                src="~/assets/images/team-2.jpg"
                                class="team-person__img w-full"
                                alt=""
                            />
                            <div
                                class="
                      p-mask
                      opacity-0
                      invisible
                      absolute
                      bottom-0
                      w-full
                      h-full
                      py-44
                      flex flex-col
                      justify-center
                      items-center
                    "
                            >
                                <ul class="social-icons">
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-linkedin"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="
                    team-person__discription
                    w-full
                    border-4 border-double border-gray-300
                    mt-5
                    flex flex-col
                    justify-center
                    items-center
                    p-5
                  "
                        >
                            <h4
                                class="
                      team-person__name
                      uppercase
                      text-4xl
                      tracking-wide
                      font-medium
                    "
                            >
                                Ava Burrows
                            </h4>
                            <h6
                                class="
                      team-person__position
                      capitalize
                      mt-5
                      text-2xl
                      font-medium
                    "
                            >
                                manager
                            </h6>
                        </div>
                    </div>
                    <div class="team-person">
                        <div
                            class="team-person__img-box w-full relative overflow-hidden"
                        >
                            <img
                                src="~/assets/images/team-3.jpg"
                                class="team-person__img w-full"
                                alt=""
                            />
                            <div
                                class="
                      p-mask
                      opacity-0
                      invisible
                      absolute
                      bottom-0
                      w-full
                      h-full
                      py-44
                      flex flex-col
                      justify-center
                      items-center
                    "
                            >
                                <ul class="social-icons">
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            ><i
                                                class="fa fa-linkedin"
                                                aria-hidden="true"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="
                    team-person__discription
                    w-full
                    border-4 border-double border-gray-300
                    mt-5
                    flex flex-col
                    justify-center
                    items-center
                    p-5
                  "
                        >
                            <h4
                                class="
                      team-person__name
                      uppercase
                      text-4xl
                      tracking-wide
                      font-medium
                    "
                            >
                                Thomas Kinsman
                            </h4>
                            <h6
                                class="
                      team-person__position
                      capitalize
                      mt-5
                      text-2xl
                      font-medium
                    "
                            >
                                chief engineer
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer mt-32 pt-20 pb-8">
            <div class="container">
                <div class="footer-links flex flex-wrap justify-between px-8">
                    <div class="footer-info">
                        <div class="footer-info-heading capitalize text-5xl">
                            know us
                        </div>
                        <div class="footer-info-link-box mt-12 text-2xl">
                            <div class="footer-info-link flex">
                                <i
                                    class="footer-info-link__icon fa fa-angle-right text-gray-400"
                                ></i>
                                <span
                                    class="footer-info-link__text text-white ml-5"
                                    >Lorem, ipsum.</span
                                >
                            </div>
                            <div class="footer-info-link flex mt-8">
                                <i
                                    class="footer-info-link__icon fa fa-angle-right text-gray-400"
                                ></i>
                                <span
                                    class="footer-info-link__text text-white ml-5"
                                    >Lorem, ipsum.</span
                                >
                            </div>
                            <div class="footer-info-link flex mt-8">
                                <i
                                    class="footer-info-link__icon fa fa-angle-right text-gray-400"
                                ></i>
                                <span
                                    class="footer-info-link__text text-white ml-5"
                                    >Lorem, ipsum.</span
                                >
                            </div>
                            <div class="footer-info-link flex mt-8">
                                <i
                                    class="footer-info-link__icon fa fa-angle-right text-gray-400"
                                ></i>
                                <span
                                    class="footer-info-link__text text-white ml-5"
                                    >Lorem, ipsum.</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-nav-head capitalize text-5xl">
                            navigation
                        </div>
                        <div class="footer-nav-links mt-12">
                            <div
                                class="footer-nav-links__link text-white text-2xl capitalize"
                            >
                                home
                            </div>
                            <div
                                class="
                      footer-nav-links__link
                      text-white text-2xl
                      mt-8
                      capitalize
                    "
                            >
                                services
                            </div>
                            <div
                                class="
                      footer-nav-links__link
                      text-white text-2xl
                      mt-8
                      capitalize
                    "
                            >
                                project
                            </div>
                            <div
                                class="
                      footer-nav-links__link
                      text-white text-2xl
                      mt-8
                      capitalize
                    "
                            >
                                contact
                            </div>
                        </div>
                    </div>
                    <div class="footer-nl pr-40">
                        <div class="footer-nl-heading capitalize text-5xl">
                            newsletter
                        </div>
                        <div
                            class="footer-nl-email mt-12 flex justify-between"
                            action="#"
                            method="post"
                        >
                            <input
                                type="text"
                                placeholder="Your Email"
                                class="
                      footer-nl-email__input
                      outline-none
                      placeholder-white
                      border border-white
                      p-4
                      text-xl
                    "
                                name="Your Email"
                                required=""
                            />
                            <button
                                class="
                      footer-nl-email__btn
                      p-2
                      border border-white
                      py-4
                      px-7
                      text-xl text-white
                      ml-4
                    "
                            >
                                Subscribe
                            </button>
                        </div>
                        <div
                            class="footer-disclaimer text-white mt-12 text-xl tracking-widest"
                        >
                            © 2021 disclaimer. All rights reserved
                            <a href="#" class="footer-disclaimer__link"
                                >Lorem, ipsum.</a
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-sl flex flex-col items-center">
                <div class="container">
                    <div
                        class="footer-sl-line border border-white w-full mt-24"
                    ></div>
                    <div class="footer-sl-icons flex justify-center mt-12">
                        <ul class="flex">
                            <li>
                                <a
                                    href="#"
                                    class="footer-sl-icon fa fa-facebook facebook"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="footer-sl-icon fa fa-twitter twitter ml-10"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="footer-sl-icon fa fa-google-plus googleplus ml-10"
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="footer-sl-icon fa fa-dribbble dribbble ml-10"
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" class="to-top fixed bottom-8 z-20 h-16 w-16"></a>
    </div>
</template>

<script>
export default {};
</script>
