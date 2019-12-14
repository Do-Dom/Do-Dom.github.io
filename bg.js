const body = document.querySelector("body");

const IMG_NUM = 4;

function paintImg(imgNum)
{
    const img = new Image();
    img.src = `images/${imgNum + 1}.jpg`;
    img.classList.add("bg");

    body.appendChild(img);
}

function genRandomNum()
{
    return Math.floor(Math.random() * IMG_NUM);
}

function init()
{
    const imgNum = genRandomNum();
    paintImg(imgNum);

}

init();