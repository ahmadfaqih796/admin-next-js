import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    loading: false,
  });

  const handleLoading = (status) => {
    setState((prevState) => ({
      ...prevState,
      loading: status,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    handleLoading(true);
    const { target } = event;
    const { email, password } = target;

    const data = {
      email: email.value,
      password: password.value,
      strategy: "local",
    };
    console.log("masuk mas", data);
    try {
      const { data: res } = await Axios.post("/api/login", data);
      setColor("success");
      setMessage("Berhasil login");
      setOpen(true);
      handleLoading(false);

      if (res.role === "client" || res.role === "client3") {
        return router.replace("/client/all");
      }

      if (res.isLeader) {
        return router.replace("/leader/all");
      }

      if (res.role === "admin") {
        return router.replace("/dashboards/dashboard");
      }

      if (res.role === "superadmin") {
        return router.replace("/superadmin/dashboard");
      }

      // handleLoading(false);
      // setColor("error");
      // setOpen(true);
      // setMessage("Unauthorized");
      // await Axios.post("/api/logout");
      return;
    } catch (error) {
      console.log("ddddddddd", error?.response);
      handleLoading(false);
      setColor("error");
      setOpen(true);
      setMessage(
        error?.response?.data?.message ?? "Terjadi kesalahan pada server"
      );
      return;
    }
  };

  return {
    loading: state.loading,
    handleLogin,
    color,
    message,
    open,
    setOpen,
  };
};

export default useLogin;
