const API_URL = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=MSVnJFudfgt8BzrJO6s76j7bvGYTG36M';
const container = document.getElementById("container");

fetchPosts(API_URL).then((data) => {
    data
}).catch((error) => {
    error
});

async function fetchPosts(url){
    const response = await fetch(url);
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const posts = await response.json();
    console.log(posts);
    showPosts(posts.results);
}

container.innerHTML = "";
const postList = document.createElement("div");
postList.innerHTML = "";
postList.classList.add("post-list");

function showPosts(newYorkPosts){
    newYorkPosts.shift();
    
    newYorkPosts.forEach((newYorkPost, index) => {
        const {byline, title, abstract, multimedia, published_date, item_type, org_facet} = newYorkPost;
        const newPost = document.createElement("div");
        newPost.classList.add("post");

        newPost.innerHTML = `
            <div class="left-part">
                <div class="post-header">
                    <img
                        src="${multimedia[0].url}"
                        alt="author-image"
                        class="author-image"
                    />
                    <p class="post-header-paragraph">
                        <span class="author-name">${byline}</span> in <span class="topic-name" style="margin-right: 1rem;">&#8226 ${org_facet}</span> ${published_date}
                    </p>
                </div>
                <div class="post-body">
                    <h1>${title}</h1>
                    <p>${abstract}</p>
                </div>
                <div class="post-footer">
                    <div class="tag">
                        <p>${item_type}</p>
                    </div>
                    <p><span style="color: black; margin-right: 0.5rem; margin-left: 0.5rem;">&#8226</span> Selected for you</p>
                </div>
            </div>
        
            <div class="right-part">
                <img 
                    src="${multimedia[0].url}"
                    alt="post-image"
                    class="post-image"
                />
            </div>
        `
        
        postList.appendChild(newPost);
        container.append(postList);

        function Post(){
            const {byline, title, abstract, subsection, des_facet, multimedia, published_date, item_type, org_facet} = newYorkPosts[index];
            
            localStorage.setItem("byline", byline);
            localStorage.setItem("title", title);
            localStorage.setItem("abstract", abstract);
            localStorage.setItem("multimedia", JSON.stringify(multimedia));
            localStorage.setItem("des_facet", JSON.stringify(des_facet));
            localStorage.setItem("published_date", published_date);
            localStorage.setItem("item_type", item_type);
            localStorage.setItem("org_facet", org_facet);
            localStorage.setItem("subsection", subsection);
            window.location.href = "./postPage.html";
        }
        
        newPost.addEventListener("click", Post)
    })
}
