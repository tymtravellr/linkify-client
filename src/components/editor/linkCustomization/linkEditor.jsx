import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { v4 } from 'uuid';
import { useDraftStore } from '../../../store/draftStore';
import { variantStyle } from '../../common/button/buttonVariantStyle';
import LinkCard from '../../common/cards/linkCard';

const LinkEditor = () => {

    const { draftLinks, updateDraftLinks } = useDraftStore(state => state);

    // Drag and drop functionality
    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const items = reorder(
            draftLinks,
            result.source.index,
            result.destination.index
        );

        updateDraftLinks(items);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    // Add, update and remove links
    const addLink = () => {
        updateDraftLinks([...draftLinks, { id: v4(), platform: "GitHub", link: "", valid: true }]);
    }

    const updateLink = (id, key, value) => {
        const index = draftLinks.findIndex(item => item.id === id);
        const updatedItem = { ...draftLinks[index], [key]: value };
        const updatedLinks = [...draftLinks];
        updatedLinks[index] = updatedItem;
        // updating valid field to true so that the error message is removed
        updatedLinks[index].valid = true;
        updateDraftLinks(updatedLinks);
    }

    const removeLink = (id) => {
        updateDraftLinks(draftLinks.filter(item => item.id !== id));
    }

    console.log('draftLinks', draftLinks.length === 5);

    return (
        <div className='h-full'>
            <button
                className={`${variantStyle('outline')} w-full mb-6`}
                onClick={addLink}
                disabled={draftLinks.length === 5}
            >+ Add new link</button>
            {
                /* 
                 Created a scrollable div to make the links scrollable
                 1. The parent div has a height of 100% and relative position
                 2. The child div has a height of 90% and absolute position. Given 90% to make space from the bottom so that the scrollbar bottom is visible.
                 3. The child div has overflow-auto.
                 4. on mobile child's height will be 100% and position will be relative.
                */
            }
            <div className='h-full relative overflow-hidden'>
                <div className='h-[93%] w-full absolute overflow-x-hidden overflow-y-auto scrollable'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="list">
                            {provided => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {
                                        draftLinks?.map((item, index) => (
                                            <Draggable draggableId={String(item.id)} index={index} key={item.id}>
                                                {provided => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`mb-8`}
                                                    >
                                                        <LinkCard
                                                            index={index}
                                                            item={item}
                                                            updateLink={updateLink}
                                                            removeLink={removeLink}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    )
}

export default LinkEditor