// adding the edits to the article in collection
export const collectionEdit = (collections, updatedArticle ) => {
    const existingArticle = collections.find(
        article => article.id === updatedArticle.id
    );

    if (existingArticle) {
        return collections.map(article => 
            article.id === updatedArticle.id 
            ? (Object.assign(article, {
                firstname: updatedArticle.firstname,
                lastname: updatedArticle.lastname,
                articletitle: updatedArticle.articletitle,
                latitude: updatedArticle.latitude,
                longitude: updatedArticle.longitude,
                article: updatedArticle.article
            }))
            : article
        )
    }
};

// deleting article from the collection
export const collectionDelete = (collections, num) => {
    return collections.filter((article,i) => i !== num)
};

// adding posted article to the colleciton
export const collectionAdd = (collections, article) => {
    let length = collections.length;
    const articleObject = {
        "id": article.id,
        "firstname": article.firstname,
        "lastname": article.lastname,
        "articletitle": article.articletitle,
        "latitude": article.latitude,
        "longitude": article.longitude,
        "tag": article.tag,
        "article": article.article
    }
    collections[length] = articleObject;
    console.log(collections);
    return collections;
};