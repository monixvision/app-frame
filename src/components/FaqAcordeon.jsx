import { FAQS } from "../data/faqs";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
/* MOVIDAS QUE YA TRAE LA LIBRERIA */
import { ChevronDownIcon } from '@heroicons/react/20/solid';
/* ESTE ES EL ICONO TIPICO*/

const FaqAcordeon = () => (
    /* {/* <Disclosure>
      <DisclosureButton className="py-2">Is team pricing available?</DisclosureButton>
      <DisclosurePanel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire team.
      </DisclosurePanel>
    </Disclosure> */ /* ESTO ES DE MANERA MANUAL PERO PARA HACERLO AUTOMATICO USAMOS MAP() */ 

    <>
    {FAQS.map((faq) => (
        <Disclosure key={faq.id} as="div" className="border p-4 mb-4 rounded-lg">
          {({ open }) => (
            <>
              <DisclosureButton className="flex justify-between w-full text-left font-medium text-gray-900 items-center cursor-pointer hover:text-indigo-600 py-2">
                <span>{faq.pregunta}</span>
                <ChevronDownIcon className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-180 ' : ''}`}
                /* esto es para que el icono rote cuando el acordeon esté abierto */
                />
              </DisclosureButton>

              <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 pt-4">
                {faq.respuesta}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );


  /* primero base de datos luego map( (atributo que es una palabra que solo usamos para esto)) y ya luego el acordeon pero para saber cuando esta abierto o cerrado usamos Open */


export default FaqAcordeon;