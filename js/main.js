// Unsplash Api
const count=10;
const apiKey="eq98sD9MkJ_1b5FCir492NIjKYQqn6NDlIHsCjSGlKo";
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getImages(){
    try {
        const response=await fetch(apiUrl);
        const [{alt_description,urls}]=await response.json();
    } catch (error) {
        console.log("something bad happen",error);
    }
}
getImages();