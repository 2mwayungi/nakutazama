/* eslint-disable global-require */

import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 16;
export const SUPPORT_EMAIL = "care@nopovo.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/_nopovo/",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/ShopNopovo/",
    path: require("../images/facebook-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description: "Nopovo| African Fashion",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Nopovo| African Fashion",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
  PaymentConfirm,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Address",
    nextActionName: "Continue to Shipping",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Shipping",
    nextActionName: "Continue to Payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
  {
    index: 4,
    link: "/checkout/payment-confirm",
    name: "Payment confirm",
    onlyIfShippingRequired: false,
    step: CheckoutStep.PaymentConfirm,
    withoutOwnView: true,
  },
];
