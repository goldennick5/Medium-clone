const container = document.getElementById("container");

const posts = [
    {
        author: "Monika Belucci",
        authorImg: "./images/icons/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        topic: "Programming",
        title: "7 Practical CSS Tips",
        paragraph: "Every web developer inevitably runs into situations where they need to make visual design decisions, whether they like it or not. Maybe the company you work for doesn’t have a full-time designer and you need to implement the UI for a new feature on your own. Or maybe you’re hacking on a side-project and you want it to look better than yet-another-Bootstrap-site.",
        tag: "Java Script",
        data: "7 july",
        time: "12 min to read",
        img: "./images/ben-den-engelsen-N32SQI23sFI-unsplash.jpg",
    },
    {
        author: "James Kemeron",
        authorImg: "./images/icons/foto-sushi-6anudmpILw4-unsplash.jpg",
        topic: "Programming",
        title: "7 Practical CSS Tips",
        paragraph: "Every web developer inevitably runs into situations where they need to make visual design decisions, whether they like it or not. Maybe the company you work for doesn’t have a full-time designer and you need to implement the UI for a new feature on your own. Or maybe you’re hacking on a side-project and you want it to look better than yet-another-Bootstrap-site.",
        tag: "Java Script",
        data: "11 september",
        time: "12 min to read",
        img: "./images/dell-4Ea0P4IsZ_4-unsplash.jpg",
    },
    {
        author: "Alina Romanchevskaya",
        authorImg: "./images/icons/jd-mason-2oUiUu5QAys-unsplash.jpg",
        topic: "Programming",
        title: "7 Practical CSS Tips",
        paragraph: "Every web developer inevitably runs into situations where they need to make visual design decisions, whether they like it or not. Maybe the company you work for doesn’t have a full-time designer and you need to implement the UI for a new feature on your own. Or maybe you’re hacking on a side-project and you want it to look better than yet-another-Bootstrap-site.",
        tag: "Java Script",
        data: "7 december",
        time: "12 min to read",
        img: "./images/jack-dong-HQTHWPNyn0U-unsplash.jpg",
    },
]

container.innerHTML = "";
const postList = document.createElement("div");
postList.innerHTML = "";
postList.classList.add("post-list");

posts.forEach((post) => {
    const { author, authorImg, topic, title, paragraph, tag, data, time, img } = post;
    const newPost = document.createElement("div");
    newPost.classList.add("post");

    newPost.innerHTML = `
        <div class="left-part">
            <div class="post-header">
                <img
                    src="${authorImg}"
                    alt="author-image"
                    class="author-image"
                />
                <p class="post-header-paragraph">
                    <span class="author-name">${author}</span> in <span class="topic-name">${topic} •</span> ${data}
                </p>
            </div>
            <div class="post-body">
                <h1>${title}</h1>
                <p>${paragraph}</p>
            </div>
            <div class="post-footer">
                <div class="tag">
                    <p>${tag}</p>
                </div>
                <p>${time } <span style="color: black; margin-right: 0.5rem; margin-left: 0.5rem;">•</span> Selected for you</p>
            </div>
        </div>

        <div class="right-part">
            <img 
                src="${img}"
                alt="post-image"
                class="post-image"
            />
        </div>
    `

    postList.appendChild(newPost);
    container.appendChild(postList);
})