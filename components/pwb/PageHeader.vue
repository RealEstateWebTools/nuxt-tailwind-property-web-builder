<template>
  <nav style="z-index: 2" class="sticky top-0 w-full mt-0 bg-white shadow-sm">
    <div class=""></div>

    <div
      class="route-data"
      data-route-info='{"current_route":{"details":{"action":"show_page","locale":null},"hoistStrategy":"onInteraction"}}'
    ></div>
    <div
      class="
        t-container
        bg-pwb-top-nav
        txt-pwb-top-nav
        flex flex-wrap
        items-center
        justify-between
        mx-auto
        p-0
      "
    >
      <div class="layout">
        <div class="flex xs12">
          <a class="" href="/">
            <div
              class="
                no-underline
                opacity-100
                hover:text-white
                hover:no-underline
                top-logo-img-cont
              "
            >
              <img
                style="max-height: 81px"
                src="https://lucyalan.propertywebbuilder.com/uploads/lucyalan/website_photo/small_fit_lucy_alan_logo.png"
                contain=""
                class="mr-3 top-logo-img"
              />
            </div>
          </a>
          <div class="spacer"></div>
          <div class="w-full">
            <div
              class="
                hidden
                sm:hidden
                md:block
                lg:block
                text-lg
                float-right
                mt-4
                mr-4
              "
            >
              <a
                class="
                  tp-nav-link-item
                  font-medium
                  p-4
                  m-0
                  block
                  font-light
                  text-slim
                  link-pwb-top-nav
                  hover:no-underline
                  md:inline-block
                  md:mt-0
                  md:ml-6
                "
                href="/en/properties/for-sale"
              >
                Our Properties
              </a>
              <a
                class="
                  tp-nav-link-item
                  font-medium
                  p-4
                  m-0
                  block
                  font-light
                  text-slim
                  link-pwb-top-nav
                  hover:no-underline
                  md:inline-block
                  md:mt-0
                  md:ml-6
                "
                href="/en/p/about-us"
              >
                About Us
              </a>
              <a
                class="
                  tp-nav-link-item
                  font-medium
                  p-4
                  m-0
                  block
                  font-light
                  text-slim
                  link-pwb-top-nav
                  hover:no-underline
                  md:inline-block
                  md:mt-0
                  md:ml-6
                "
                href="/en/p/our-services"
              >
                Our Services
              </a>
              <a
                class="
                  tp-nav-link-item
                  font-medium
                  p-4
                  m-0
                  block
                  text-slim
                  link-pwb-top-nav
                  hover:no-underline
                  md:inline-block
                  md:mt-0
                  md:ml-6
                "
                href="/en/p/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div id="topNavTargetRegular"></div>
          <div
            class="hoist-data"
            data-component-name="TopNavRegularHoist"
            data-component-data='{"regular_nav_data":{"ordered_visible_top_nav":[{"id":110,"discarded_at":null,"uuid":"1ee01437-3b53-483d-99b1-29460788a897","slug":"top_nav_for_sale","parent_slug":null,"icon_class":null,"href_class":null,"href_target":null,"is_external":false,"visible":true,"is_deletable":false,"is_sublink":false,"flags":0,"sort_order":1,"placement":"top_nav","route_match_key":"route_name","route_match_values":[],"translations":{"en":{"link_url":"/en/properties/for-sale","link_title":"Our Properties"},"es":{"link_url":"/en/properties/for-sale","link_title":"En Venta"}},"created_at":"2021-04-16T11:07:41.894Z","updated_at":"2021-06-10T10:38:18.258Z","agency_uuid":"76a07331-fc24-4afa-a606-2d8917b15e78"},{"id":111,"discarded_at":null,"uuid":"3c3c93df-7f98-47e0-95df-76073123d6c0","slug":"top_nav_about_us","parent_slug":null,"icon_class":null,"href_class":null,"href_target":null,"is_external":false,"visible":true,"is_deletable":false,"is_sublink":false,"flags":0,"sort_order":2,"placement":"top_nav","route_match_key":"exact","route_match_values":[],"translations":{"en":{"link_url":"/en/p/about-us","link_title":"About Us"},"es":{"link_url":"/es/p/sobre-nosotros","link_title":"Sobre nosotros"}},"created_at":"2021-04-16T11:07:41.911Z","updated_at":"2021-06-10T10:00:18.944Z","agency_uuid":"76a07331-fc24-4afa-a606-2d8917b15e78"},{"id":117,"discarded_at":null,"uuid":"35faa41b-4d55-4af7-a3b7-7445dc70dd88","slug":"top_nav_for_rent","parent_slug":null,"icon_class":null,"href_class":null,"href_target":null,"is_external":false,"visible":true,"is_deletable":false,"is_sublink":false,"flags":0,"sort_order":3,"placement":"top_nav","route_match_key":"route_name","route_match_values":[],"translations":{"en":{"link_url":"/en/p/our-services","link_title":"Our Services"},"es":{"link_url":"/en/properties/for-rent","link_title":"Alquiler"}},"created_at":"2021-04-16T11:07:42.021Z","updated_at":"2021-06-10T10:38:07.195Z","agency_uuid":"76a07331-fc24-4afa-a606-2d8917b15e78"},{"id":109,"discarded_at":null,"uuid":"608ddf13-9b6a-413d-8a1e-e3ef11a455ce","slug":"top_nav_contact_us","parent_slug":null,"icon_class":null,"href_class":null,"href_target":null,"is_external":false,"visible":true,"is_deletable":false,"is_sublink":false,"flags":0,"sort_order":4,"placement":"top_nav","route_match_key":"exact","route_match_values":[],"translations":{"en":{"link_url":"/en/p/contact-us","link_title":"Contact Us"},"es":{"link_url":"/es/p/contactar","link_title":"Contactar"}},"created_at":"2021-04-16T11:07:41.874Z","updated_at":"2021-06-10T10:00:18.969Z","agency_uuid":"76a07331-fc24-4afa-a606-2d8917b15e78"}]}}'
          ></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
