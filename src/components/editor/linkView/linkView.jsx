import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import { v4 } from "uuid";
import { useUserStore } from "../../../store/store";

const LinkView = () => {
  const { links, updateLinks } = useUserStore(state => state);
  const [state, setState] = useState(links);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      state,
      result.source.index,
      result.destination.index
    );

    setState(items);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const addLink = () => {
    setState([...state, { id: v4(), platform: "GitHub", link: "" }]);
  }

  const removeLink = (id) => {
    setState(state.filter(item => item.id !== id));
  }

  const updateLink = (id, key, value) => {
    const index = state.findIndex(item => item.id === id);
    const updatedItem = { ...state[index], [key]: value };
    const updatedLinks = [...state];
    updatedLinks[index] = updatedItem;
    setState(updatedLinks);
  }

  const handleSave = () => {
    updateLinks(state);
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Customize your links</h1>
      <p className="text-gray-600 mb-6">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button className="w-full mb-6" onClick={addLink}>+ Add new link</button>

      {
        state.length > 0
          ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {
                      state.map((item, index) => (
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
          )
          : <p className="text-gray-500">No links added yet</p>
      }
      <button className="w-full" onClick={handleSave}>Save</button>
    </div>
  )
}

export default LinkView