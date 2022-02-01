let colorstate = true;

function tooglebgcolor() {
  if (colorstate) {
    document.documentElement.style.setProperty(
      "--keybgcolor",
      "hsl(0, 0%, 32%)"
    );
    document.documentElement.style.setProperty(
      "--keytopbgcolor",
      "linear-gradient(to right, hsl(0, 0%, 30%), hsl(0, 0%, 38%))"
    );
    document.documentElement.style.setProperty("--keycolor", "#333");
    document.documentElement.style.setProperty("--keybordercolor", "#555");

    colorstate = !colorstate;
  } else {
    document.documentElement.style.setProperty(
      "--keybgcolor",
      "hsl(0, 0%, 92%)"
    );
    document.documentElement.style.setProperty(
      "--keytopbgcolor",
      "linear-gradient(to right, hsl(0, 0%, 90%), hsl(0, 0%, 98%))"
    );
    document.documentElement.style.setProperty("--keycolor", "#111");
    document.documentElement.style.setProperty("--keybordercolor", "#ddd");

    colorstate = !colorstate;
  }
}
