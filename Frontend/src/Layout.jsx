import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
// import Home from './Components/Home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
   <Header/>
 <Outlet/>
 <Footer/>
</>
  )
}

export default Layout

// Layout.jsx

// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import { Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;
