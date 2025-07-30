

var map = new maplibregl.Map({
        container: "map", // The ID of your map div
        center: coordinates, // Longitude, Latitude for Ahmedabad
        zoom: 11,
        // --- CHANGE THIS LINE ---
        // Replace your custom style object with a URL to a pre-made vector tile style
        // This style includes all the layers (roads, water, buildings, landuse, etc.)
        // and points to an appropriate vector tile source internally.
        style: "https://tiles.stadiamaps.com/styles/osm_bright.json", // Example: Stadia Maps Alidade Smooth style
      });

      // Add navigation controls (optional, highly recommended)
      map.addControl(new maplibregl.NavigationControl(), "top-left");

      // Add attribution (important for all map providers, especially OpenStreetMap-based)
      map.on("load", function () {
        map.addControl(
          new maplibregl.AttributionControl({
            compact: true, // Makes the attribution less intrusive
            customAttribution:
              '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
          })
        );
      });

      // For adding HTML markers, this part of your code is mostly correct,
      // just ensure the 'el' div has proper styling (e.g., width, height, background-color)
      // in your <style> block or an external CSS file.
      const el = document.createElement("div");
      el.className = "marker";
    //   el.style.backgroundColor = "red";
    //   el.style.width = "20px"; // Give it some size
    //   el.style.height = "20px"; // Give it some size
    //   el.style.borderRadius = "50%";
    //   el.style.cursor = "pointer"; // Optional: show it's clickable

      new maplibregl.Marker(el)
        .setLngLat(coordinates) // Longitude, Latitude
        .setPopup(
          new maplibregl.Popup().setHTML(
            "<b>Welcome!</b><br>Exact Location provided after booking."
          )
        )
        .addTo(map);

      // If you were to add interactive elements on specific map features (e.g., clicking a road to get its name),
      // that would involve `map.on('click', 'layer-id', ...)`

      console.log(coordinates);
      