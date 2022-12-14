import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>BOTA</title>
      </Head>
      <div className="top">
        <header className="header partsGrid">
          <nav className="header-nav grid12">
            <img src="/img/logo-blue.svg" alt="" />
            <ul>
              <li>
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>植物ガイド</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>体験</a>
                </Link>
              </li>
            </ul>

            <Link href="/">
              <a className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="sr-only">カート</span>
              </a>
            </Link>
          </nav>

          <div className="catch grid12">
            <h1>ボタニカルライフを楽しもう</h1>
            <Link href="/">
              <a>好みの植物を探す</a>
            </Link>
          </div>

          <div className="custom-shape-divider-bottom-1661144405">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

        </header>

        <section className="list list-plant partsGrid">
          <div className="grid12">
            <h2>好きな植物に囲まれて暮らそう</h2>
            <p>
              ふとしたときに目に入る緑のサボテンや、色とりどりの花。好きな植物に囲まれてほっこりボタニカルライフを満喫しませんか？
            </p>
            <ul className="grid12 cols-mob2 cols-pc4">
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/plant.jpg" alt="" />
                    <h3>観葉植物</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/plant-bonsai.jpg" alt="" />
                    <h3>盆栽</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/plant-preserved.jpg" alt="" />
                    <h3>プリザーブド</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/plant-edible.jpg" alt="" />
                    <h3>食用</h3>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="list list-exp partsGrid">
          <div className="grid12">
            <h2>身近なところで体験しよう</h2>
            <p>
              植物たちとの上手な付き合い方や、活用術、もっと気軽に触れ合う方法を紹介します。サブスクやギフトもご利用ください。
            </p>

            <ul className="grid12 cols-mob2 cols-pc3">
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/exp-online.jpg" alt="" />
                    <h3>オンライン講座</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/exp-subsc.jpg" alt="" />
                    <h3>サブスク</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/exp-gift.jpg" alt="" />
                    <h3>ギフト</h3>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="list list-item partsGrid">
          <div className="grid12 frame">
            <h2>人気の植物</h2>
            <p>
              オンラインショップで人気の植物たちです。好みのサボテンや花々でお部屋を彩ってみてください。
            </p>
            <ul className="grid12 cols-mob2 cols-pc2">
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/item-a101.jpg" alt="" />
                    <h3>サボテン A101</h3>
                    <p>¥1,800</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/item-ea201.jpg" alt="" />
                    <h3>サボテンセット EA201</h3>
                    <p>¥7,500</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/item-flower.jpg" alt="" />
                    <h3>フラワーポット</h3>
                    <p>¥4,200</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <img src="/img/item-b100.jpg" alt="" />
                    <h3>サボテン B100</h3>
                    <p>¥3,600</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <footer className="footer partsGrid">
          <nav className="footer-nav grid12 cols-pc4">
            <div>
              <h4>植物ガイド</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>観葉植物</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>盆栽</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>プリザーブド</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>食用</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>体験</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>オンライン講座</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>サブスクリプション</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ギフト</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>サポート</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>配送について</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>送料・お届けについて</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>返品・交換について</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>お問い合わせ</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="footer-site grid12 cols-pc2">
            <div className="profile">
              <img src="/img/logo.svg" alt="BOTA" />
              <p>
                〒901-3125
                <br />
                沖縄県島尻郡久米島字鳥島グスク
                <br />
                0997-1234-5678
              </p>
            </div>

            <div className="copyright">
              <ul>
                <li>
                  <Link href="/">
                    <a>会社概要</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>プライバシーポリシー</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>サイトマップ</a>
                  </Link>
                </li>
              </ul>
              <p>@ BOTA. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
