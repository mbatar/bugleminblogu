export const convertToArray = (obj) => {
  let arr = Object.keys(obj).map((key) => ({
    id: key,
    title: obj[key].title,
    content: obj[key].content,
    photo: obj[key].photo,
    comments: obj[key].comments
      ? Object.keys(obj[key].comments).map((childKey) => ({
          id: childKey,
          name: obj[key].comments[childKey].name,
          comment: obj[key].comments[childKey].comment,
        }))
      : [],
  }));
  console.log(arr);
  return arr;
};
