  function getCouponCode() {
    /* Allow others to put in their own coupon code and replace it on the links if needed. */
    var queryString = document.location.search;
    couponCode = queryString.split("coupon=")[1]; // grab the part after coupon=
    return couponCode
  }

  function replaceExistingUrls(couponCode) {
    /* Cycle through existing links and replace the existing coupon code with a declared one*/
    var linkedElements = document.getElementsByClassName("course_link");

    for (i=0; i<linkedElements.length; i++) {
      linkedElements[i].href = linkedElements[i].href.replace("SPRING_2018_PROMO", couponCode)
      // console.log(linkedElements[i])
    }
  }

  function findCouponCodeAndReplaceLinks(discountMap) {
    if (document.location.search.indexOf("coupon=") > 0) {
      var couponCode = getCouponCode();
      replaceExistingUrls(couponCode);
      replaceDisplayedPrice(couponCode, discountMap);
    }
  }

  /* Prices by couponCode */
  var discountMap = {
      EARLY_TESTER      : 0,
      BNI               : 77.40,
      SPRING_2018       : 98,
      "65_PERCENT_OFF"  : 45,
      "100_OFF"         : 29,
      "REAL-ESTATE-PRO" : 64.50,
      "MORTGAGE-BROKER-DISCOUNT": 64.50,
      "KMZEPHYR"        : 49,
      "KMZEPHYR_FREE"   : 0
  };

  function replaceDisplayedPrice(couponCode, discountMap) {
      /* This will replace the discounted price shown on the CTA on the bottom of the page. */
      newPrice = discountMap[couponCode];

      // New price can = 0 wish is falsy, so I use this condition instead.
      if (newPrice > -1) {
          document.getElementById("discount_price").innerHTML = "$" + newPrice;
      }
  }


  window.onload = setTimeout(function(){ findCouponCodeAndReplaceLinks(discountMap); }, 4000);
