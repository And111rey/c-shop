document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat("ru-RU", {
        curensy: "rub",
        style: "currency"
    }).format(node.textContent)
})