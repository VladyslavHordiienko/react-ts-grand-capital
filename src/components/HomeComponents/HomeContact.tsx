import React, {FormEvent} from 'react';
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {emailValidation, nameValidation} from "../../utils/valiodations";
import classNames from "classnames";


const HomeContact: React.FC = () => {
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
        <section className="bottomcontent">
            <div className="bottomcontent__title">
                Не можете знайти те, що потрібно? Залишіть свій телефон і ми підберемо
                для Вас найкращі пропозиції.
            </div>
            <form onSubmit={onSubmit} ref={refForm} className="bottomcontent__form">
                <div className="bottomcontent__inputbox">
                    <input
                        ref={refName}
                        type="text"
                        name="name"
                        className={classNames("bottomcontent__input bottomcontent__input--left",{
                            "invalid" : nameValid
                        })}
                        placeholder="Ваше ім'я"
                        onChange={() => setNameValid(false)}
                    />
                    <input
                        ref={refEmail}
                        type="text"
                        name="message"
                        className={classNames("bottomcontent__input bottomcontent__input--right",{
                            "invalid" : emailValid
                        })}
                        placeholder="Email"
                        onChange={() => setEmailValid(false)}
                    />
                </div>
                <button type={"submit"} className="bottomcontent__button button">
                    Замовити дзвінок
                </button>
            </form>
            <ToastContainer/>
        </section>
    );
};

export default HomeContact;