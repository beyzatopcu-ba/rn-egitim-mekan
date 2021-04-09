const categoryConverter = ({categories}) => {
    let categoryList = [];
    for (let i = 0; i < categories.length; i++) {
        const categoryFromApi = categories[i];
        categoryList.push(categoryFromApi.categories);
    }

    return categoryList;
}

export default categoryConverter;