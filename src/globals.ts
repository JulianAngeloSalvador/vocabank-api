interface PathProps {
  title: string;
  route: string;
  children?: PathProps[];
}

const dashboard_paths: PathProps = {
  title: "dashboard",
  route: "/dashboard",
};

const app_paths: PathProps = {
  title: "",
  route: "/",
  children: [
    {
      title: "words",
      route: "/words",
    },
    dashboard_paths,
  ],
};

const url = {
  current: "",
};

export const globals = {
  site: {
    title: "Vocabank",
  },
  paths: {
    app_paths,
    dashboard_paths,
  },
  url,
};
