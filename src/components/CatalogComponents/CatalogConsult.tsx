import React, {FormEvent} from 'react';
import emailjs from "@emailjs/browser";
import {emailValidation, nameValidation} from "../../utils/valiodations";
import {toast, ToastContainer} from "react-toastify";
import classNames from "classnames";

const CatalogConsult: React.FC = () => {
    const [nameValid, setNameValid] = React.useState(false)
    const [emailValid, setEmailValid] = React.useState(false)

    const refForm = React.useRef<HTMLFormElement>(null)
    const refEmail = React.useRef<HTMLInputElement>(null)
    const refName = React.useRef<HTMLInputElement>(null)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        const conditions = refEmail.current && emailValidation(refEmail.current.value) && refName.current && nameValidation(refName.current.value)
        if (conditions) {
            refForm.current && emailjs.sendForm('service_tbtmqfg', 'template_xezuibi', refForm.current, 'goD6f_SWoOpTud88y')
            refEmail.current.value=''
            refName.current.value=''
            setEmailValid(false)
            setNameValid(false)
            toast.success('Дякуємо ваша заявка прийнята')
            return
        }
        if(refEmail.current && !(emailValidation(refEmail.current.value))) {
            setEmailValid(true)
            toast.error('Некоректний Email')
        }
        if(refName.current && !(nameValidation(refName.current.value))) {
            setNameValid(true)
            toast.error('Поле ім\'я має бути заповнене')
        }
    }
    return (
        <div className="catalog__consult">
            <div className="catalog__consultbox">
                <div className="catalog__consultitle">Потрібна консультація?</div>
                <p className="catalog__consulttext">
                    При виникненні будь-яких питань, залиште свої контакти та
                    Наші консультанти зв'яжуться з Вами.
                </p>
                <form ref={refForm} onSubmit={onSubmit} className="catalog__consultform">
                    <div className="catalog__consultfields">
                        <input
                            ref={refName}
                            type="text"
                            name="name"
                            className={classNames("catalog__consultinput catalog__consultinput--left",{
                                "invalid" : nameValid
                            })}
                            placeholder="Ваше ім'я"
                            onChange={() => setNameValid(false)}
                        />
                        <input
                            ref={refEmail}
                            type="text"
                            name="message"
                            className={classNames("catalog__consultinput catalog__consultinput--right",{
                                "invalid" : emailValid
                            })}
                            placeholder="Email"
                            onChange={() => setEmailValid(false)}
                        />
                    </div>
                    <button type={"submit"} className="catalog__consultbutton button">
                        Замовити дзвінок
                    </button>
                </form>
            </div>
            <img
                src="images/catalog-map.png"
                alt=""
                className="catalog__consultmap"
            />
            <ToastContainer/>
        </div>
    );
};

export default CatalogConsult;