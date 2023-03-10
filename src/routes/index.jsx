
// ! SOMETHING IS NOT CORRECT
import { lazy } from "react";
import { Route } from "react-router-dom";

const route = [
    {
        path: '',
        element: lazy(() => import('../pages/HomeTemplate/HomeTemplate')),
        nested: [
            {
                path: '',
                element: lazy(() => import('../pages/HomeTemplate/HomePage/HomePage')),
            },
            // {
            //     path: 'detail',
            //     element: lazy(() => import('../pages/HomeTemplate/DetailPage/DetailPage')),
            // },
            // {
            //     path: 'booking',
            //     element: lazy(() => import('../pages/HomeTemplate/BookingPage/BookingPage')),
            // },
            {
                path: 'showing',
                element : lazy(() => import('../pages/HomeTemplate/ShowingPage/ShowingPage'))
            },
            {
                path: 'comming-soon',
                element: lazy(() => import('../pages/HomeTemplate/CommingSoonPage/CommingSoonPage'))
            },
            {
                path: 'login',
                element: lazy(() => import('../pages/HomeTemplate/LoginPage/LoginPage')),
            },
            {
                path: 'sign-in',
                element: lazy(() => import('../pages/HomeTemplate/SignInPage/SignInPage')),
            },
            {
                path: '*',
                element: lazy(() => import('../pages/HomeTemplate/HomePage/HomePage'))
            }
        ]
    },
    {
        path: 'admin',
        element: lazy(() => import('../pages/AdminTemplate/AdminTemplate')),
        nested: [
            {
                path: '',
                element: lazy(() => import('../pages/AdminTemplate/DashboardPage/DashboardPage')),
            },
            {
                path: 'manage-user',
                element: lazy(() => import('../pages/AdminTemplate/UserPage/UserPage')),
            },
            {
                path: 'film',
                element: lazy(() => import('../pages/AdminTemplate/ManageFilmPage/ManageFilmPage')),
            },
            {
                path: 'addnew',
                element: lazy(() => import('../pages/AdminTemplate/AddNewPage/AddNewPage')),
            },
            {
                path: 'show-time',
                element: lazy(() => import('../pages/AdminTemplate/ShowTimesPage/ShowTimesPage')),

            },
            {
                path: 'add-new-user',
                element: lazy(() => import('../pages/AdminTemplate/AddNewUserPage/AddNewUserPage')),
            }
        ]
    },
    {
        path:'user',
        element: lazy(() => import('../pages/UserTemplate/UserTemplate')),

    }
]
const renderRoute = () => {
    return route.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element/>}>
                {
                    route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={<item.element/>}></Route>
                    })
                }
            </Route>

        } else {
            return <Route key={route.path} path={route.path} element={<route.element/>}>

            </Route>
        }
    })
}
export default renderRoute