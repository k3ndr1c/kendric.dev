import Head from 'next/head'
import Layout from '../components/Layout'
import Terminal from 'terminal-in-react'
import { withRouter } from 'next/router'


function Home({ router }) {

  const openingMessage = 'Welcome to my home on the internet! For a list of all commands, type in `help`';
  const educationDetails = [
    [
      'Rutgers University – New Brunswick',
      'September 2018 – October 2019',
      'M.S. Computer Engineering',
      'GPA: 4.0'
    ],
    [
      'Rutgers University – New Brunswick',
      'September 2014 – May 2018',
      'B.S. Electrical & Computer Engineering, Minor in Mathematics',
      'GPA: 3.54'
    ]
  ];

  return (
    <Layout home>
      <Head>
        <title>.dev</title>
      </Head>
      <Terminal
        style={{ fontSize: "1.1em", overflowX: "auto" }}
        color="orange"
        outputColor="orange"
        barColor="#1d1f21"
        backgroundColor="#1d1f21"
        prompt="orange"
        promptSymbol="~$  "
        msg={openingMessage}
        hideTopBar={false}
        allowTabs={false}
        actionHandlers={{
          handleMinimise: () => null,
          handleClose: () => null,
          handleMaximise: () => null
        }}
        commands={{
          'education': (args, print, runCommand) => {
            educationDetails.forEach(school => school.forEach(
              line => print(line)
            ))
          }
        }}
        descriptions={{
          'education': 'show education',
        }}
      />
    </Layout>
  )
}

export default withRouter(Home);