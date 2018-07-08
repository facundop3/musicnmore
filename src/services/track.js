import musicNMoreService from './music-and-more'

const trakService = {
}

trakService.search = function (q) {
  const type = 'track'
  return musicNMoreService.get('/search', {
    params: {q, type}
  })
    .then(res => res.data)
}

trakService.getById = function (id) {
  return musicNMoreService.get(`/tracks/${id}`)
    .then(res => res.data)
}
export default trakService
