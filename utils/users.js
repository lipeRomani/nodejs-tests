module.exports.getUser = () => {
  return request('http://www.mocky.io/v2/5a20aa552d00008900dfffb1')
    .then(result => JSON.parse(result))
    .catch(err => err);
}