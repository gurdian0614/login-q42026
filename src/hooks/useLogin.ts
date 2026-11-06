import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import Swal from "sweetalert2";
import type { Credenciales } from "../types/Credenciales";

const useLogin = () => {
    const USUARIO_VALIDO: Credenciales = {
        email: "admin@micorreo.com",
        password: "123456",
    };

    const objCredenciales: Credenciales = {
        email: "",
        password: "",
    }

    const [form, setForm] = useState<Credenciales>(objCredenciales);
    const [cargando, setCargando] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.email.trim() || !form.password.trim()) {
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Por favor ingresa tu correo y contraseña",
            });
            return;
        };
        
        // Simular la petición al servidor
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
    
            const correctas = form.email === USUARIO_VALIDO.email &&
                              form.password === USUARIO_VALIDO.password;
    
            if (correctas) {
                Swal.fire({
                    icon: "success",
                    title: "Inicio de Sesión Exitoso!",
                    text: `Bienvenido, ${form.email}`,
                    timer: 2000,
                });
                setForm(objCredenciales);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Credenciales incorrectas!",
                    text: "EL correo o la contraseña no son válidos",
                });
            }
        }, 1000);
    };

    return {
        form,
        cargando,
        handleChange,
        handleSubmit,
    };
}

export default useLogin;