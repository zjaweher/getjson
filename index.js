"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1["default"].get(url).then(function (response) {
    var post = response.data;
    var userId = post.userId;
    var id = post.id;
    var title = post.title;
    var body = post.body;
    logPost(userId, id, title, body);
});
var logPost = function (userId, id, title, body) {
    console.log("\n      The Post posted by user: ".concat(userId, "\n      and with ID: ").concat(id, "\n      Has a title of: ").concat(title, "\n      and a body of ").concat(body, "\n    "));
};
