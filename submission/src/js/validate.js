function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  var lat = document.getElementById("latitude").value;
  var lon = document.getElementById("longitude").value;
  var latDiv = document.getElementById("latDiv");
  var longDiv = document.getElementById("longDiv");

  if (latDiv.childNodes.length > 1) {
    latDiv.removeChild(latDiv.lastChild);
  }

  if (longDiv.childNodes.length > 1) {
    longDiv.removeChild(longDiv.lastChild);
  }

  if (lat) {
    if (!isNaN(lat)) {
      var latNum = parseFloat(lat);

      if (latNum >= -90 && latNum <= 90) {
        if (lon) {
          if (!isNaN(lon)) {
            var longitudeNum = parseFloat(lon);

            if (longitudeNum >= -180 && longitudeNum <= 180) {
              return true;
            } else {
              var txt = document.createTextNode(
                " must be a valid Longitude (-180 to 180)"
              );
              longDiv.appendChild(txt);
              longDiv.setAttribute("color", "red");
              return false;
            }
          } else {
            var txt = document.createTextNode(
              " must be a valid Longitude (-180 to 180)"
            );
            longDiv.appendChild(txt);
            longDiv.setAttribute("color", "red");
            return false;
          }
        }
      } else {
        var txt = document.createTextNode(
          " must be a valid Latitude (-90 to 90)"
        );
        latDiv.appendChild(txt);
        latDiv.setAttribute("color", "red");
        return false;
      }
    } else {
      var txt = document.createTextNode(
        " must be a valid Latitude (-90 to 90)"
      );
      latDiv.appendChild(txt);
      latDiv.setAttribute("color", "red");
      return false;
    }
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
