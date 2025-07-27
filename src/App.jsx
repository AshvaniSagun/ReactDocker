import './App.css'

function App() {

  return (
    <>
        <div className="container">
            <header>Header</header>
            <nav>
                <ul>
                    <li>Navigation Item 1</li>
                    <li>Navigation Item 2</li>
                    <li>Navigation Item 3</li>
                    <li>Navigation Item 4</li>
                </ul>
            </nav>
            <main>
                <h2>Main Content</h2>
                <p>
                    This is the main content area. It will expand to fill the available space between the two sidebars.
                </p>
                <p>Put your app content here.</p>
            </main>
            <aside>
                <h3>Right Sidebar</h3>
                <p>Additional info or ads go here.</p>
            </aside>
            <footer>Footer © 2025</footer>
        </div>
    </>
  )
}

export default App
