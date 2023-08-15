import { withSessionSsr } from "./withSession";

const WithAuthAdmin = (gssp) =>
  withSessionSsr(async (context) => {
    try {
      const user = context.req.session.user;
      // you can check the user in your DB here
      if (!user) {
        return {
          redirect: {
            permanent: false,
            destination: "/authentication/login",
          },
        };
      }
      return await gssp(context);
    } catch (error) {
      if (error.response.data.code === 401) {
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
