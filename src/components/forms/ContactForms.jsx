import FormInput from "./FormInput";
import Buttom from "../Buttom";

const ContactForms = () => (
    <div>
        <h3 className="text-2xl text-zinc-700 mb-1">
            Pide por esa boquita
        </h3>
        <p className="text-zinc-700 mb-3">
            ¿Qué te gustaria ver en nuestra próxima edición?
        </p>
        <form>
            <FormInput
                label="¿Cómo te llamas?"
                placeholder="Tu nombre"
                type="text"
                name="nombre"
            />
            <FormInput
                label="¿Dónde te escribimos?"
                placeholder="Tu mail"
                type="email"
                name="mail"
            />
            <FormInput
                label="¿Qué película quieres que traigamos?"
                placeholder="No te preocupes que la encontramos ;)"
                type="text"
                name="peticion" /* se le pone nombre para luego llamarlo y hacerle referencia a este form */
            />
            <div className="flex flex-col gap-1 mb-4">
                <label className="text-base font-medium text-zinc-700">¿Algo que mejorar?</label>
                <textarea name="comentarios" placeholder="Cuéntanoslo" className="w-full px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 rounded-md transition-all outline-none  border-2 border-zinc-700 bg-white focus:border-indigo-600"></textarea>
            </div>

            <div>
                <input type="checkbox" name="politics" id="suscripcion" className="mr-2" />
                <span className="text-xs">Acepto y he leído la política de privacidad.</span>
            </div>
            <div className="my-4 flex justify-end">
                <Buttom type="submit" text="Enviar"/>
            </div>
        </form>
    </div>
)


export default ContactForms;