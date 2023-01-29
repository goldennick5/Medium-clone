const contentBody = document.createElement("div");
const body = document.getElementById("body");

const byline = localStorage.getItem("byline");
const publishedDate = localStorage.getItem("published_date");
const abstract = localStorage.getItem("abstract");
const desFacet = JSON.parse(localStorage.getItem("des_facet"));
const multimedia = JSON.parse(localStorage.getItem("multimedia"));
const title = localStorage.getItem("title");
const subsection = localStorage.getItem("subsection");

contentBody.innerHTML = `
    <div class="content-header">
        <div class="header-left-part">
            <img
                src="${multimedia[2].url}"
                alt="avatar"
            />
            <div class="content-header-details">
                <h2>${byline}</h2>
                <p>${publishedDate} &#8226 12 min read &#8226 Member-only</p>
            </div>
        </div>
        <div class="header-right-part">
            <img
                src="./images/icons/LinkedIn.svg"
                alt="LinkedIn"
            />
            <img
                src="./images/icons/Facebook Circled.svg"
                alt="Facebook"
            />
            <img
                src="./images/icons/Twitter.svg"
                alt="Twitter"
            />
        </div>
    </div>
    <div class="content-body">
        <h1>${title}</h1>
        <h2 class="subtitle">${desFacet}</h2>
        <img
            src="${multimedia[0].url}"
            alt=""
        />
        <h2 class="subsection">${subsection}</h2>
        <p>${abstract}</p>
    </div>
    <div class="content-footer"> 
        <div class="footer-left-part">
            <img
                src="./images/icons/heart.png"
                alt="heart"
            />
            <p>180</p>
            <img
                src="./images/icons/question.png"
                alt="question"
            />
            <p>12</p>
        </div>

        <div class="footer-right-part">
            <img
                src="./images/icons/save.png"
                alt="save"
            />
        </div>
    </div>
`;

body.appendChild(contentBody);
