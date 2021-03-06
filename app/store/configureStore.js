import { createStore, applyMiddleware } from 'redux'
import createLogger from '../../node_modules/redux-logger/src/index'
import rootReducer from '../reducers/index.reducer'
import createSagaMiddleware from 'redux-saga'
import { watchMessagesLoad, watchFileFormPost, watchGetGallery, watchAddToGallery, watchGetGalleryUser, watchGetCountriesStats, watchGetCitiesStats, watchLogin } from '../sagas/sagas'

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware(watchMessagesLoad, watchFileFormPost, watchGetGallery, watchAddToGallery, watchGetGalleryUser, watchLogin, watchGetCountriesStats, watchGetCitiesStats);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware
        )
    )
}