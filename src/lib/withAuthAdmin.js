import { withSessionSsr } from "./withSession";

const WithAuthAdmin = (gssp) =>
  withSessionSsr(async (context) => {
    try {
      const user = context.req.session.user;
      console.log("masuk", user);
      if (!user) {
        return {
          redirect: {
            permanent: false,
            destination: "/authentication/login",
          },
        };
      }
      if (user.role != "admin") {
        context.req.session.destroy();
        return {
          redirect: {
            permanent: false,
            destination: "/absen/login",
          },
        };
      }
      return await gssp(context);
    } catch (error) {
      if (error.response?.data.code === 401) {
        return {
          redirect: {
            permanent: false,
            destination: "/authentication/login",
          },
        };
      }
    }
    return await gssp(context);
  });

export default WithAuthAdmin;
