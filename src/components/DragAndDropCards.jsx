import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const CardTypes = {
    CARD: 'card',
};

const Card = ({ id, text, moveCard, index }) => {
    const [, ref] = useDrag({
        type: CardTypes.CARD,
        item: { id, index },
    });

    const [, drop] = useDrop({
        accept: CardTypes.CARD,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveCard(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div
            ref={(node) => {
                ref(drop(node));
            }}
            className="p-10 bg-zinc-900 text-5xl text-white shadow-md w-full cursor-move text-center"
        >
            {text}
        </div>
    );
};

const DragAndDropCards = () => {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem('dragAndDropCards');
        return savedCards ? JSON.parse(savedCards) : [
            { id: 1, text: 'Card 1' },
            { id: 2, text: 'Card 2' },
            { id: 3, text: 'Card 3' },
            { id: 4, text: 'Card 4' },
            { id: 5, text: 'Card 5' },
            { id: 6, text: 'Card 6' },
        ];
    });

    useEffect(() => {
        const savedCards = localStorage.getItem('dragAndDropCards');
        if (savedCards) {
            setCards(JSON.parse(savedCards));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dragAndDropCards', JSON.stringify(cards));
    }, [cards]);

    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = [...cards];
        const [movedCard] = updatedCards.splice(fromIndex, 1);
        updatedCards.splice(toIndex, 0, movedCard);
        setCards(updatedCards);
    };

    return (
        <div className="grid gap-4 grid-cols-3 grid-rows-3 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    index={index}
                    moveCard={moveCard}
                />
            ))}
        </div>
    );
};

export default DragAndDropCards;
