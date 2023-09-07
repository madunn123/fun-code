import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useTodosContext } from '@/context/todosContext';

export default function CreateTodos() {
  const [isOpen, setIsOpen] = useState(true);
  const { dispatch } = useTodosContext();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD_TODO' });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(!isOpen)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-2xl gap-6 px-10 overflow-hidden align-middle transition-all transform py-14 modal-border bg-main-colors">
                <Dialog.Title
                  as="h1"
                  className="text-left title-create"
                >
                  create x.tdos
                </Dialog.Title>

                <div className="absolute top-3 right-3">
                  <button type="button" className="close-border text-fourty-colors" onClick={() => setIsOpen(!isOpen)}>
                    <IoCloseSharp className="xl:text-2xl" />
                  </button>
                </div>

                <form className="grid gap-5 gird-cols-1" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    className="p-2 px-4 text-sm font-medium placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    placeholder="Title x.tdos"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="type"
                    className="p-2 px-4 text-sm font-medium placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    placeholder="type"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="status"
                    className="p-2 px-4 text-sm font-medium placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    placeholder="status"
                    onChange={handleInputChange}
                  />
                  <textarea
                    rows="6"
                    name="description"
                    className="p-2 px-4 text-sm font-medium placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    placeholder="description"
                    onChange={handleInputChange}
                  />

                  <button type="submit" className="p-3.5 text-sm font-bold uppercase border-input text-fourty-colors">create x.tdos</button>
                </form>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
