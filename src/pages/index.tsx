import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {Home} from '../components/Home'
import {Layout} from '../components/Layout'
import {StaticPage} from './_page'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Home/>
        </Layout>
      </Provider>
    )
  }
}
