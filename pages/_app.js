import "../styles/globals.css"
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// ten Layout dame tady, aby se nam zobrazoval na vsech nasich strankach

/*
FOR DEPLOYING OF NEXT JS PROJECT IT IS GOOD TO USE VERCEL (je optimized for deploying nextjs)
https://vercel.com/
Prihlasuje se tam pomoci gitHub a propoji se to primo s tim repository, ktery chceme deploynout.
Vercel pro nas executuje npm run build a pak npm start
Na vercelu vyberu ten repository a dam Import Project
V mongoDb musim dat network access jako global.
Kdyz udelame nejakou zmenu, tak pak jen dame git add ., git commit -m "", git push
a Vercel will observe the branch and build it (redeploy) automatically. 
*/
