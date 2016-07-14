// полифилл для функции require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../views/app'
import Home from '../views/home'

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [ require('./view1'), 
				 require('./view2')])
    })
  },
  indexRoute: {
    component: Home
  }
}

