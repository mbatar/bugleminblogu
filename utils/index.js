export const convertToArray = (obj) => {
  let arr =  Object.keys(obj).map((key) => ({
    id: key,
    title: obj[key].title,
    content: obj[key].content,
  }));
  console.log(arr)
  return arr;
};
