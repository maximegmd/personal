(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Theme toggle (initial theme is set inline in <head>) ---- */
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---- Mobile nav ---- */
  var navbar = document.querySelector(".navbar");
  var navToggle = document.querySelector(".nav-toggler");
  if (navbar && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = navbar.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- Citation toggles ---- */
  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest("[data-cite-toggle]");
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    var open = panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---- Publication filters (topic buttons + free-text search) ---- */
  var list = document.querySelector("[data-pub-filter]");
  if (!list) return;

  var entries = Array.prototype.slice.call(list.querySelectorAll(".bib-entry"));
  var years = Array.prototype.slice.call(list.querySelectorAll(".pub-year"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".publication-tags button"));
  var search = document.getElementById("pub-search-input");
  var empty = document.querySelector(".pub-empty");
  var activeTag = "all";

  function apply() {
    var q = search ? search.value.trim().toLowerCase() : "";
    var shown = 0;
    entries.forEach(function (el) {
      var tags = (el.getAttribute("data-tags") || "").split(" ");
      var okTag = activeTag === "all" || tags.indexOf(activeTag) !== -1;
      var okText = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
      var visible = okTag && okText;
      el.classList.toggle("is-hidden", !visible);
      if (visible) shown++;
    });
    years.forEach(function (y) {
      var any = list.querySelector('.bib-entry[data-year="' + y.getAttribute("data-year") + '"]:not(.is-hidden)');
      y.classList.toggle("is-hidden", !any);
    });
    if (empty) empty.style.display = shown ? "none" : "block";
  }

  function setTag(tag) {
    activeTag = tag || "all";
    buttons.forEach(function (b) {
      var on = b.getAttribute("data-tag") === activeTag;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    apply();
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var tag = b.getAttribute("data-tag");
      setTag(tag);
      if (history.replaceState) {
        history.replaceState(null, "", tag === "all" ? location.pathname : "#" + tag);
      }
    });
  });
  if (search) search.addEventListener("input", apply);

  function fromHash() {
    var h = location.hash.replace("#", "");
    if (h && buttons.some(function (b) { return b.getAttribute("data-tag") === h; })) setTag(h);
  }
  fromHash();
  window.addEventListener("hashchange", fromHash);
})();
