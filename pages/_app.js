import { monitorNextApp } from 'nextapm';
import '../styles/index.css'
import { Provider } from 'react-redux'
import { useStore } from '../store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async (context) => {
  monitorNextApp(context);
  return {};
};