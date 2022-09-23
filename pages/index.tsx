import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main className='main'>
      <div className='LeftSidebar'>
        <a style={{ fontSize: "215%", fontWeight: 400 }}>T<br/>H<br/>|<br/>R<br/>E<br/>L<br/>E<br/>A<br/>S<br/>E<br/>|<br/>C<br/>T<br/>H</a>
      </div>
      <div className='RightSidebar'>
        <a style={{ fontSize: "215%", fontWeight: 400 }}>P<br/>O<br/>R<br/>T<br/>F<br/>O<br/>L<br/>I<br/>O</a>
      </div>
      <article className="first">
        <h1>환영합니다, unknown</h1>
        <p>스크롤을 내려주세요.</p>
      </article>
      <article className="first">
        <h1>환영합니다, unknown</h1>
        <p>스크롤을 내려주세요.</p>
      </article>
      <article className='second'>

      </article>
    </main>
  )
}

export default Home
