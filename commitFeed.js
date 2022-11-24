import { Octokit, App } from "https://cdn.skypack.dev/octokit";
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({
  auth: `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`,
});

const { data } = await octokit.request(
  "GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}",
  {
    owner: "mauke-code-team",
    repo: "mauke-community-network",
  }
);

console.log("data", data);
const feedDOM = document.getElementById("update-feed");
// loop commit data and append to unordered list
data.forEach((commit) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="commit-list-item">
      <img class='github-avatar' src='${commit.author.avatar_url}' />    
      <div class="commit-details">
          <a href="${
            commit.html_url
          }"><span class="tech-font">update:</span> ${
    commit.commit.message
  }</a>
          <p class="commit-author"><span class="tech-font">code by:</span> ${
            commit.commit.author.name
          }</p>
          <p class="commit-date"><span class="tech-font">date:</span> ${relativeDays(
            new Date(commit.commit.author.date).getTime()
          )} (${formatDate(commit.commit.author.date)})</p>
      </div>
  </div>
      `;
  feedDOM.appendChild(li);
});

// remove end of string after "2022"

// Thanks to: https://bobbyhadz.com/blog/javascript-convert-timestamp-to-time-ago
function relativeDays(timestamp) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, "day");
}
function formatDate(time) {
  const d = new Date(time);
  return (
    d.getDate() + "-" + d.toString().substr(4, 3) + "-" + d.getFullYear()
  );
}