import React, {useEffect, useState, useCallback, useMemo} from 'react'
import Layout from "components/layout"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        h1 {
            font-size: 4rem;
            }
            `;
    const Container = styled.div`
        text-align: center;
        color:red;
        `;


let Index = ()=>{
    
    return (
        <div>
            <Layout >
                <Container>
                    fkajfldjsfap[sf;dkm f,ndls,m J KLSAFDS]
                </Container>
            </Layout>
        </div>
    )
}

export default Index

// import Head from 'next/head';
// import styled, { createGlobalStyle } from 'styled-components';
// const GlobalStyle = createGlobalStyle`
//  h1 {
//    font-size: 4rem;
//  }
// `;
// const Container = styled.div`
//   text-align: center;
//   color:red;
// `;
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>SSR styled-components with Next.js Starter</title>
//       </Head>
//       <Container>
//         <GlobalStyle />
//         <h1>Hello, world!</h1>
//       </Container>
//     </>
//   );
// }