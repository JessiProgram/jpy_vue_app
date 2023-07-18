import axios from 'axios'

export const createApiGateway = () => {
    const defaultUrl = { value: '' }
    
    const config = import.meta.env

    config.VITE_TIPO_PROYECTO === 'prod' ? 
    defaultUrl.value = '' : ''
    
    config.VITE_TIPO_PROYECTO === 'dev' ? 
    defaultUrl.value = 'https://southamerica-east1-jekuaapydev1.cloudfunctions.net/api_gateway' : ''

    config.VITE_TIPO_PROYECTO === 'test' ? 
    defaultUrl.value = '' : ''

    return axios.create({ baseURL: defaultUrl.value })
}