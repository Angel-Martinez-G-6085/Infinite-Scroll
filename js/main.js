let imageArray=[];
// Unsplash Api
const count=10;
const apiKey="eq98sD9MkJ_1b5FCir492NIjKYQqn6NDlIHsCjSGlKo";
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// References
const imageContainer=document.querySelector(".image-container");
const loader=document.querySelector("#loader");

function setAtributes(element,atribute){
    for(const key in atribute){
        element.setAttribute(key,atribute[key]);
    }
}

function Displayphotos(){
    imageArray.map((photo)=>{
        const item=document.createElement("a");

        setAtributes(item,{
            href:photo.links.html,
            target:"_blank"
        });

        const img=document.createElement("img");

        setAtributes(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getImages(){
    try {
        const response=await fetch(apiUrl);
        imageArray=await response.json();
        const [{alt_description,urls,links}]=imageArray;
        Displayphotos();
    } catch (error) {
        console.log("something bad happen",error);
    }
}
getImages();