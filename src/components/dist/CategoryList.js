"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var tags_1 = require("./tags");
var client = new client_1.ApolloClient({
    uri: 'https://jiwe-demo.herokuapp.com/v1/graphql',
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'jiwe-interview'
    },
    //incase of new request check to see when last req was updated
    cache: new client_1.InMemoryCache()
});
var CategoryList = function (_a) {
    var categories = _a.categories;
    var _b = react_1.useState(undefined), games = _b[0], setGames = _b[1];
    var _c = react_1.useState(''), img = _c[0], setImg = _c[1];
    var _d = react_1.useState(''), title = _d[0], setTitle = _d[1];
    var _e = react_1.useState(''), genre = _e[0], setGenre = _e[1];
    var handleGenreName = function (genre) { return __awaiter(void 0, void 0, void 0, function () {
        var genre_res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(genre);
                    return [4 /*yield*/, client.query({
                            query: client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query GetGamesByGenre($genreName: String!=", ") {\n                tags(where: { name: { _eq: $genreName } }) {\n                  id\n                  game_genres {\n                    id\n                    game {\n                      id\n                      language\n                      author_id\n                      author_type\n                      description\n                      created_at\n                      genre\n                      title\n                      updated_at\n                      author {\n                        avatar\n                        bio\n                        created_at\n                        email\n                        id\n                        locale\n                        location\n                        mfa_enabled\n                        name\n                        password\n                        phone_number\n                        remember_token\n                        updated_at\n                        username\n                        email_verified_at\n                      }\n                      game_posters: game_files(where: {file: {type: {_eq: \"game_poster\"}}}) {\n                        file {\n                          id\n                          path\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            "], ["query GetGamesByGenre($genreName: String!=", ") {\n                tags(where: { name: { _eq: $genreName } }) {\n                  id\n                  game_genres {\n                    id\n                    game {\n                      id\n                      language\n                      author_id\n                      author_type\n                      description\n                      created_at\n                      genre\n                      title\n                      updated_at\n                      author {\n                        avatar\n                        bio\n                        created_at\n                        email\n                        id\n                        locale\n                        location\n                        mfa_enabled\n                        name\n                        password\n                        phone_number\n                        remember_token\n                        updated_at\n                        username\n                        email_verified_at\n                      }\n                      game_posters: game_files(where: {file: {type: {_eq: \"game_poster\"}}}) {\n                        file {\n                          id\n                          path\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            "])), genre)
                        })];
                case 1:
                    genre_res = _a.sent();
                    setGames(genre_res === null || genre_res === void 0 ? void 0 : genre_res.data.tags[0].game_genres);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(tags_1.Menu, null,
            React.createElement(tags_1.MenuItem, null, categories === null || categories === void 0 ? void 0 : categories.map(function (category) { return (React.createElement(tags_1.Button, { onClick: function () { handleGenreName(category.tag.name); } }, category.tag.name)); })))));
};
exports["default"] = CategoryList;
var templateObject_1;
