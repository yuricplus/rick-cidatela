import { environment } from './environment.prod';

export default {
    routes: {
        base: 'https://rickandmortyapi.com/api/',
        character: {
            all: 'character'
        },
        historic: {
          get: 'https://6020705246f1e400178032fb.mockapi.io/api/historic/get'
        }
    }
}
