  console.log("HI!")
  function getCouponCode() {
    var queryString = document.location.search
    /* Allow others to put in their own coupon code and replace it on the links if needed. */
    queryString = document.location.search
    couponCode = queryString.split("coupon=")[1] // grab the part after coupon=
    return couponCode
  }

  function replaceExistingUrls(couponCode) {
    /* Cycle through existing links and replace the existing coupon code with a declared one*/
    var linkedElements = document.getElementsByClassName("course_link")

    for (i=0; i<linkedElements.length; i++) {
      console.log(linkedElements[i])
      linkedElements[i].href = linkedElements[i].href.replace("SPRING_2018_PROMO", couponCode)
      // console.log(linkedElements[i])
    }
  }

  function findCouponCodeAndReplaceLinks() {
    if (document.location.search.indexOf("coupon=") > 0) {
      var couponCode = getCouponCode()
      replaceExistingUrls(couponCode)
      console.log("findCouponCodeAndReplaceLinks executed...")
    }
  }

  window.onload = setTimeout(function(){ findCouponCodeAndReplaceLinks(); }, 4000);
