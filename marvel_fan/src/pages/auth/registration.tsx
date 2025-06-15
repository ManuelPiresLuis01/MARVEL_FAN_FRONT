import Footer from "../../components/footer/footer";
import TermsModal from "../../components/modals/termsmodal/termsmodal";
import { FaGoogle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { LuCircleCheck } from "react-icons/lu";
import Style from "./style/index.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import type { user } from "../../service/types/user.types";
import { Registry } from "../../service/authservice/registry";

const Registration = () => {
    const navigate = useNavigate();
    const [terms, setTerms] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [user, setUser] = useState<user>({} as user)
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await Registry(user)
            navigate(`/auth/activate/${user.email}`);
        } catch (error: any) {

        }
    };
    return (
        <div>
            <div className={Style.container}>
                <form onSubmit={submit}>
                    <h1>Registro</h1>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="Email " onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                    <input type="password" placeholder="Senha" />
                    <input type="tel" placeholder="Numero de telefone " />
                    <select required>
                        <option disabled>Selecione o gênero</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                    </select>
                    <select required>
                        <option disabled>Selecione o seu país</option>
                        <option value="brazil">Angola</option>

                    </select>
                    <select required>
                        <option disabled>Selecione sua cidade</option>
                        <option value="male">Luanda</option>
                    </select>
                    <input type="date" />

                    <p className={Style.remember}><i onClick={() => setTerms(!terms)}>{!terms ? <MdRadioButtonUnchecked /> : <LuCircleCheck className={Style.red} />}</i>Aceito os <span onClick={() => setShowModal(true)}>termos e condições</span></p>
                    <TermsModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />
                    <p className={Style.error}>{error}</p>

                    <button className={Style.login}>Registrar</button>
                    <button className={Style.google}>Registrar com Google <i className={Style.red} ><FaGoogle /></i></button>
                    <div className={Style.authlinks}>
                        <Link to={"/auth/login"}>Ja tenho uma conta !</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}


export default Registration;
