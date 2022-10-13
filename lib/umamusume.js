let html = '<div class="uma-list">';

let uma_parent = document.createElement("div");
uma_parent.classList.add("uma_parent");

let uma_container = document.createElement("div");
uma_container.setAttribute("id", "uma-container");

let hotness = {
  日服公告: "umamusume-notice-ad",
  周报速览: "umamusume-twitter",
  当前活动: "umamusume-activity",
  马娘卡池: "umamusume-newUma",
  支援卡池: "umamusume-supportCard",
};
var url = "https://wiki.biligame.com/umamusume/api.php";
var targetUrl = "https://wiki.biligame.com/umamusume/";
var params1 = {
  action: "query",
  format: "json",
  list: "search",
  srsearch: "公告",
  srsort: "last_edit_desc",
  srwhat: "text",
  srprop: "size|wordcount|timestamp|snippet",
};
var params2 = {
  action: "query",
  format: "json",
  list: "search",
  srsearch: "赛马娘卡池",
  srsort: "last_edit_desc",
  srwhat: "text",
  srprop: "size|wordcount|timestamp|snippet",
};
var params3 = {
  action: "query",
  format: "json",
  list: "search",
  srsearch: "剧情活动",
  srsort: "last_edit_desc",
  srwhat: "text",
  srprop: "size|wordcount|timestamp|snippet",
};
var params4 = {
  action: "query",
  format: "json",
  list: "search",
  srsearch: "支援卡卡池",
  srsort: "last_edit_desc",
  srwhat: "text",
  srprop: "size|wordcount|timestamp|snippet",
};
var params5 = {
  action: "query",
  format: "json",
  list: "search",
  srsearch: "竞技场周报",
  srsort: "last_edit_desc",
  srwhat: "text",
  srprop: "size|wordcount|timestamp|snippet",
};
url = url + "?origin=*";
//
Object.keys(params1).forEach(function (key) {
  url += "&" + key + "=" + params1[key];
});
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    html +=
      '<div class="umamusume-list-item"><div class="umamusume-hotness ' +
      hotness["日服公告"] +
      '">' +
      "日服公告" +
      "</div>" +
      '<span class="umamusume-title"><a title="' +
      response.query.search[0].title +
      '"href="' +
      targetUrl +
      response.query.search[0].title +
      '" target="_blank" rel="external nofollow noreferrer">' +
      response.query.search[0].title +
      "</a></span>" +
      "</div>";
    html += "</div>";
    uma_container.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
//
Object.keys(params2).forEach(function (key) {
  url += "&" + key + "=" + params2[key];
});
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    for (var data in response.query.search) {
      if (response.query.search[data].title.indexOf("卡池") != -1) {
        break;
      }
    }
    html +=
      '<div class="umamusume-list-item"><div class="umamusume-hotness ' +
      hotness["马娘卡池"] +
      '">' +
      "马娘卡池" +
      "</div>" +
      '<span class="umamusume-title"><a title="' +
      response.query.search[data].title +
      '"href="' +
      targetUrl +
      response.query.search[data].title +
      '" target="_blank" rel="external nofollow noreferrer">' +
      response.query.search[data].title +
      "</a></span>" +
      "</div>";
    html += "</div>";
    uma_container.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
//
Object.keys(params4).forEach(function (key) {
  url += "&" + key + "=" + params4[key];
});
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    for (var data in response.query.search) {
      if (response.query.search[data].title.indexOf("卡池") != -1) {
        break;
      }
    }
    html +=
      '<div class="umamusume-list-item"><div class="umamusume-hotness ' +
      hotness["支援卡池"] +
      '">' +
      "支援卡池" +
      "</div>" +
      '<span class="umamusume-title"><a title="' +
      response.query.search[data].title +
      '"href="' +
      targetUrl +
      response.query.search[data].title +
      '" target="_blank" rel="external nofollow noreferrer">' +
      response.query.search[data].title +
      "</a></span>" +
      "</div>";
    html += "</div>";
    uma_container.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
//
Object.keys(params3).forEach(function (key) {
  url += "&" + key + "=" + params3[key];
});
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    html +=
      '<div class="umamusume-list-item"><div class="umamusume-hotness ' +
      hotness["当前活动"] +
      '">' +
      "当前活动" +
      "</div>" +
      '<span class="umamusume-title"><a title="' +
      response.query.search[0].title +
      '"href="' +
      targetUrl +
      response.query.search[0].title +
      '" target="_blank" rel="external nofollow noreferrer">' +
      response.query.search[0].title +
      "</a></span>" +
      "</div>";
    html += "</div>";
    uma_container.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
Object.keys(params5).forEach(function (key) {
  url += "&" + key + "=" + params5[key];
});
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    html +=
      '<div class="umamusume-list-item"><div class="umamusume-hotness ' +
      hotness["周报速览"] +
      '">' +
      "周报速览" +
      "</div>" +
      '<span class="umamusume-title"><a title="' +
      response.query.search[1].title +
      '"href="' +
      targetUrl +
      response.query.search[1].title +
      '" target="_blank" rel="external nofollow noreferrer">' +
      response.query.search[1].title +
      "</a></span>" +
      "</div>";
    html += "</div>";
    uma_container.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });

const jx_div = document.createElement("div");
jx_div.innerHTML = `<i class="fas fa-horse-head"> UMA特雷森校历 </i>`;
jx_div.classList.add("jx");
uma_parent.appendChild(jx_div);
uma_parent.appendChild(uma_container);

const card = document.getElementsByTagName("uma-card")[0];
card.parentNode.replaceChild(uma_parent, card);
