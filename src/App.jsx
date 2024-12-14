import SwipeableCard from './components/SwipableCard.jsx'
import toolbar from './assets/toolbar.png'

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col  overflow-hidden bg-gray-100">
            <SwipeableCard/>
            <img src={toolbar} alt="toolbar" className="w-full object-cover"/>
        </div>
    )
}

export default App