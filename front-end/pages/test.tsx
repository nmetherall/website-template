const fetchTest = async () =>
  fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/test`).then(res =>
    res.json(),
  );

export const getStaticProps = async () => {
  console.log("test", await fetchTest());
  return { props: { test: await fetchTest() } };
};

const Test: React.FC<{ test: any }> = ({ test }) => {
  return <>{JSON.stringify(test)}</>;
};

export default Test;
