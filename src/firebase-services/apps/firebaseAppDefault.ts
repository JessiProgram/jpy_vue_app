import { initializeApp } from 'firebase/app'
import { configAppDefault } from '../configs/configAppDefault'

export const appDefault = initializeApp(configAppDefault)