import React, {useState} from 'react';
import {X, Heart, MessageCircle, ShoppingCart} from 'lucide-react';
import blue from '../assets/blue-white.jpg';
import orange from '../assets/oramge.jpg';
import white from '../assets/white.jpg';

const SwipeableCard = () => {
    const [cards] = useState([
        {
            id: 1,
            image: white,
            name: 'White embroidered sweater',
            price: 20,
        },
        {
            id: 2,
            image: blue,
            name: 'Blue and white sweater',
            price: 31,
        },
        {
            id: 3,
            image: orange,
            name: 'Orange sweater',
            price: 26,
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStart, setDragStart] = useState(null);
    const [dragOffset, setDragOffset] = useState(0);

    const handleTouchStart = (e) => {
        setDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (dragStart === null) return;
        const currentPosition = e.touches[0].clientX;
        const offset = currentPosition - dragStart;
        setDragOffset(offset);
    };

    const handleTouchEnd = () => {
        if (Math.abs(dragOffset) > 100) {
            // Swipe threshold reached
            if (dragOffset > 0) {
                handleLike();
            } else {
                handlePass();
            }
        }
        setDragStart(null);
        setDragOffset(0);
    };

    const handleLike = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePass = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentCard = cards[currentIndex];

    return (
        <div className="flex flex-col items-center p-4 max-w-md mx-auto flex-grow w-full">
            {currentCard && (
                <div
                    className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-200 flex-grow w-full"
                    style={{
                        transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.05}deg)`,
                        backgroundImage: `url(${currentCard.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex flex-col playfair absolute top-0 left-0 right-0 bg-gradient-to-t to-black/60 from-transparent p-4 pb-8">
                        <h2 className="text-4xl font-bold">{currentCard.name}</h2>
                        <span className="text-3xl">{currentCard.price}€</span>
                    </div>
                    <div
                        className="flex justify-end playfair absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <button className="p-2 bg-transparent text-white mr-2">
                                <MessageCircle size={24}/>
                            </button>
                            <button className="p-2 text-white bg-transparent">
                                <ShoppingCart size={24}/>
                            </button>
                    </div>
                </div>
                )}

            <div className="flex justify-center gap-6 mt-6">
                <button
                    onClick={handlePass}
                    className="p-4 bg-blue-100 rounded-full text-blue-500 hover:bg-blue-200 transition-colors"
                >
                    <X size={24}/>
                </button>
                <button
                    onClick={handleLike}
                    className="p-4 bg-blue-500 rounded-full text-blue-100 hover:bg-blue-200 transition-colors"
                >
                    <Heart size={24}/>
                </button>
            </div>
        </div>
    );
};

export default SwipeableCard;