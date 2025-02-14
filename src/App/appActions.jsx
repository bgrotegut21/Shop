const appLoader = ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  // console.log(q, 'the query');
  return q;
};

export { appLoader };
