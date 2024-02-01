import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from 'react-router-dom';
import Layout from './components/Layout.jsx'
import Home, { loader as homeLoader } from './pages/Home.jsx'
import Weddings from './pages/Weddings.jsx'
import Commercial from './pages/Commercial.jsx'
import Creative from './pages/Creative.jsx'
import Contacts from './pages/Contacts.jsx'
import Error from './components/Error.jsx';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route
            index 
            element={<Home />}
            loader={homeLoader}
            errorElement={<Error />}
        />
        <Route path='weddings' element={<Weddings />}/>
        <Route path='commercial' element={<Commercial />}/>
        <Route path='creative' element={<Creative />}/>
        <Route path='contacts' element={<Contacts />}/>
    </Route>
))

export default function App () {
    return (
        <RouterProvider router={router} />
    );
}