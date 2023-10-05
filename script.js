document.addEventListener("DOMContentLoaded", function () {
    const floor1Button = document.getElementById("floor1Button");
    const floor2Button = document.getElementById("floor2Button");
    const floor3Button = document.getElementById("floor3Button");
    const floorImage = document.getElementById("floorImage");

    const updateLayout = () => {
        const windowWidth = window.innerWidth;

        let imageSize, fontSize, buttonPadding;
        if (windowWidth < 768) {
            imageSize = "120%";
            fontSize = "14px";
            buttonPadding = "10px 20px";
        } else if (windowWidth >= 768 && windowWidth <= 1024) {
            imageSize = "140%";
            fontSize = "16px";
            buttonPadding = "12px 24px";
        } else {
            imageSize = "160%";
            fontSize = "18px";
            buttonPadding = "14px 28px";
        }

        floorImage.style.width = imageSize;
        button.style.fontSize = fontSize;
        button.style.padding = buttonPadding;
    };

    floor1Button.addEventListener("click", function () {
        floorImage.src = "floor1.svg";
        floorImage.style.display = "block";
        document.getElementById("p1").innerHTML = "1 Этаж";
    });

    floor2Button.addEventListener("click", function () {
        floorImage.src = "floor2.svg";
        floorImage.style.display = "block";
        document.getElementById("p1").innerHTML = "2 Этаж";
    });

    floor3Button.addEventListener("click", function () {
        floorImage.src = "floor3.svg";
        floorImage.style.display = "block";
        document.getElementById("p1").innerHTML = "3 Этаж";
    });

    window.addEventListener("resize", updateLayout);
    updateLayout();
});
