import { configureStore } from '@reduxjs/toolkit'
import menuSlicer from './menuSlicer'

export default configureStore({
  reducer: {
    menu: menuSlicer,
  },
})