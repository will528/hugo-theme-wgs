document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.pl-segment').forEach((item, index, items) => {
        item.style.zIndex = items.length - index;
      });
})
