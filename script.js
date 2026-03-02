

const images = document.querySelectorAll(".card img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "1000";

        const bigImage = document.createElement("img");
        bigImage.src = img.src;
        bigImage.style.width = "70%";
        bigImage.style.borderRadius = "10px";

        overlay.appendChild(bigImage);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);
    });
});