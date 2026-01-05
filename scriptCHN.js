//获取图片
const container = document.getElementById("imgContainer");

const imageCount = 16; // 中文图片数量
const imagePath = "imagesCHN/"; // 图片所在目录

for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = imagePath + i + ".jpg";
    img.alt = "image " + i;

    container.appendChild(img);
}