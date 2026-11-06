import useLogin from "../hooks/useLogin";

export const Login = () => {
    const {
        form,
        cargando,
        handleChange,
        handleSubmit,
    } = useLogin();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Iniciar sesión
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Ingresa tus credenciales para continuar
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="**********"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button type="submit" disabled={cargando} className="w-full py-2 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed">
                    {cargando ? "Verificando..." : "Ingresar"}
                </button>

                <p className="text-sm text-center text-gray-400">
                    Prueba: admin@micorreo.com / 123456
                </p>
            </form>
        </div>
    );
};