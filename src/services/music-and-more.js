import trae from 'trae'
import configService from './config'

const musicNMoreService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicNMoreService
