import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


const ScrollToTop: any = (props: any) => {
  const {
    children,
    location: {
      pathname,
    },
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [
    pathname,
  ]);

  return children || null;
};

export default withRouter(ScrollToTop);
