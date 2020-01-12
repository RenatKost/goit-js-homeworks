import {
    images
} from "./base.js";

const imageList = document.querySelector("#gallery");

const imageStr = createImage(images);

imageList.insertAdjacentHTML("beforeend", imageStr);

function createImage(images) {
    return images.map(image => createTableRowMarkup(image)).join("");
}

function createTableRowMarkup({
    url,
    alt
}) {
    const img = `
                <li class='image-item'>
                    <img class="image-gallery" src="${url}" alt="${alt}">
                </li>
                `;

    return img;
}