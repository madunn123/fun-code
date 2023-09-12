import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useTodosContext } from '@/context/todosContext';
import useForm from '@/hooks/useForm';

export default function CreateTodos() {
  const [isOpen, setIsOpen] = useState(true);
  const { dispatch } = useTodosContext();

  const { formState, register } = useForm({
    title: '',
    type: '',
    status: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD_TODO', payload: formState });
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
              <Dialog.Panel className="relative flex flex-col w-full max-w-2xl gap-6 px-10 overflow-hidden align-middle transition-all transform py-14 modal-border dark:bg-[#131917] bg-main-colors">
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
                    {...register('title')}
                  />

                  <select
                    name="type"
                    id="type"
                    className="p-2 px-2 text-sm font-medium uppercase placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    {...register('type')}
                  >
                    <option value="" selected hidden>choose a type</option>
                    <option value="daily" className="bg-main-colors">daily progress</option>
                    <option value="weekly" className="bg-main-colors">weekly progress</option>
                    <option value="monthly" className="bg-main-colors">monthly progress</option>
                  </select>

                  <select
                    name="status"
                    id="status"
                    className="p-2 px-2 text-sm font-medium uppercase placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    {...register('status')}
                  >
                    <option value="" selected hidden>choose a status</option>
                    <option value="urgent" className="bg-main-colors">urgent</option>
                    <option value="on-progress" className="bg-main-colors">on-progress</option>
                    <option value="finished" className="bg-main-colors">finished</option>
                  </select>

                  <textarea
                    rows="6"
                    name="description"
                    className="p-2 px-4 text-sm font-medium placeholder:uppercase border-input bg-inherit text-fourty-colors placeholder:text-fourty-colors"
                    placeholder="description"
                    {...register('description')}
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
