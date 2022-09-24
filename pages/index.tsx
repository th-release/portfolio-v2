import type { NextPage } from 'next'
import Head from '../components/Head'

const Home: NextPage = () => {
  return (
    <main className='main'>
      <Head />
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
      <article className='second'>
        <h1>더 가다듬고<br/><strong>더 좋은 사람으로</strong></h1>
        <div className='skill-box'>
          <div>
            <h2>저는 <strong>&quot;백앤드 개발자&quot;</strong>입니다.</h2>
            <div>
              <p>
                # Node.js
                <br/>
                # Typescript
                <br/>
                # Nest.js
                <br/>
                # SQL & Database
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='third'>
        <h1>새로운 도전에<br/><strong>끝없는 도전</strong></h1>
        <div className='challenge-box'>
          <div className='sort'>
            <div style={{ backgroundImage: "url(/action01.jpg)" }}>
              <h2>경북소프트웨어고등학교<br/><strong>해킹동아리 부대표</strong></h2>
            </div>
            <div style={{ backgroundImage: "url(/gbsw.jpg)" }}>
              <h2>경북소프트웨어고등학교<br/><strong>2022/6~2023/3 휴학</strong></h2>
            </div>
            <div style={{ backgroundImage: "url(/laundry.png)" }}>
              <h2>경북소프트웨어고등학교<br/><strong>세탁실 관리 웹 사이트 개발</strong></h2>
            </div>
            <div style={{ backgroundImage: "url(/backend.png)" }}>
              <h2>경북소프트웨어고등학교<br/><strong>학교 API 구축 중</strong></h2>
            </div>
          </div>
        </div>
      </article>
      <footer className='fourth'>
      <div className='footer-box'>
        <div>
          <h2>저는 <strong>&#34;백앤드 개발자 최태혁&#34;</strong>입니다.<br/><p style={{ fontSize: "15px" }}><br/>th.release.cth@gmail.com<br/><br/><a href='https://github.com/th-release/' style={{ color: "#0070f3" }}>th-release&#39;s github</a></p></h2>
          <div>
          </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home
