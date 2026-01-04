exports.getAllArticles = (req, res) => {
    res.send("Get articles route");
};

exports.createArticle = (req, res) => {
    res.send("Post articles route");
};

exports.getArticleById = (req, res) => {
    res.send(`Get article by Id route: ${req.params.articleId}`);
};

exports.updateArticle = (req, res) => {
    res.send(`Put article by Id route: ${req.params.articleId}`);
};

exports.deleteArticle = (req, res) => {
    res.send(`Delete article by Id route: ${req.params.articleId}`);
};