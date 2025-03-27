import axios  from 'axios'
import { link } from './globals.module.js';

export default axios.create({
    baseURL: link
});