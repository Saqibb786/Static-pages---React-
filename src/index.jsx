// ============================ 1 ============================ 
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// /**
//  * Challenge (part 1):
//  * Create a custom "Page" component
//  * 
//  * It should return an ordered list with the reasons why you're
//  * excited to be learning React :)
//  * 
//  * Render the Page component.
//  */

// function Page() {
//     return (
//     <main>
//     <ol>
//         <li>Because it builds aweosome sites</li>
//         <li>Its easy and scalable</li>
//         <li>High in demand</li>
//     </ol>
//     </main>
//     )
// }


// root.render(
//     <Page />
// )

//   ============================ 2 ============================ 


// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// import reactLogo from "./assets/react.svg"

// /**
// Challenge: 

// Part 2: 
// - Add a `<header>` element with an `<img />` element with the image of the 
//   React logo inside (src="react-logo.png") and make sure to set the 
//   width to something more manageable so it doesn't take up the whole screen.
//   Also, as always, you should include some alt text on the image.
// - Add an `<h1>` with some text describing the page. (E.g. "Reasons
//   I'm excited to learn React"). Place it above the ordered list, then wrap
//   the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
//   structure flowing well.
// - Add a `<footer>` after the list that says: 
//     "© 20xx <last name here> development. All rights reserved."
//  */


// function Page() {
//     return (
//         <>
//         <header>
//         <img src={reactLogo} alt="React logo" width={'40px'} />

//         </header>
//         <main>
//             <h1>Reasons
//               I'm excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to
//                 fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer
//                 if I know React</li>
//             </ol>
//         </main>
//          <footer>
//                 <small>© 2024 Saqib development. All rights reserved.</small>
//         </footer>
//         </>
//     )
// }

// root.render(
//     <Page />
// )



//  ============================ 3 ============================ 

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
//  import reactLogo from "./assets/react.svg"

// /** Mini Challenge:
//  * 
//  * Move the `header` element from the Page component into 
//  * its own component called "Header"
//  * 
//  * Then render an instance of the Header component inside
//  * the Page component where the `header` used to be.
//  */

// function Header() {
//     return (
//         <header>
//             <img src={reactLogo} width="40px" alt="React logo" />
//         </header>
//     )
// }
// function Main() {
//     return (
//     <main>
//         <h1>Reason I am excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer if I know React</li>
//             </ol>
//     </main>
//     )
// }
// function Footer() {
//     return (
//             <footer>
//                 <small>© 2024 Ziroll development. All rights reserved.</small>
//             </footer>

//     )
// }

// function Page() {
//     return (
//         <>
//             <Header />
//             <Main />
//             <Footer />
            
//         </>
//     )
// }

// root.render(
//     <Page />
// )


//  ============================ 4 ============================ 

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
// import reactLogo from "./assets/react.svg"

// /**
//  * Challenge:
//  * 
//  * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
//  *   "Pricing", "About", and "Contact"
//  */

// function Header() {
//     return (
//         <header>
//             <img src={reactLogo} width="40px" alt="React logo" />
//             <nav>
//                 <ul>
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <h1>Reason I am excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer if I know React</li>
//             </ol>
//         </main>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2024 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <Footer />
//         </>
//     )
// }

// root.render(
//     <Page />
// )


//  ============================ 5 ============================ 


import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import reactLogo from "./assets/react.svg"

/**
 * Challenge:
 * 
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */

function Header() {
    return (
        <header className="header">
            <img src={reactLogo} className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main className="main">
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li className="main-list-item">React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li className="main-list-item">I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)







// =================================================================