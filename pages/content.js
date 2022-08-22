import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faTint,
  faThermometerHalf,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <>
      <Head>
        <title>サボテンセット EA201 - BOTA</title>
      </Head>
      <div className="content">
        <header className="header partsGrid">
          <nav className="header-nav grid12">
            <img src="/img/logo-gray.svg" alt="" />
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
        </header>

        <article className="item partsGrid">
          <figure className="item-photo">
            <img src="/img/item-ea201.jpg" alt="" />
          </figure>

          <div className="grid12">
            <div className="item-body">
              <h1>サボテンセット EA201</h1>
              <p>
                個性豊かな4種類のサボテンをセットにしました。小ぶりなサボテンたちなので、窓際やテーブルに置くのにぴったりです。季節ごとに花を咲かせたり、葉を厚くしたりと楽しませてくれます。
              </p>

              <ul>
                <li>
                  <FontAwesomeIcon icon={faTint} className="fas fa-fw" />
                  <h3>水やり</h3>
                  <p>
                    土の表面が乾かない程度に。冬場は月に1回程度で大丈夫です。
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faThermometerHalf} className="fas fa-fw" />
                  <h3>温度</h3>
                  <p>5度以上をキープしてください。</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSun} className="fas fa-fw" />
                  <h3>日当たり</h3>
                  <p>適度に日当たりのいいところにおいてやると◎です。</p>
                </li>
              </ul>
            </div>

            <form className="item-order">
              <p className="price">
                7,500円 <span> (税込) </span>
              </p>

              <label className="qty">
                数量
                <select>
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>

              <button type="submit" className="btn">
                <FontAwesomeIcon icon={faShoppingCart} className="fas" />
                カートに入れる
              </button>
            </form>
          </div>
        </article>

        <section className="list list-item partsGrid">
          <div className="grid12 frame">
            <h2>人気の植物</h2>

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
                    <img src="/img/item-flower.jpg" alt="" />
                    <h3>フラワーポット</h3>
                    <p>¥4,200</p>
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
