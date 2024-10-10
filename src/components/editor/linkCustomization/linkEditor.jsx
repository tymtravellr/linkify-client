import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useUserStore } from '../../../store/store';

const LinkEditor = () => {
    const { links, updateLinks } = useUserStore(state => state);
    const [linkState, setLinkState] = useState(links);

    const handleSave = () => {
        updateLinks(linkState);
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const items = reorder(
            linkState,
            result.source.index,
            result.destination.index
        );

        setLinkState(items);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    const addLink = () => {
        setLinkState([...linkState, { id: v4(), platform: "GitHub", link: "" }]);
    }

    const updateLink = (id, key, value) => {
        const index = linkState.findIndex(item => item.id === id);
        const updatedItem = { ...linkState[index], [key]: value };
        const updatedLinks = [...linkState];
        updatedLinks[index] = updatedItem;
        setLinkState(updatedLinks);
    }

    const removeLink = (id) => {
        setLinkState(linkState.filter(item => item.id !== id));
    }

    return (
        <div>
            <div>
                <button className="w-full mb-6" onClick={addLink}>+ Add new link</button>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="list">
                        {provided => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                    linkState.map((item, index) => (
                                        <Draggable draggableId={String(item.id)} index={index} key={item.id}>
                                            {provided => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`mb-8`}
                                                >
                                                    <div key={index} className="bg-white p-6 rounded-lg shadow mb-6">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <h2 className="text-lg font-semibold">Link #{index}</h2>
                                                            <button onClick={() => removeLink(item.id)}>Remove</button>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                                                                <select onChange={(e) => updateLink(item.id, 'platform', e.target.value)}>
                                                                    <option value="GitHub">GitHub</option>
                                                                    <option value="YouTube">YouTube</option>
                                                                    <option value="Twitter">Twitter</option>
                                                                    <option value="LinkedIn">LinkedIn</option>
                                                                    <option value="Instagram">Instagram</option>
                                                                    <option value="Facebook">Facebook</option>
                                                                    <option value="Website">Website</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                                                                <input
                                                                    type="url"
                                                                    value={item.link}
                                                                    onChange={(e) => updateLink(item.id, 'link', e.target.value)}
                                                                    placeholder="https://www.example.com/username"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
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
            <div>
                <button className="w-full" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default LinkEditor