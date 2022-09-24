function getGhi() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      div.innerHTML = "The Browser Does not Support Geolocation";
    }
  }