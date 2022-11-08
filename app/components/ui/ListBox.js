import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {ChevronUpDownIcon} from '@heroicons/react/20/solid'


export default function ListBox({variants, action, currentSelected}) {

    const [selected, setSelected] = useState({...currentSelected})

    const changeType = (selectedVariant) => {
        action(selectedVariant)
        setSelected(selectedVariant)
    }

    return (
        <div className="">
            <Listbox value={selected} onChange={changeType}>
                <div className="relative mt-1">
                    <Listbox.Button
                        className="relative w-96 flex justify-between items-center cursor-pointer rounded-lg bg-white py-2 pl-3 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                        <p className="text-medium">{selected.text}</p>
                        <span className="pointer-events-none flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-6 w-6 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-medium shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {variants.map((variant) => (
                                <Listbox.Option
                                    key={variant.id} className='relative cursor-pointer select-none py-2 pl-10 pr-4'
                                    value={variant}>
                                    <>
                                        <span className='block'>{variant.text}</span>
                                    </>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
